import { useState } from "react";
import { IFilter } from "../../types";
import { OptionType } from "../autoComplete/useAutoComplete";

export interface UseFiltersResult {
  selected: Record<string, string>;
  onChange: (filterKey: string, value: OptionType | null) => void;
  getOptions: (filter: IFilter) => OptionType[];
}

export const useFilters = (
  onFilterChange?: (selected: Record<string, string>) => void
): UseFiltersResult => {
  const [selected, setSelected] = useState<Record<string, string>>({});

  const onChange = (filterKey: string, value: OptionType | null) => {
    setSelected((prev) => {
      let updated;
      if (value === null) {
        // Remove the filter key if cleared
        updated = { ...prev };
        delete updated[filterKey];
      } else {
        updated = { ...prev, [filterKey]: value.value };
      }
      if (onFilterChange) {
        onFilterChange(updated);
      }
      return updated;
    });
  };

  // Format options to OptionType {label, value}
  const getOptions = (filter: IFilter): OptionType[] =>
    (filter.options || []).map((opt: string) => ({
      label: opt,
      value: opt,
    }));

  return { selected, onChange, getOptions };
};