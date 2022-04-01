import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Container, Form, FormControl, Button, Card } from "react-bootstrap";
const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const registerReducer = useSelector((state) => state.registerReducer);
  const { success, error, loading } = registerReducer;
  const registerHandler = (e) => {
    e.preventDefault();
    if (password == cpassword) {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      console.log(user);
      dispatch(register(user));
    } else {
      alert("password is not matched");
    }
  };
  useEffect(() => {
    if (success) {
      history.push("/login");
    }
  }, [history, success]);
  return (
    <Container>
      <Card className="card__login">
        <Form onSubmit={registerHandler} className="login">
          <h2>Sign Up</h2>
          {error && <Error error={error} />}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </Form.Group>
          <div
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button className="btn" type="submit">
              {loading ? <Loader /> : "Sign Up"}
            </button>
            <Card.Text>
              Are you have any account..?<a href="/login">Sign In</a>
            </Card.Text>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
export default Register;
