import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/cart components/MainSection";

function CartPage({ cartProductsArray, total }) {
  return (
    <>
    <AllPageBanner text={'Cart'} />
    <MainSection cartProductsArray={cartProductsArray} total={total} />
    <AllPagePinkBanner />
    </>
  )
}

export default CartPage;