import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import UserList from "./UserList";
import ProductList from "./ProductList";
import OrderList from "./OrderList";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { Container, Row } from "react-bootstrap";

const AdminScreen = () => {
  return (
    <Container Container>
      <Row>
        <ul
          className="items"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <li className="item">
            <Link style={{ color: "#fff" }} to="/admin/userList">
              UserList
            </Link>
          </li>
          <li className="item">
            <Link style={{ color: "#fff" }} to="/admin/productList">
              ProductList
            </Link>
          </li>
          <li className="item">
            <Link style={{ color: "#fff" }} to="/admin/addProduct">
              AddProduct
            </Link>
          </li>
          <li className="item">
            <Link style={{ color: "#fff" }} to="/admin/orderList">
              OrderList
            </Link>
          </li>
        </ul>
        <Router>
          <Switch>
            <Route exact path="/admin/userList" component={UserList} />
            <Route exact path="/admin/productList" component={ProductList} />
            <Route exact path="/admin/addProduct" component={AddProduct} />
            <Route exact path="/admin/orderList" component={OrderList} />
            <Route
              exact
              path="/admin/editProduct/:id"
              component={EditProduct}
            />
          </Switch>
        </Router>
      </Row>
    </Container>
  );
};

export default AdminScreen;
