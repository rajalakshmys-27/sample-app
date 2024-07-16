import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../viewcourse/Sidebar.css"; // Your existing styles

const Sidebar = ({ pages }) => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebar-scroll-container">
        <ul className="sidebar-list">
          {pages.map((page) => (
            <li
              key={page.id}
              className={`sidebar-item ${
                location.pathname === page.path ||
                (location.pathname === "/" && page.id === 1)
                  ? "active"
                  : ""
              }`}
            >
              <Link
                to={page.path}
                className="sidebar-link"
                // style={{ color: "#3a3a3a" }}
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
