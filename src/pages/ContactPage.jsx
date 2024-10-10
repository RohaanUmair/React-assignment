import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import MainSection from "../components/contact components/MainSection";

function ContactPage() {
  return (
    <div>
        <AllPageBanner text={'Contact'} />
        <MainSection />
        <AllPagePinkBanner />
    </div>
  )
}

export default ContactPage;