import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { BuilderSidebarData } from "./BuilderSidebarData";
import "./BuilderNavbar.css";
import { IconContext } from "react-icons";

function BuilderNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="side_navbar">
          <Link to="#" className="side_menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="side_navbar-toggle">
              <Link to="#" className="side_menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {BuilderSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} className="side_icon">
                    {item.icon}
                    <span className="side_span">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default BuilderNavbar;
