import Banner from "../components/Banner";
import HomePageProducts from "../components/HomePageProducts";
import InspirationsSec from "../components/InspirationsSec";
import ProductTypes from "../components/ProductTypes";
import ShareSection from "../components/ShareSection";

export default function HomePage() {

  return (
    <>
      <Banner />
      <ProductTypes />
      <HomePageProducts />
      <InspirationsSec />
      <ShareSection />
    </>
  );
}
