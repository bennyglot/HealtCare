import { useState, useCallback } from "react";

export const useContentPanel = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openPanel = useCallback(() => setIsOpen(true), []);
  const closePanel = useCallback(() => setIsOpen(false), []);
  const togglePanel = useCallback(() => setIsOpen(prev => !prev), []);

  return { isOpen, openPanel, closePanel, togglePanel };
};