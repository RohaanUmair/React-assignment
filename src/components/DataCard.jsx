import "./dataCard.css";
import { IoShareSocial } from "react-icons/io5";
import { GoArrowSwitch } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";


function DataCard({ imgSrc, title, desc, price, isNew, discount, id }) {
  const isNewBoolean = isNew === "true";


  return (
    <Link to={`/product/${id}`}>
      <div className="card">
        <img className="img" src={imgSrc} />
        {
          isNewBoolean ? (<div className="circle-new"><h1>New</h1></div>) : (
            discount == 0 ? (null) : (<div className="circle-discount"><h1>{`- ${+discount}%`}</h1></div>)
          )
        }
        <div className="text">
          <h1 className="title">{title}</h1>
          <h3 className="desc">{desc}</h3>
          <h2 className="price">Rp {price}</h2>
        </div>

        <div className="overlay">
          <div className="shade"></div>
          <div style={{ width: '100%', textAlign: 'center', position: 'absolute' }}>


            <button>Add to cart</button>

            <div className="upper">
              <div className="sub-div">
                <IoShareSocial className="icons" />
                <h6>Share</h6>
              </div>

              <div className="sub-div">
                <GoArrowSwitch className="icons" />
                <h6>Compare</h6>
              </div>

              <div className="sub-div">
                <IoIosHeartEmpty className="icons" />
                <h6>Like</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
}

export default DataCard;
