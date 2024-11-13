import { useState } from "react";
import AllPageBanner from "../components/AllPageBanner";
import AllPagePinkBanner from "../components/AllPagePinkBanner";
import DataCardHolder from "../components/DataCardHolder";
import SortSection from "../components/shop components/SortSection";
import SwitchPagesBtn from "../components/shop components/SwitchPagesBtn";
import { loginFirst } from "../utils/firebase";

function ShopPage({ handleAddToCart }) {
  loginFirst();


  const [displayItemsN, setDisplayItemsN] = useState(16);


  const [pageNum, setPageNum] = useState(1);

  const handleSetPages = (page) => {
    setPageNum(page);
  }


  const sectionStyles = {
    width: 340,
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
    cursor: 'pointer'
  };

  return (
    <div style={divStyles}>

      <AllPageBanner text={"Shop"} />

      <SortSection displayItemsN={displayItemsN} setDisplayItemsN={setDisplayItemsN} />

      <div style={{ marginTop: "40px" }}>
        <DataCardHolder handleAddToCart={handleAddToCart} n={displayItemsN} />
      </div>

      <section style={sectionStyles}>
        {
          pageNum == 1 ? (
            <>
              <SwitchPagesBtn isSelected pageNum={1} />
              <SwitchPagesBtn pageNum={2} onClick={() => handleSetPages(2)} />
              <SwitchPagesBtn pageNum={3} onClick={() => handleSetPages(3)} />
              <button style={nextBtnStyles} onClick={() => handleSetPages(2)}>Next</button>
            </>
          ) : (null)
        }
        {
          pageNum == 2 ? (
            <>
              <SwitchPagesBtn pageNum={1} onClick={() => handleSetPages(1)} />
              <SwitchPagesBtn isSelected pageNum={2} />
              <SwitchPagesBtn pageNum={3} onClick={() => handleSetPages(3)} />
              <button style={nextBtnStyles} onClick={() => handleSetPages(3)}>Next</button>
            </>
          ) : (null)
        }
        {
          pageNum == 3 ? (
            <>
              <SwitchPagesBtn pageNum={1} onClick={() => handleSetPages(1)} />
              <SwitchPagesBtn pageNum={2} onClick={() => handleSetPages(2)} />
              <SwitchPagesBtn isSelected pageNum={3} />
              <button style={nextBtnStyles} disabled={true} >Next</button>
            </>
          ) : (null)
        }
      </section>

      <AllPagePinkBanner />

    </div>
  );
}

export default ShopPage;
