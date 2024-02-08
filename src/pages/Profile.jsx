import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  useEffect(() => {
    getloggenInUsers();
  }, []);

  const getloggenInUsers = async () => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const { status, data } = await axios.get("https://dummyjson.com/auth/me", {
      headers,
    });
    if (status === 200) {
      setLoggedInUser(data);
    }
  };

  if (Object.keys(loggedInUser).length === 0) {
    return <h1>Loading......</h1>;
  }

  const { firstName, lastName, image, email, birthDate, gender } = loggedInUser;
  return (
    <>
      {localStorage.getItem("token") ? (
        <Table responsive>
          <thead>
            <tr>
              <th>firstname</th>
              <th>lastname</th>
              <th>image</th>
              <th>email</th>
              <th>birthDate</th>
              <th>gender</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>
                <img src={image} alt="image" width="50" />
              </td>
              <td>{email}</td>
              <td>{birthDate}</td>
              <td>{gender}</td>
              <td>
                <Link to="/">
                  <Button variant="primary">Back</Button>
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Profile;
