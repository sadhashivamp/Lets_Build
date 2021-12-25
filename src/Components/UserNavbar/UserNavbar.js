import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { UserSidebarData } from "./UserSidebarData";
import "./UserNavbar.css";
import { IconContext } from "react-icons";

function UserNavbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="side_navbar">
          <Link to="#" className="side_menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="side_navbar-toggle">
              <Link>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
              {UserSidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link className="side_icon" to={item.path}>
                      {item.icon}
                      <span className="side_span">{item.title} </span>
                    </Link>
                  </li>
                );
              })}
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default UserNavbar;
