import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Products from "../components/Product";

interface IProduct {
  _id?: string;
  name?: string;
  image?: string;
  price?: number;
  rating?: number;
  numReviews?: number;
}

const HomeScreen = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(products);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product: IProduct) => (
          <Col key={product?._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
