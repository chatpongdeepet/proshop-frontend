import { Card } from "react-bootstrap";
import { FC } from "react";
import Rating from "./Rating.tsx";

interface Product {
  _id: string; // Assuming _id is mandatory
  name?: string;
  image?: string;
  price?: number;
  rating?: number;
  numReviews?: number;
  countInStock?: number;
}

interface ProductProps {
  product: Product;
}

const Product: FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} />
        </a>
        <Card.Body>
          <a href={`/product/${product._id}`}>
            <Card.Title as="div" className="product-title">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
