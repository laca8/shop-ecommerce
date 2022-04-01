import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { Card } from "react-bootstrap";
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-1 rounded product_item">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          width="300px"
          height="300px"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <h5>{product.name}</h5>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Card.Text as="div">
            <Rating
              initialRating={product.rating}
              style={{ color: "orange" }}
              emptySymbol={
                <img
                  style={{ width: "20px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Empty_Star.svg/1024px-Empty_Star.svg.png"
                  className="icon"
                />
              }
              fullSymbol={
                <img
                  style={{ width: "20px" }}
                  src="https://previews.123rf.com/images/get4net/get4net1901/get4net190103118/126406639-empty-star-or-bookmark.jpg"
                  className="icon"
                />
              }
              readonly={true}
            />
          </Card.Text>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
