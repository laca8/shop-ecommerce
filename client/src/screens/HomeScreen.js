import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/productAction";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Filter from "../components/Filter";
import { Container, Row, Card, Col } from "react-bootstrap";
import Pagination from "../components/Pagination";
import PaginationProduct from "../components/Pagination";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const getAllProductsReducer = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getAllProductsReducer;
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <Container>
      <Filter />
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <PaginationProduct products={products} />
          <Row className="products" style={{ marginTop: "1rem" }}>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={4} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};
export default HomeScreen;
