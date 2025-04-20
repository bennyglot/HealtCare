import { ILabResult } from "../../../types";
import './labresultItem.css'; // Ensure CSS is imported

export interface ILabResultItem {
    labResult: ILabResult;
}

export const LabResultItem = ({labResult}: ILabResultItem) => {
    const excludeFields = ['patient_id']; // Fields to exclude from the table

    // Filter and prepare data entries for the table
    const dataEntries = Object.entries(labResult)
                              .filter(([key]) => !excludeFields.includes(key));

    return (
        // Use the class on the container or table itself
        <div className="lab-result-item-container">
            <table className="lab-result-item-table">
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {dataEntries.map(([key, value]) => (
                        <tr key={key}>
                            <td>{key.replace(/_/g, ' ')}</td> {/* Replace underscores for readability */}
                            <td>{value !== null && value !== undefined ? String(value) : 'N/A'}</td> {/* Handle null/undefined */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};