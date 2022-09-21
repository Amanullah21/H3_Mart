import React from "react";
import styled from "../../Style/Footer.module.css";

const Footer = () => {
  return (
    <div className={styled.footer_container}>
      <div className={styled.footer_container_data}>
        <div>
          <div>COINCAP.IO</div>
          <p>Methodology</p>
          <p>Support</p>
          <p>Our API</p>
          <p>Rate Comparison</p>
          <p>Careers</p>
        </div>
        <div className={styled.legal}>
          <div>LEGALS</div>
          <p>Terms of Service</p>
          <p>Privacy</p>
        </div>
        <div className={styled.dec}>
          <div>DISCLAIMER</div>
          <p>
            Neither ShapeShift AG nor <br /> CoinCap are in any way <br />{" "}
            associated with CoinMarketCap,
            <br /> LLC or any of its goods and services.
          </p>
        </div>
        <div>
          <div>FOLLOW US</div>
          <p>
            <img src="/#" alt="Twitter" />
          </p>
          <p>
            <img src="/#" alt="Linkdin" />
          </p>
          <p>
            <img src="/#" alt="Github" />
          </p>
          <p>
            <img src="/#" alt="Instagram" />
          </p>
          <p>
            <img src="/#" alt="Youtube" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
