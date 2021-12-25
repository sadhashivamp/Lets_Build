import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const UserSidebarData1 = [
  {
    title: "Profile",
    path: "/usrprfl",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/Uprojects",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/Uchats",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/Unotifications",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
