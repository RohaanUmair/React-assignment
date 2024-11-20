import Banner from "../components/home components/Banner";
import HomePageProducts from "../components/home components/HomePageProducts";
import InspirationsSec from "../components/home components/InspirationsSec";
import ProductTypes from "../components/home components/ProductTypes";
import ShareSection from "../components/home components/ShareSection";
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
