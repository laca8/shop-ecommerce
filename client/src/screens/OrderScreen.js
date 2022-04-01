import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { getOrdersByUser } from "../redux/actions/orderAction";
const OrderScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;
  const getOrderUserByReducer = useSelector(
    (state) => state.getOrderUserByReducer
  );
  const { loading, success, orders, error } = getOrderUserByReducer;
  useEffect(() => {
    if (userInfo) {
      dispatch(getOrdersByUser());
    } else {
      history.push("/login");
    }
  }, [dispatch, userInfo]);

  return (
    <div
      className="container"
      style={{ textAlign: "center", marginTop: "4rem" }}
    >
      <h2>My Orders</h2>
      <table
        className="table table-hover  table-bordered"
        style={{ padding: "3rem" }}
      >
        <thead>
          <tr>
            <th>OrderId</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error={error} />}
          {orders &&
            orders.map((order) => (
              <tr
                onClick={() => (window.location = `/order/${order._id}`)}
                key={order._id}
              >
                <td>{order._id}</td>
                <td>{order.orderAmount}</td>
                <td>{order.createdAt}</td>
                <td>{order.transactionId}</td>
                <td>
                  {order.isDelivered ? (
                    <li>Delivered</li>
                  ) : (
                    <li>Not Delivered</li>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderScreen;
