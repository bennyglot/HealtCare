import './pagination.css';

export interface IPaginagtion {
    page: number;
    setPage: (page: number) => void;
    itemsPerPage: number;
    setItemsPerPage: (itemsPerPage: number) => void;
    total: number;
}
export const Pagination = ({itemsPerPage, page, setItemsPerPage, setPage, total}: IPaginagtion) => {
    const totalPages = Math.ceil(total / itemsPerPage);

    return (
        <>     {/* Pagination Controls */}
     <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8, width: '23vw' }}>
     <div>
       <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
       <span style={{ margin: "0 8px" }}>
         Page {page} of {totalPages}
       </span>
       <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
     </div>
     <div>
       <label>
         Items per page:{" "}
         <select
           value={itemsPerPage}
           onChange={e => {
             setItemsPerPage(Number(e.target.value));
             setPage(1);
           }}
         >
           {[5, 10, 20, 50, 100].map(n => (
             <option key={n} value={n}>{n}</option>
           ))}
         </select>
       </label>
     </div>
   </div>
   </> );
}