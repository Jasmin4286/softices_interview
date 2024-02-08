import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Navigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const [singleUsers, setSingleUser] = useState({});
  useEffect(() => {
    getSingleUserData();
  }, []);

  const getSingleUserData = () => {
    let getAllusers = localStorage.getItem("users");
    if (getAllusers && getAllusers.length > 0) {
      getAllusers = JSON.parse(getAllusers);
      let finalObj = getAllusers.find((data) => data.id == id);
      setSingleUser(finalObj);
    }
  };

  if (Object.keys(singleUsers).length === 0) {
    return <h1>Loading......</h1>;
  }
  const { firstName, lastName, image, email, birthDate, gender } = singleUsers;
  return (
    <>
    {
      localStorage.getItem('token') ? <Table responsive>
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
          <img src={image} alt="image" width="50" />
          <td>{email}</td>
          <td>{birthDate}</td>
          <td>{gender}</td>
          <Link to="/users">
            <td>
              <Button variant="primary">Back</Button>
            </td>
          </Link>
        </tr>
      </tbody>
    </Table> : <Navigate to='/login'/>
    }
    </>
  );
};

export default SingleUser;
