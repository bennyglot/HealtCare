import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Table } from "../../components/table/Table";
import { usePatients } from "./usePatients";
import "./patients.css";
import { Pagination } from "../../components/pagination/Pagination";
import { Filters } from "../../components/filters/Filters";

export const Patients = () => {
    const { patients, page, setPage, itemsPerPage, setItemsPerPage, handleFiltersChange, isPanelVisible, setIsPanelVisible } = usePatients();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const pathParts = location.pathname.split('/');
        if (pathParts.length === 3 && pathParts[1] === 'patients' && pathParts[2]) {
            setIsPanelVisible(true);
        } else {
            setIsPanelVisible(false);
        }
    }, [location.pathname, setIsPanelVisible]);

    const handleRowClick = (row: { patient_id: string }) => {
        navigate(`/patients/${row.patient_id}`);
    };

    const handleClosePanel = () => {
        setIsPanelVisible(false);
        navigate('/patients');
    };

    return (
        <>
            <div className="patients-labresults-container">
                <div className="patients-table">
                    <Filters filters={patients.filters} onFilterChange={handleFiltersChange} />
                    <Table
                        data={patients.data}
                        onRowClick={handleRowClick}
                    />
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        page={page}
                        setItemsPerPage={setItemsPerPage}
                        setPage={setPage}
                        total={patients.total}
                    />
                </div>

                <div className={`labresults-panel ${!isPanelVisible ? 'hidden' : ''}`}>
                    {isPanelVisible && (
                         <button
                            className="close-panel-btn"
                            onClick={handleClosePanel}
                            aria-label="Close Lab Results"
                            style={{marginRight: '4vw'}}
                         >
                            &times;
                         </button>
                    )}
                    <div>
                       <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};