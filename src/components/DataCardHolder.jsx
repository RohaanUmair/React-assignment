import "./dataCard.css";
import productsData from "../data/data.json";

import React from "react";
import DataCard from "./DataCard";
import { Link } from "react-router-dom";

function DataCardHolder({ showMoreBtn, n, handleAddToCart }) {


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
                id={id}
                onAddToCart={handleAddToCart}
              />
            );
          })}
        </div>

        {showMoreBtn ? (
          <div>
            <Link to={'/shop'}>
              <button className="showmore-btn">Show More</button>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default DataCardHolder;
