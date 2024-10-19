import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/contact components/MainSection";
import { loginFirst } from "../utils/firebase";

function ContactPage() {
  loginFirst();

  return (
    <div>
        <AllPageBanner text={'Contact'} />
        <MainSection />
        <AllPagePinkBanner />
    </div>
  )
}

export default ContactPage;