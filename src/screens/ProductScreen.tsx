import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import products from "../products.tsx";
import Rating from "../components/Rating.tsx";

interface IProduct {
  _id?: string;
  name?: string;
  image?: string;
  price?: number;
  rating?: number;
  numReviews?: number;
  countInStock?: number;
}

const ProductScreen = () => {
  const { id: productId } = useParams();
  const product: IProduct | undefined = products.find(
    (p) => p._id === productId,
  );

  // If the product is not found, show an error or redirect
  if (!product) {
    return (
      <div className="my-3">
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <h3>{product.name}</h3>
            <ListGroup.Item>
              <Rating
                value={product.rating || 0}
                text={`${product.numReviews || 0} reviews`}
              />
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price?.toFixed(2)}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock && product.countInStock > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
                <Button
                  className="bnt-block"
                  type="button"
                  disabled={!product.countInStock || product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
