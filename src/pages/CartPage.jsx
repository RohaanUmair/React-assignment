import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/cart components/MainSection";
import { loginFirst } from "../utils/firebase";

function CartPage({ cartProductsArray, total }) {
  loginFirst();

  return (
    <>
    <AllPageBanner text={'Cart'} />
    <MainSection cartProductsArray={cartProductsArray} total={total} />
    <AllPagePinkBanner />
    </>
  )
}

export default CartPage;