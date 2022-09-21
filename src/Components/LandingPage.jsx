import React from "react";
import styled from "../Style/Landing.module.css";

const LandingPage = () => {
  return (
    <div className={styled.landing_container}>
      <div className={styled.landing_container_data}>
        <div>
          <div>MARKET CAP</div>
          <div>$1.14T</div>
        </div>
        <div>
          <div>EXCHANGE VOL</div>
          <div>$48.97B</div>
        </div>
        <div>
          <div>ASSETS</div>
          <div>2995</div>
        </div>
        <div>
          <div>EXCHANGES</div>
          <div>73</div>
        </div>
        <div>
          <div>MARKETS</div>
          <div>14081</div>
        </div>
        <div>
          <div>BTC DOM INDEX</div>
          <div>32.3%</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
