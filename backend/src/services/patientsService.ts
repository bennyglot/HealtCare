import { getDb } from "../config/db";
import { IPatient } from "../types";
import { IFilter } from "../types/api.types";

// Fetch all patients with pagination and filters
export const getAllPatients = async (
  page = 1,
  limit = 10,
  filters: string   
): Promise<{ data: IPatient[]; total: number }> => {
  try {
    console.log("[MongoDB] Fetching all patients from database...");
    const db = await getDb();
    const skip = (page - 1) * limit;

    // Handle case when filters is undefined
    let filtersObj = {};
    if (filters) {
      try {
      filtersObj = JSON.parse(filters);
      } catch (error) {
      console.error("Error parsing filters:", error);
      }
    }

    // Build MongoDB filter
    const mongoFilters: any = {};
    Object.entries(filtersObj).forEach(([key, values]) => {
      if (Array.isArray(values) && values.length > 0) {
      mongoFilters[key] = { $in: values };
      }
    });

    const [patients, total] = await Promise.all([
      db.collection('patients').find(mongoFilters)
        .skip(skip)
        .limit(limit)
        .toArray(),
      db.collection('patients').countDocuments(mongoFilters)
    ]);

    // Map patients to match the updated IPatient interface where lab_results is a number
    const mappedPatients = patients.map(patient => {
      const labResultsCount = patient.lab_results && Array.isArray(patient.lab_results)
        ? patient.lab_results.length
        : 0;
      return {
        ...patient,
        lab_results: labResultsCount
      } as unknown as IPatient;
    });

    return { data: mappedPatients, total };
  } catch (error) {
    console.error("Error fetching all patients from MongoDB:", error);
    throw error;
  }
};

// Fetch a single patient by ID
export const getPatientById = async (patientId: string): Promise<IPatient | null> => {
  try {
    console.log("[MongoDB] Fetching patientId...");
    const db = await getDb();
    const patient = await db.collection('patients').findOne({ patient_id: patientId });
    return patient as unknown as IPatient;
  } catch (error) {
    console.error("Error fetching all patients from MongoDB:", error);
    throw error;
  }
};

// Fetch lab results by test ID for a specific patient
export const getLabResultsByTestId = async (patientId: string, testId: string): Promise<any[]> => {
  try {
    console.log(`[MongoDB] Fetching lab results for patient ${patientId} and test ID ${testId}...`);
    const db = await getDb();
    
    const results = await db.collection('patients')
      .aggregate([
        { $match: { patient_id: patientId } },
        { $unwind: "$lab_results" },
        { $match: { "lab_results.test_id": testId } },
        { $replaceRoot: { newRoot: "$lab_results" } }
      ])
      .toArray();
      
    return results;
  } catch (error) {
    console.error(`Error retrieving lab results for patient ${patientId} and test ID ${testId}:`, error);
    throw error;
  }
};

export const getPatientsFilterOptions = async () => {
  try {
    const db = await getDb();
    // Get a sample patient to extract keys
    const samplePatient = await db.collection('patients').findOne({});
    if (!samplePatient) return { filters: [] };

    // Remove _id and lab_results from filterable fields
    const keys = Object.keys(samplePatient).filter(
      (key) => key !== "_id" && key !== "lab_results"
    );

    // For each key, get unique values and sort them
    const filters: IFilter[] = [];
    for (const key of keys) {
      const values = await db.collection('patients').distinct(key);
      const sortedValues = values
        .map(v => (v === null || v === undefined ? "" : String(v)))
        .sort((a, b) => a.localeCompare(b));
      filters.push({
        filter: key,
        options: sortedValues
      });
    }

    // For lab_results, get the total number of lab results (sum of all arrays)
    const labResultsCountAgg = await db.collection('patients').aggregate([
      { $project: { lab_results_count: { $size: { $ifNull: ["$lab_results", []] } } } },
      { $group: { _id: null, total: { $sum: "$lab_results_count" } } }
    ]).toArray();
    const labResultsTotal = labResultsCountAgg[0]?.total || 0;

    // Add lab_results as a filter with the total as a string option
    filters.push({
      filter: "lab_results",
      options: [String(labResultsTotal)]
    });

    return  filters;
  } catch (error) {
    console.error("Error fetching filter options:", error);
    throw error;
  }
};

