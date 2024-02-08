import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "kminchelle",
    password: "0lelplR",
  });

  const handleSubmit = async () => {
    const headers = { "Content-Type": "application/json" };
    const {
      data: { token },
    } = await axios.post("https://dummyjson.com/auth/login", userData, {
      headers,
    });

    localStorage.setItem("token", token);
  };
  return (
    <>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={userData.username}
            readOnly
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter password"
            value={userData.password}
            readOnly
          />
        </Form.Group>
        <Button type="submit" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
