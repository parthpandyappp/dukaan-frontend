import { ProductCard } from "./ProductCard";
import { ProductData } from "../assets/db";

const OtherProducts = () => {
  return (
    <div className="container mt-80">
      <h3 className="form-heading">Try our other free products</h3>

      <div className="product-container">
        {ProductData.length &&
          ProductData.map((product) => <ProductCard product={product} />)}
      </div>
    </div>
  );
};

export { OtherProducts };
