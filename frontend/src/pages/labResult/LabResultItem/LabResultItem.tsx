import { ILabResult } from "../../../types";
import './labresultItem.css'; 

export interface ILabResultItem {
    labResult: ILabResult;
}

export const LabResultItem = ({labResult}: ILabResultItem) => {
    const excludeFields = ['patient_id']; 

    const dataEntries = Object.entries(labResult)
                              .filter(([key]) => !excludeFields.includes(key));

    return (
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
                            <td>{key.replace(/_/g, ' ')}</td>
                            <td>{value !== null && value !== undefined ? String(value) : 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};