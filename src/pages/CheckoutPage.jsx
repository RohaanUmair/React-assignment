import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/checkout components/MainSection";

function CheckoutPage() {
  return (
    <div>
      <AllPageBanner text={'Checkout'} />
      <MainSection />
      <AllPagePinkBanner />
    </div>
  )
}

export default CheckoutPage;