import vanilla_cupcake from "../../../assets/cupcakes/vanilla.jpeg";
import all_cupcake from "../../../assets/cupcakes/all.webp";
import chocochip_cupcake from "../../../assets/cupcakes/chocochip.jpeg";
import blueberry_cupcake from "../../../assets/cupcakes/blueberry.webp";

const ProductImageHandler = (props) => {
  let src = "";
  if (props.product === "blueberry") {
    src = blueberry_cupcake;
  } else if (props.product === "chocochip") {
    src = chocochip_cupcake;
  } else if (props.product === "vanilla") {
    src = vanilla_cupcake;
  } else {
    src = all_cupcake;
  }
  return <img src={src} className="img-fluid  w-50 w-md-100" alt="" />;
};
export default ProductImageHandler;
