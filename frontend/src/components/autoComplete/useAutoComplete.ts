import { useState, useMemo } from "react";

export interface OptionType {
  label: string;
  value: string;
}

export const useAutoComplete = (options: OptionType[]) => {
  const [search, setSearch] = useState("");
  const filteredOptions = useMemo(
    () =>
      options.filter(
        (opt) =>
          opt.label.toLowerCase().includes(search.toLowerCase()) ||
          opt.value.toLowerCase().includes(search.toLowerCase())
      ),
    [search, options]
  );

  return {
    search,
    setSearch,
    filteredOptions,
  };
};