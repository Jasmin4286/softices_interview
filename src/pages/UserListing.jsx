import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const UserListing = () => {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);

  const getUsersData = async () => {
    const res = await axios.get("https://dummyjson.com/users");
    if (res.status == 200) {
      setUsersData(res.data.users);
      localStorage.setItem("users", JSON.stringify(res.data.users));
    }
  };

  if (usersData.length === 0) {
    return <h1>Loading......</h1>;
  }
  return (
    <>
      {localStorage.getItem("token") ? (
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>firstname</th>
              <th>lastname</th>
              <th>image</th>
              <th>address</th>
              <th>university</th>
              <th>company address</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.map((data, index) => {
              const {
                id,
                firstName,
                lastName,
                image,
                address: { address },
                company: {
                  address: { address: company_address },
                },
                university,
              } = data;
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <Link to={`/users/${id}`}>
                    <td>
                      <img src={image} alt="image" width="50" />
                    </td>
                  </Link>
                  <td>{address}</td>
                  <td>{university}</td>
                  <td>{company_address}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default UserListing;
