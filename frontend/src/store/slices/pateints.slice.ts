import { createSlice } from "@reduxjs/toolkit";
import { IPaginatedResponse, IPatient, IPatientDetails } from "../../types";

interface patientsState {
    patients: IPaginatedResponse<IPatient>;
    selectedPatient: IPatientDetails | null;
    loading: boolean;
    error: string | null;
}
const patientsIntialStatus: patientsState = {
    patients: {
        data: [],
        total: 0,
        page: 1,
        limit: 10,
        filters: [],
    },
    selectedPatient: null,
    loading: false,
    error: null,
};
export const patientsSlice = createSlice({
    name: "patientsReducer",
    initialState: patientsIntialStatus,
    reducers: {
        setPatients: (state, action) => {
            state.patients = action.payload;
        },
        setSelectedPatient: (state, action) => {
            state.selectedPatient = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
})

export const { setPatients, setSelectedPatient, setLoading, setError } = patientsSlice.actions;
export const patientsReducer = patientsSlice.reducer;