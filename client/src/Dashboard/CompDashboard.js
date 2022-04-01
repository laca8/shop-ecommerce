import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAdminUsers } from "../redux/actions/userAction";
import { getAllProducts } from "../redux/actions/productAction";
import { getAdminOrders } from "../redux/actions/orderAction";
const CompDashboard = () => {
  const dispatch = useDispatch();
  const adminUsersReducer = useSelector((state) => state.adminUsersReducer);
  const { users } = adminUsersReducer;

  const getAllProductsReducer = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { products } = getAllProductsReducer;

  const adminOrdersReducer = useSelector((state) => state.adminOrdersReducer);
  const { orders } = adminOrdersReducer;

  useEffect(() => {
    dispatch(getAdminOrders());
  }, []);

  useEffect(() => {
    dispatch(getAdminUsers());
  }, []);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <div className="info-data">
        <div className="card">
          <div className="head">
            <div>
              <h2>{users?.length}</h2>
              <p>users</p>
            </div>
            <i className="bx bx-trending-up icon"></i>
          </div>

          <progress className="progress" id="file" value="5" max="100">
            {" "}
            5%{" "}
          </progress>
        </div>
        <div className="card">
          <div className="head">
            <div>
              <h2>{products?.length}</h2>
              <p>Products</p>
            </div>
          </div>
          <progress className="progress" id="file" value="13" max="100">
            {" "}
            13%{" "}
          </progress>
        </div>
        <div className="card">
          <div className="head">
            <div>
              <h2>{orders?.length}</h2>
              <p>Orders</p>
            </div>
            <i className="bx bx-trending-up icon"></i>
          </div>

          <progress className="progress" id="file" value="5" max="100">
            {" "}
            5%{" "}
          </progress>
        </div>
      </div>
    </>
  );
};

export default CompDashboard;
