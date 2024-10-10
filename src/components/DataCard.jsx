import "./dataCard.css";

function DataCard({ imgSrc, title, desc, price, isNew, discount }) {
  const isNewBoolean = isNew === "true";

  
  return (
    <div className="card">
      <img className="img" src={imgSrc} />
      {
        isNewBoolean? (<div className="circle-new"><h1>New</h1></div>):(
          discount == 0? (null):(<div className="circle-discount"><h1>{`- ${+discount}%`}</h1></div>)
        )
      }
      <div className="text">
        <h1 className="title">{title}</h1>
        <h3 className="desc">{desc}</h3>
        <h2 className="price">Rp {price}</h2>
      </div>
    </div>
  );
}

export default DataCard;
