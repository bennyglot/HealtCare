import { useEffect, useState, useRef, useCallback } from "react";
import { useApi } from "../../hooks/useApi"
import { useRedux } from "../../hooks/useRedux";
import { setPatients } from "../../store/slices/pateints.slice";
import { IPaginatedResponse, IPatient } from "../../types";

export const usePatients = () => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [isPanelVisible, setIsPanelVisible] = useState(false);

    const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({});

    const { fetchApi, loading } = useApi();
    const { useAppSelector, dispatch } = useRedux();
    const { patients } = useAppSelector(store => store.patients);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const getPatients = useCallback(async () => {
        if (loading) {
            return;
        }

        let url = `/patients?page=${page}&limit=${itemsPerPage}`;
        if (Object.keys(selectedFilters).length > 0) {
            const filters: Record<string, string[]> = {};
            Object.entries(selectedFilters).forEach(([key, value]) => {
                filters[key] = [value];
            });
            url += `&filters=${encodeURIComponent(JSON.stringify(filters))}`;
        }

        const patientsData = await fetchApi<IPaginatedResponse<IPatient>>(url);

        if (patientsData) {
            dispatch(setPatients(patientsData));
        }
    }, [fetchApi, page, itemsPerPage, selectedFilters, dispatch]);

    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        getPatients();

        const ONE_MINUTE_IN_MS = 30 * 1000;
        intervalRef.current = setInterval(() => {
            getPatients();
        }, ONE_MINUTE_IN_MS);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [dispatch, fetchApi, page, itemsPerPage, selectedFilters, getPatients]);

    const handleFiltersChange = (selected: Record<string, string>) => {
        setPage(1);
        setSelectedFilters(selected);
    }

    return {
        patients,
        loading,
        page,
        setPage,
        itemsPerPage,
        setItemsPerPage,
        handleFiltersChange,
        isPanelVisible,
        setIsPanelVisible
    }
}