import Banner from "../components/Banner";
import HomePageProducts from "../components/HomePageProducts";
import InspirationsSec from "../components/InspirationsSec";
import ProductTypes from "../components/ProductTypes";
import ShareSection from "../components/ShareSection";
import { loginFirst } from "../utils/firebase";


export default function HomePage({ handleAddToCart }) {
  loginFirst();

  return (
    <>
      <Banner />
      <ProductTypes />
      <HomePageProducts handleAddToCart={handleAddToCart} />
      <InspirationsSec />
      <ShareSection />
    </>
  );
}
