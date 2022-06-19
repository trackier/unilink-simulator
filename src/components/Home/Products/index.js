import React from "react";
import { PRODUCTS } from "./constants";
import "./index.scss";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
const Products = () => {
  return (
    <Container>
      <section className="products section-sm" data-scroll-index="2">
        <div className="text-center title my-2">Products List</div>
        <div className="row">
          {PRODUCTS.map((product, index) => (
            <div className="col-lg-4 mb-2" key={index}>
              <div className="product">
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-fluid"
                />
                <div className="d-flex justify-content-between align-items-center my-2">
                  <h3>{product.name}</h3>
                  <Badge bg="secondary">{product.price}</Badge>
                </div>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
export default Products;
