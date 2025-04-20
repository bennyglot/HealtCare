import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";

type Position = "left" | "right" | "top" | "bottom";

// Payload only needs generic content now
interface OpenPanelPayload {
    content: React.ReactNode;
    position?: Position;
}

export interface IContentPanelState {
    isOpen: boolean;
    position: Position;
    content: React.ReactNode | null;
    // Remove patientId
    // patientId: string | null;
}

const initialState: IContentPanelState = {
    isOpen: false,
    position: "right",
    content: null,
    // Remove patientId
    // patientId: null,
};

export const contentPanelSlice = createSlice({
    name: "contentPanel",
    initialState,
    reducers: {
        openPanel: (state, action: PayloadAction<OpenPanelPayload>) => {
            state.isOpen = true;
            state.content = action.payload.content; // Set only generic content
            // Remove patientId logic
            // state.patientId = action.payload.patientId || null;
            state.position = action.payload.position || "right";
        },
        closePanel: (state) => {
            state.isOpen = false;
            state.content = null;
            // Remove patientId logic
            // state.patientId = null;
        },
        // ... other reducers
    },
});

export const { openPanel, closePanel } = contentPanelSlice.actions;
export const contentPanelReducer = contentPanelSlice.reducer;
export const selectContentPanel = (state: { contentPanel: IContentPanelState }) => state.contentPanel;