import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Header/NavBar";
import Logo from "./Components/Header/Logo";
import Signup from "./Components/Header/Signup";
import User from "./Components/Header/User";
import Builder from "./Components/Header/Builder";

import UserNavbar1 from "./UserNavbar1/UserNavbar1";
import UserProfile from "./UserNavbar1/Pages/UserProfile";
import Projects from "./UserNavbar1/Pages/Projects";
import UNotification from "./UserNavbar1/Pages/UNotification";
import UChat from "./UserNavbar1/Pages/UChat";

import BuilderNavbar from "./Components/BuilderNavbar/BuilderNavbar";
import Chat from "./Components/BuilderNavbar/Pages/Chat";
import Notification from "./Components/BuilderNavbar/Pages/Notification";
import MyBids from "./Components/BuilderNavbar/Pages/MyBids";
import Profile from "./Components/BuilderNavbar/Pages/Profile";
import AvailableBids from "./Components/BuilderNavbar/Pages/AvailableBids";

import Footer1 from "./Components/Footer1/Footer1";
import ImageSlider from "./Components/HomeSlider/ImageSlider";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import Post from "./UserNavbar1/Pages/Post";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/logo" element={<Logo />} />
          <Route path="/letsbuild" element={<ImageSlider />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<User />} />
          <Route path="/builder" element={<Builder />} />

          {/* User Dashboard */}

          <Route path="/usernavbar1" exact element={<UserNavbar1 />} />
          <Route path="/post" exact element={<Post />} />
          <Route path="/usrprfl" exact element={<UserProfile />} />
          <Route path="/Uprojects" exact element={<Projects />} />
          <Route path="/Unotification" exact element={<UNotification />} />
          <Route path="/Uchats" exact element={<UChat />} />

          {/* Builder Dashboard */}
          <Route path="/buildernavbar" exact element={<BuilderNavbar />} />
          <Route path="/bids" exact element={<MyBids />} />
          <Route path="/Bprofile" element={<Profile />} />
          <Route path="/availablebids" element={<AvailableBids />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/notification" exact element={<Notification />} />
        </Routes>

        <Services />
        <Testimonials />
        <Footer1 />
      </Router>
    </div>
  );
};

export default App;
