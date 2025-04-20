import { Collapsable } from "../../components/collapsable/Collapsable";
import { LabResultItem } from "./LabResultItem/LabResultItem";
import { useLabResult } from "./useLabResult";
import './labResult.css';
import { useNavigate } from "react-router-dom";

export const LabResults = () => {
    const {selectedPatient, loading} = useLabResult();
    const navigate = useNavigate();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (!selectedPatient) {
        navigate('/patients');
    }
    return (
        <div>
           {selectedPatient && selectedPatient?.lab_results.map((labResult, index) => (
                <Collapsable key={index} header={`Result Unit ${labResult.result_unit}`}>
                    <LabResultItem labResult={labResult} />
                </Collapsable>
            ))}
        </div>
    );
}

export default LabResults;