import { ReactNode } from "react";
import { useCollapsable } from "./useCollapsable";
import './collapsable.css';
interface CollapsableProps {
  children: ReactNode;
  header?: ReactNode;
}

export const Collapsable = ({ children, header }: CollapsableProps) => {
  const { isOpen, toggle } = useCollapsable();

  return (
    <div className="collapsable">
      <button
        onClick={toggle}
        style={{
          display: "flex",
          gap: "2px",
          fontWeight: "bold",
          fontSize: "1rem",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "3px 0"
        }}
      >
        <span style={{ fontSize: "1.2em", marginRight: "8px" }}>
          {isOpen ? "−" : "+"}
        </span>
        <span style={{ flex: 1, textAlign: "center" }}>
          {header}
        </span>
      </button>
      {isOpen && (
        <div className="collapsable-content">
          {children}
        </div>
      )}
    </div>
  );
};