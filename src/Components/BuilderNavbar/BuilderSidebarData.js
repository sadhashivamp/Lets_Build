import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const BuilderSidebarData = [
  {
    title: "Profile",
    path: "/Bprofile",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "MyBids",
    path: "/bids",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "AvailableBids",
    path: "/availablebids",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Chat",
    path: "/chat",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Notifications",
    path: "/notification",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
