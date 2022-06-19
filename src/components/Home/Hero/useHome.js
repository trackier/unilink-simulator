import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UseHome = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQunatity] = useState("");
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  useEffect(() => {
    let isActive = true;
    if (isActive) {
      if (location.search) {
        if (search.get("product_id")) {
          setProduct(search.get("product_id"));
        }
        if (search.get("quantity")) {
          setQunatity(search.get("quantity"));
        }
      }
    }
    return () => {
      isActive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  return {
    product,
    quantity,
  };
};
export default UseHome;
