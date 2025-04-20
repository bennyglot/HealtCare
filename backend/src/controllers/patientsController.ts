import { Request, Response } from 'express';
import { getAllPatients, getPatientById, getLabResultsByTestId, getPatientsFilterOptions } from '../services/patientsService';
import { IPaginatedResponse } from '../types';

// Get all patients with pagination
export const getPatients = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const filters = req.query.filters as string;
    // Parse filters from query
   

    // Pass filters to service
    const patientsResult = await getAllPatients(page, limit, filters);
    const filterResult = await getPatientsFilterOptions();

    const filtersArray = Array.isArray(filterResult) ? filterResult : filterResult.filters;

    const response: IPaginatedResponse<any> = {
      data: patientsResult.data,
      total: patientsResult.total,
      page,
      limit,
      filters: filtersArray
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ error: 'Failed to fetch patients' });
  }
};

export const getPatientByIdController = async (req: Request, res: Response) => {
  const { patientId } = req.params;

  try {
    const patientResult = await getPatientById(patientId);
    if (patientResult) {
      res.status(200).json({ data: [patientResult] });
    } else {
      res.status(404).json({ error: 'Patient not found' });
    }
  } catch (error) {
    console.error('Error fetching patient:', error);
    res.status(500).json({ error: 'Failed to fetch patient' });
  }
};

export const getPatientLabResultsByTestId = async (req: Request, res: Response) => {
  const { patientId, testId } = req.params;

  try {
    const labResults = await getLabResultsByTestId(patientId, testId);
    if (labResults.length > 0) {
      res.status(200).json({ data: [labResults] });
    } else {
      res.status(404).json({ error: 'No lab results found for this test ID' });
    }
  } catch (error) {
    console.error('Error fetching lab results:', error);
    res.status(500).json({ error: 'Failed to fetch lab results' });
  }
}

