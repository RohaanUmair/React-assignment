import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/cart components/MainSection";

function CartPage({ cartProductsArray }) {
  return (
    <>
    <AllPageBanner text={'Cart'} />
    <MainSection cartProductsArray={cartProductsArray} />
    <AllPagePinkBanner />
    </>
  )
}

export default CartPage;