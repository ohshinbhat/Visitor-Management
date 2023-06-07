import React from "react";

const CreateAppointment = () => {
  return (
    <div className="create-container">
      <div className="wrap">
        <div className="head">Create An Appointment</div>
        <div className="form-container">
          <div className="head1">Enter Details</div>
          <div className="form-items">
            <div className="itema">
              Name: <input className="ipt" type="text"></input>
            </div>
            <div className="item">
              Email: <input className="ipt" type="email"></input>
            </div>
            <div className="item">
              Phone: <input className="ipt" type="number"></input>
            </div>
            <div className="item">
              Purpose: <input className="ipt" type="text"></input>
            </div>
            <div className="itemb">
              Date: <input className="ipt" type="date"></input>
            </div>
          </div>
        </div>
        <div className="btn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAppointment;
