import React, { useEffect } from "react";
import { useState } from "react";
import styled from "../Style/Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { set_page } from "./Redux/InitState/action";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const page = useSelector((state) => state.page);
  const dispatch = useDispatch();
  const url = "https://api.coincap.io/v2/assets";

  useEffect(() => {
    const clear = setTimeout(() => {
      getToServer();
    }, 2100);
    return () => clearTimeout(clear);
  });

  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) => {
        const init = ele.data.filter((item) => item.rank <= 50);

        for (let i = 0; i < init.length; i++) {
          if (data.length === 0) continue;
          if (+init[i].priceUsd === +data[i].priceUsd) {
            init[i].isBig = 0;
          } else if (init[i].priceUsd > data[i].priceUsd) {
            init[i].isBig = 1;
          } else {
            init[i].isBig = 2;
          }
        }
        page === 0
          ? setData(init)
          : setData(ele.data.filter((item) => item.rank <= 150));
      })
      .catch((ele) => console.log(ele));
  };

  data.filter((item) => item.rank <= 50);
  const viweMore = () => {
    if (data.length === 100) {
      alert(`There are  ${data.length} data avilable in API`);
    } else {
      dispatch(set_page(1));
    }
  };
  console.log(page);
  const convertToInternationalCurrencySystem = (labelValue) => {
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
      : Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
      : Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
      : Math.abs(Number(labelValue));
  };
  const sortData = () => {
    console.log("aaa");
  };
  const xyz = (name) => {
    if (name === 1) {
      return `special_effact_pink`;
    } else if (name === 2) {
      return `special_effact_green`;
    } else {
      return `dashboard_data`;
    }
  };
  return (
    <div>
      <div className={styled.dashboard_container}>
        <div>
          <div className={styled.dashboard_data}>
            <div onClick={sortData}> {"Rank"}</div>
            <div className={styled.title_name} style={{ textAlign: "center" }}>
              {"Name"}
            </div>
            <div style={{ textAlign: "center" }}>{"Price"}</div>
            <div style={{ textAlign: "center" }} className={styled.market}>
              {"Market Cap"}
            </div>
            <div style={{ textAlign: "center" }} className={styled.vwam}>
              {"VWAP(24Hr)"}
            </div>
            <div style={{ textAlign: "center" }} className={styled.supply}>
              {"Supply"}
            </div>
            <div style={{ textAlign: "center" }} className={styled.volume}>
              {"Volume(24Hr)"}
            </div>
            <div style={{ textAlign: "center" }} className={styled.change}>
              {"24Hr"}
            </div>
          </div>
          {data.map((ele) => (
            <div className={`${xyz(ele.isBig)} ${styled.dashboard_data}`}>
              <div>{ele.rank}</div>
              <div style={{ width: "300px" }} className={styled.name_section}>
                <img
                  src={`https://assets.coincap.io/assets/icons/${ele.symbol.toLowerCase()}%402x.png`}
                  alt={ele.name}
                />
                <span>{ele.name}</span>
              </div>
              <div>${(+ele.priceUsd).toFixed(2)}</div>
              <div className={styled.market}>
                ${convertToInternationalCurrencySystem(+ele.marketCapUsd)}
              </div>
              <div className={styled.vwam}>${(+ele.vwap24Hr).toFixed(2)}</div>
              <div className={styled.supply}>
                {convertToInternationalCurrencySystem(ele.supply)}
              </div>
              <div className={styled.volume}>
                ${convertToInternationalCurrencySystem(ele.volumeUsd24Hr)}
              </div>
              <div
                className={ele.changePercent24Hr[0] !== "-" ? "green" : "red"}
              >
                <div className={styled.change}>
                  {(+ele.changePercent24Hr).toFixed(3)}%
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      <div className={styled.bottom_button}>
          <button onClick={viweMore} className="button">
            View More
          </button>
        </div>
    </div>
  );
};

export default Dashboard;
