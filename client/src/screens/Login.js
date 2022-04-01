import React, { useState, useEffect } from "react";
import { login } from "../redux/actions/userAction";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Container, Form, FormControl, Button, Card } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const loginReducer = useSelector((state) => state.loginReducer);
  const { success, error, loading, userInfo } = loginReducer;
  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(login(user));
  };
  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  return (
    <Container>
      <Card className="card__login">
        <Form onSubmit={loginHandler} className="login">
          <h2>Login</h2>
          {error && <Error error={error} />}
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
          <div
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button className="btn" type="submit">
              {loading ? <Loader /> : "Login"}
            </button>
            <Card.Text>
              Don`t have any account..?<a href="/register">Sign Up</a>
            </Card.Text>
          </div>
        </Form>
      </Card>
    </Container>
  );
};
export default Login;
