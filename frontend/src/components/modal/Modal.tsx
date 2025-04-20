import React from 'react';
import './contentPanel.css'; // Make sure CSS is imported

type Position = "left" | "right" | "top" | "bottom";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  position?: Position;
  children: React.ReactNode; // Component or content to render
}

export const Modal: React.FC<IModal> = ({
  isOpen,
  onClose,
  position = "right", // Default position
  children
}) => {
  if (!isOpen) {
    return null; // Don't render if closed
  }

  return (
    <>
      {/* Optional: Add an overlay */}
      <div className="content-panel-overlay" onClick={onClose}></div>

      <div className={`content-panel panel-${position}`}>
        <button
          className="content-panel-close-btn"
          onClick={onClose}
          aria-label="Close Panel"
        >
          &times; {/* Close icon */}
        </button>
        <div className="content-panel-body">
          {children} {/* Render the passed component/content */}
        </div>
      </div>
    </>
  );
};