import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import DataCardHolder from "../components/DataCardHolder";
import SortSection from "../components/shop components/SortSection";
import SwitchPagesBtn from "../components/shop components/SwitchPagesBtn";

function ShopPage() {
  const sectionStyles = {
    width: 392,
    display: "flex",
    justifyContent: "space-around",
    marginTop: 40,
  };

  const divStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  };

  const nextBtnStyles = {
    width: 98,
    height: 60,
    border: "none",
    outline: "none",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: 300,
    backgroundColor: "#f9f1e7",
  };

  return (
    <div style={divStyles}>

      <AllPageBanner text={"Shop"} />

      <SortSection />

      <div style={{ marginTop: "40px" }}>
        <DataCardHolder />
      </div>

      <section style={sectionStyles}>
        <SwitchPagesBtn isSelected pageNum={1} />
        <SwitchPagesBtn pageNum={2} />
        <SwitchPagesBtn pageNum={3} />
        <button style={nextBtnStyles}>Next</button>
      </section>

      <AllPagePinkBanner />

    </div>
  );
}

export default ShopPage;
