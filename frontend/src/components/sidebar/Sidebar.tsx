import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Add styles for the sidebar

interface ISidebarItem {
  label: string;
  target: string;
}

interface ISidebarProps {
  items: ISidebarItem[];
}

export const Sidebar: React.FC<ISidebarProps> = ({ items }) => {

  return (
    <div className={`sidebar`}>
      <ul className="sidebar-items">
        {items.map((item, index) => (
          <li key={index} className="sidebar-item">
            <NavLink to={item.target} className="sidebar-link">
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;