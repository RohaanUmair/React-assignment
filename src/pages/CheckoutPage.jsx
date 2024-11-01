import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/checkout components/MainSection";
import { loginFirst } from "../utils/firebase";

function CheckoutPage({ cartProductsArray, total }) {
  loginFirst();

  return (
    <div>
      <AllPageBanner text={'Checkout'} />
      <MainSection cartProductsArray={cartProductsArray} total={total} />
      <AllPagePinkBanner />
    </div>
  )
}

export default CheckoutPage;