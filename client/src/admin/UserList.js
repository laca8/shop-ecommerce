import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAdminUsers } from "../redux/actions/userAction";
import Error from "../components/Error";
import Loader from "../components/Loader";
const UserList = () => {
  const dispatch = useDispatch();
  const adminUsersReducer = useSelector((state) => state.adminUsersReducer);
  const { users, loading, error, success } = adminUsersReducer;
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;
  useEffect(() => {
    if (userInfo) {
      dispatch(getAdminUsers());
    }
  }, []);
  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
    alert("user deleted");
    window.location.reload();
  };
  return (
    <div className="container">
      <h3>User List</h3>
      <table className="table table-bordered">
        <thead>
          <th>User Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>isAdmin</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error={error} />}
          {users &&
            users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {user.isAdmin ? <td>true</td> : <td>false</td>}
                <td>
                  {" "}
                  <i
                    className="far fa-trash-alt"
                    onClick={() => deleteHandler(user._id)}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
