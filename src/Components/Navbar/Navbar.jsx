import React, { useState } from "react";
import styled from "../../Style/Navbar.module.css";
import Logo from "../../Icon/Logo.PNG";
import searcg from "../../Icon/Search.PNG";
import setting from "../../Icon/setting.PNG";
import "../../Style/Globel.css"
import AutoSearch from "../AutoSearch";
const Navbar = () => {
  const [inputField, setInputField] = useState(false);


  return (
    <div className={styled.Navbar_container}>
      <div className={styled.coin_Section}>
        <div>Coins</div>
        <div>Exchanges</div>
        <div>Swap</div>
      </div>
      <div>
        <div className={styled.icon}>
          <img src={Logo} alt="icon" />
        </div>
      </div>
      <div className={styled.search_container}>
        <div>
          {inputField === true ? (
            <div className={styled.inputField}>
              <AutoSearch />
              {/* <img src={searcg} placeholder="Enter Currency" alt="Search" onClick={searchField} /> */}
            </div>
          ) : (
            <img src={searcg} alt="Search"  onClick={() =>setInputField(!inputField)}/>
          )}
        </div>
        <div>
          <img src={setting} alt="setting" />
        </div>
        <button className="button">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
