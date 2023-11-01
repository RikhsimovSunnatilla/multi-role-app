import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

import useSignIn from "../../hooks/useSignIn";

export const SignIn = () => {
  const { triggerSignIn } = useSignIn();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    triggerSignIn(formData).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="d-flex justify-content-center flex">
      <Stack gap={3} className="justify-content-center mt-5" style={{ maxWidth: "400px" }}>
        <h1 className="text-center">Sign in</h1>
        <Form onSubmit={handleSubmit}>
          <Stack gap={2}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                minLength={8}
                required
              />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Sign in"}
            </Button>
          </Stack>
        </Form>
      </Stack>
    </div>
  );
};
