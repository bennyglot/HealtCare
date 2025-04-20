/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTable, TableProps } from "./useTable";
import './table.css';

export function Table<T extends { patient_id: string } & Record<string, any>>(
    { data, onRowClick, selectedPatientId: selectedRowId }: TableProps<T> 
) {
  const { headers, rows, handleRowClick } = useTable(data, onRowClick);

  if (!rows || rows.length === 0) return <div>No data</div>;

  return (
    <div className="table-responsive"> 
      <table className="">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            console.log('Patient:', row.patient_id, 'Selected Patient ID:', selectedRowId);
          return (
            <tr
              key={row.patient_id || idx}
              onClick={() => handleRowClick(row)}
              style={{ cursor: onRowClick ? "pointer" : "default" }}
              className={row.patient_id === selectedRowId ? 'selected-row' : ''}
            >
              {headers.map((header) => (
                <td key={header} data-label={header}>{row[header]}</td>
              ))}
      </tr>
)
          }
           
          )}
        </tbody>
      </table>
    </div>
  );
}