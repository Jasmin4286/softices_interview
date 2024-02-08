import moment from "moment/moment";
import React from "react";

const Dashboard = () => {
  const myDate = new Date().toTimeString();
  const getHours = myDate.split(":")[0];

  const morningMsg = () => {
    if (getHours <= 12) {
      return "Good morning";
    } else if (getHours <= 17) {
      return "Good Afternoon";
    } else if (getHours <= 20) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };
  return (
    <>
      <h1>Dashboard</h1>
      {`${morningMsg()} Jasmin Vaghasiya`}
    </>
  );
};

export default Dashboard;
