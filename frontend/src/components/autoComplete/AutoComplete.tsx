import React, { useState } from "react";
import { OptionType, useAutoComplete } from "./useAutoComplete";

interface AutoCompleteProps {
  options: OptionType[];
  filter: string;
  onSelect?: (option: OptionType | null) => void;
}

export const AutoComplete: React.FC<AutoCompleteProps> = ({ options, onSelect, filter }) => {
  const { search, setSearch, filteredOptions } = useAutoComplete(options);
  const [selected, setSelected] = useState<OptionType | null>(null);

  const handleSelect = (opt: OptionType) => {
    setSelected(opt);
    setSearch(""); // Clear input after selection
    onSelect?.(opt);
  };

  const handleClear = () => {
    setSelected(null);
    setSearch("");
    onSelect?.(null);
  };

  return (
    <div style={{ position: "relative" }}>
      {selected && (
        <div
          style={{
            background: "#f0f0f0",
            padding: "6px 8px",
            borderRadius: "4px",
            marginBottom: 4,
            border: "1px solid #ccc",
            color: "#333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <span>
            Selected: <strong>{selected.label}</strong>
          </span>
          <button
            onClick={handleClear}
            style={{
              background: "none",
              border: "none",
              color: "#888",
              fontWeight: "bold",
              fontSize: "1.1em",
              cursor: "pointer",
              marginLeft: 8,
            }}
            aria-label="Clear selection"
            type="button"
          >
            ×
          </button>
        </div>
      )}
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder={`Search ${filter}`}
        style={{ width: "100%", padding: "8px" }}
      />
      {search && (
        <ul
          style={{
            position: "absolute",
            width: "100%",
            background: "#fff",
            border: "1px solid #ccc",
            margin: 0,
            padding: 0,
            listStyle: "none",
            maxHeight: 150,
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {filteredOptions.length === 0 && (
            <li style={{ padding: "8px" }}>No options</li>
          )}
          {filteredOptions.map((opt) => (
            <li
              key={opt.value}
              style={{ padding: "8px", cursor: "pointer" }}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
