import DataCardHolder from "./DataCardHolder";
import "./homePageProducts.css";

export default function HomePageProducts({ handleAddToCart }) {
  return (
    <>
    <div className="products">
      <h1 className="main-heading-our-products">Our Products</h1>
      <DataCardHolder showMoreBtn n={8} handleAddToCart={handleAddToCart} />
    </div>
    </>
  );
}
