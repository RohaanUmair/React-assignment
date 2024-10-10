import "./dataCard.css";
import productsData from "../data/data.json";

import React from "react";
import DataCard from "./DataCard";

function DataCardHolder({ showMoreBtn, n }) {
  let data = productsData;
  if (n){
     data = productsData.slice(0 ,n);
  }

  return (
    <>
      <div className="card-holder">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
          }}
        >
          {data.map(({ img, title, desc, price, isNew, discount, id }) => {
            return (
              <DataCard
                key={id}
                imgSrc={img}
                title={title}
                desc={desc}
                price={price}
                isNew={isNew}
                discount={discount}
              />
            );
          })}
        </div>

        {showMoreBtn ? (
          <div>
            <button className="showmore-btn">Show More</button>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default DataCardHolder;
