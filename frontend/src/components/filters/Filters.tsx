import { IFilter } from "../../types";
import { AutoComplete } from "../autoComplete/AutoComplete";
import { useFilters } from "./useFilters";
import "./Filters.css";

interface FiltersProps {
  filters: IFilter[];
  onFilterChange?: (selected: Record<string, string>) => void;
}

export const Filters = ({ filters, onFilterChange }: FiltersProps) => {
  const { onChange, getOptions } = useFilters(onFilterChange);

  if (!filters || filters.length === 0) {
    return null; // No filters to display
  }
  return (
    <div className="filters">
      <h2>FILTERS:</h2>
      {filters.map((filter) => (
        <div key={filter.filter} className="filter-item">
          <AutoComplete
            options={getOptions(filter)}
            onSelect={(option) => onChange(filter.filter, option)}
            filter={filter.filter}
          />
        </div>
      ))}
    </div>
  );
};