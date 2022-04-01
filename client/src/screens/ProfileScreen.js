import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUser } from "../redux/actions/userAction";
import { Card, Form } from "react-bootstrap";
const ProfileScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;

  const updateUserReducer = useSelector((state) => state.updateUserReducer);
  const { success, loading, error } = updateUserReducer;

  const [name, setName] = useState(userInfo.user.name);
  const [email, setEmail] = useState(userInfo.user.email);
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const updateHandler = (e) => {
    e.preventDefault();
    if (password == cpassword) {
      const user = {
        name,
        email,
        password,
      };
      dispatch(updateUser(user));
      alert("please re login");
      localStorage.removeItem("userInfo");
      history.push("/login");
    } else {
      alert("password is not match");
    }
  };
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history]);
  return (
    <Card className="card__login">
      <Form onSubmit={updateHandler} className="login">
        <h2>Edit-Profile</h2>
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
            onChange={(e) => setCpassword(e.target.value)}
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
            {loading ? <Loader /> : "Update"}
          </button>
        </div>
      </Form>
    </Card>
  );
};

export default ProfileScreen;
