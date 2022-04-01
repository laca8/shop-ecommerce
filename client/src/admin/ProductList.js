import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../redux/actions/productAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useHistory } from "react-router-dom";
const ProductList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const getAllProductsReducer = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getAllProductsReducer;
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;
  useEffect(() => {
    if (userInfo && userInfo?.user.isAdmin) {
      dispatch(getAllProducts());
    }
  }, []);
  const deleteHandler = (id) => {
    dispatch(deleteProduct(id));
    alert("product deleted");
    window.location.reload();
  };
  const updateHandler = (id) => {
    history.push(`/admin/editProduct/${id}`);
  };
  return (
    <div>
      <h3>Products List</h3>
      <table className="table table-bordered">
        <thead>
          <th>Product Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>countInStock</th>
          <th>Rating</th>
          <th>Action</th>
        </thead>
        <tbody>
          {loading && <Loader />}
          {error && <Error error={error} />}
          {products &&
            products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                {product.countInStock ? (
                  <td>{product.countInStock}</td>
                ) : (
                  <td>0</td>
                )}
                <td>{product.rating}</td>
                <td>
                  {" "}
                  <i
                    className="fa-solid fa-pen-to-square"
                    onClick={() => updateHandler(product._id)}
                  ></i>{" "}
                  <i
                    className="far fa-trash-alt"
                    onClick={() => deleteHandler(product._id)}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
