import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/cart components/MainSection";
import { loginFirst } from "../utils/firebase";

function CartPage() {
  loginFirst();

  return (
    <>
    <AllPageBanner text={'Cart'} />
    <MainSection />
    <AllPagePinkBanner />
    </>
  )
}

export default CartPage;