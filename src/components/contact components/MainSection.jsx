import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import Details from "./Details";
import { FaClock } from "react-icons/fa6";

import "./mainSection.css";
import Form from "./Form";

function MainSection() {
  return (
    <section className="contact-main-sec">
      <div className="upper-div">
        <h1 style={{ fontSize: 36, fontWeight: 600 }}>Get in Touch With Us</h1>
        <p style={{ fontSize: 16, fontWeight: 400, color: "#9f9f9f" }}>
          For More Information About Our Products & Services. Please Feel Free
          To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out.
          Do Not Hesitate!
        </p>
      </div>

      <div className="lower-div">
        <div className="details-section">
          <Details
            icon={<FaLocationDot style={{ width: 30, height: 30, marginRight: 10 }} />}
            heading={"Address"}
            text={`236 5th SE Avenue, New York NY10000, United States`}
          />

          <Details
            icon={<MdCall style={{ width: 30, height: 30, marginRight: 10 }} />}
            heading={"Phone"}
            text={"Mobile: 123456789 Telephone: 123456789"}
          />

          <Details
            icon={<FaClock style={{ width: 30, height: 30, marginRight: 10 }} />}
            heading={"Working Time"}
            text={'Monday-Friday: 9:00-22:00 Saturday-Sunday: 9:00-21:00'}
          />
        </div>

        <div>
            <Form />
        </div>
      </div>
    </section>
  );
}

export default MainSection;
