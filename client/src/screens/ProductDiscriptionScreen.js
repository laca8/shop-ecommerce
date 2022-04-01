import React, { useEffect, useState } from "react";
import { getProductById } from "../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Review from "../components/Review";
import { Container } from "react-bootstrap";
const ProductDiscriptionScreen = ({ match }) => {
  const [qty, setQty] = useState(1);
  const productId = match.params.id;
  const dispatch = useDispatch();
  const getProductByIdReducer = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, error, loading } = getProductByIdReducer;
  const loginReducer = useSelector((state) => state.loginReducer);
  const { userInfo } = loginReducer;
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId, dispatch]);
  const addToCartHandler = () => {
    dispatch(addToCart(product, qty));
  };
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div
          className="row"
          style={{ paddingTop: "1rem", paddingLeft: "1rem" }}
        >
          <div className="col-md-6">
            <div className="card" style={{ padding: "1rem" }}>
              <h2>{product.name}</h2>
              <img
                src={product.image}
                className="img-fluid"
                style={{ width: "400px" }}
              />
              <p>{product.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="m2">
              <h3>Price : {product.price},</h3>
              <hr />
              <h3>Select Quantity</h3>
              {product.countInStock ? (
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => {
                    return (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    );
                  })}
                </select>
              ) : (
                <button className="btn btn-dark">Out of Stock</button>
              )}

              <hr />
              <button
                className="btn btn-dark"
                style={{ color: "#fff" }}
                onClick={addToCartHandler}
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </button>
            </div>
            <hr />
            {userInfo && <Review productId={productId} />}
          </div>
        </div>
      )}
      <div className="card" style={{ border: "none", padding: "15px" }}>
        <h3>Latest Reviews</h3>
        {product?.reviews?.map((rev) => (
          <ul
            className="list-group list-group-flush card "
            style={{ margin: "10px" }}
            key={rev._id}
          >
            <li className="list-group-item">rating : {rev.rating}</li>
            <li className="list-group-item">comment : {rev.comment}</li>
            <li className="list-group-item">By : {rev.name}</li>
          </ul>
        ))}
      </div>
    </Container>
  );
};
export default ProductDiscriptionScreen;
