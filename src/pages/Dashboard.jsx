import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [quotes, setQuotes] = useState({});
  useEffect(() => {
    getQuotesData();
  }, []);

  const getQuotesData = async () => {
    const headers = { "Content-Type": "application/json" };
    const { status, data } = await axios.get(
      "https://dummyjson.com/quotes/random",
      {
        headers: headers,
      }
    );
    if (status == 200) {
      setQuotes(data);
    }
  };
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

      <h3>Quotes</h3>
      <p>{`Quote: ${quotes.quote}`}</p>
      <p>{`Author: ${quotes.author}`}</p>
    </>
  );
};

export default Dashboard;
