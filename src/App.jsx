import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostLayout from "./components/HostLayout";
import SideBar from "./components/sidebar";
import CreateAppointment from "./components/CreateAppointment";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <SideBar />
        <CreateAppointment />
      </BrowserRouter>
    </div>
  );
};

export default App;
