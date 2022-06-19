import React from "react";
import UseHome from "./useHome";
import "./index.scss";
import ProductImageHandler from "./ProductImageHandler";
import Container from "react-bootstrap/esm/Container";

const Hero = () => {
  const { product, quantity } = UseHome();
  return (
    <React.Fragment>
      <Container>

        <div
          className="row justify-content-between align-items-center section-sm hero"
          data-scroll-index="1"
        >
          <div className="col-lg-5 col-md-6 order-2 order-md-1">
            <h3 className="mb-5">Find the magic of deep linking</h3>
            {product ? (
              <h4 className="primary">
                <b>Product:</b> {product}
              </h4>
            ) : null}
            {quantity ? (
              <h4>
                <b>Quantity:</b> {quantity}
              </h4>
            ) : null}
          </div>
          <div className="col-lg-7 col-md-6 order-1 order-lg-2 d-flex justify-content-center">
            <ProductImageHandler product={product} />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default Hero;
