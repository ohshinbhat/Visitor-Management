import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
const hostDetails = { name: "Mithali", position: "Senior Software Engineer" };
const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="nav">
        <div className="logo">
          VISITOR
          <br />
          MANAGER
        </div>
        <div className="user">
          <b>Host Name: </b>
          {hostDetails.name}
          <br />
          <b>Position:</b>
          {hostDetails.position}
        </div>
        <div className="options">
          <div>
            <AiOutlineEdit />
          </div>
          <div>Create Appointment</div>
        </div>
        <div className="options">
          <div>
            <LuClipboardList />
          </div>
          <div>Active Appointment</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
