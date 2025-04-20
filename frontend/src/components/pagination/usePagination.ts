import { useState } from "react";

export const usePagination = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [total, setTotal] = useState(0);
    
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    const handleTotalChange = (newTotal: number) => {
        setTotal(newTotal);
    }   
    
    const handleLimitChange = (newLimit: number) => {
        setLimit(newLimit);
        setPage(1); // Reset to first page when limit changes
    };
    
    return {
        page,
        limit,
        total,
        handlePageChange,
        handleLimitChange,
        handleTotalChange
    };
}