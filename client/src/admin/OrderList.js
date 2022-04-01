import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminOrders, deleteOrder } from "../redux/actions/orderAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import axios from "axios";

const OrderList = () => {
  const dispatch = useDispatch();
  const adminOrdersReducer = useSelector((state) => state.adminOrdersReducer);
  const { loading, orders, error } = adminOrdersReducer;
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;
  useEffect(() => {
    if (userInfo && userInfo?.user.isAdmin) {
      dispatch(getAdminOrders());
    }
  }, []);
  const deleteHandler = (id) => {
    dispatch(deleteOrder(id));
    alert("product deleted");
    window.location.reload();
  };
  const updateOrder = async (id) => {
    const config = {
      headers: {
        token: userInfo.token,
      },
    };
    await axios.put(`/api/orders/${id}`, { isDelivered: true }, config);
    window.location.reload();
  };
  return (
    <div className="container">
      <h3>Order List</h3>
      <table className="table table-bordered">
        <thead>
          <th>Order Id</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Transaction ID</th>
          <th>status</th>
          <th>Delete</th>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error={error} />}
          {orders &&
            orders.map((order) => (
              <tr
                key={order._id}
                onClick={() => (window.location.href = `/order/${order?._id}`)}
              >
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt}</td>
                <td>{order.transactionId}</td>
                <td>
                  {order.isDelivered ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    <i
                      className="fa-solid fa-x"
                      onClick={() => updateOrder(order._id)}
                      style={{ color: "red" }}
                    ></i>
                  )}
                </td>
                <td>
                  {" "}
                  <i
                    className="far fa-trash-alt"
                    onClick={() => deleteHandler(order._id)}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
