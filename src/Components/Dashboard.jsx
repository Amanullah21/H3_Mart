import React, { useEffect } from "react";
import { useState } from "react";
import styled from "../Style/Dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const url = "https://api.coincap.io/v2/assets";
  useEffect(() => getToServer(), [page]);
  const getToServer = () => {
    fetch(url)
      .then((ele) => ele.json())
      .then((ele) =>
        page === 0
          ? setData(ele.data.filter((item) => item.rank <= 50))
          : setData(ele.data.filter((item) => item.rank <= 150))
      )
      .catch((ele) => console.log(ele));
  };
  data.filter((item) => item.rank <= 50);
  const viweMore = () => {
    if (data.length === 100) {
      alert(`There are  ${data.length} data avilable in API`);
    } else {
      setPage(1);
    }
  };

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
  return (
    <div className={styled.dashboard_container}>
      <div>
        <div className={styled.dashboard_title_bar}>
          <div onClick={sortData}>
            {"Rank"} <img src="da" alt="dasd" />
          </div>
          <div style={{ width: "300px" }}>{"Name"}</div>
          <div>{"Price"}</div>
          <div>{"Market Cap"}</div>
          <div>{"VWAP(24Hr)"}</div>
          <div>{"Supply"}</div>
          <div>{"Vowume(24Hr)"}</div>
          <div>{"Chane(24Hr)"}</div>
        </div>
        {data.map((ele) => (
          <div className={styled.dashboard_data}>
            <div>{ele.rank}</div>
            <div style={{ width: "300px" }} className={styled.name_section}>
              <img
                src={`https://assets.coincap.io/assets/icons/${ele.symbol.toLowerCase()}%402x.png`}
                alt={ele.name}
              />
              <span>{ele.name}</span>
            </div>
            <div>${(+ele.priceUsd).toFixed(2)}</div>
            <div>
              ${convertToInternationalCurrencySystem(+ele.marketCapUsd)}
            </div>
            <div>${(+ele.vwap24Hr).toFixed(2)}</div>
            <div>{convertToInternationalCurrencySystem(ele.supply)}</div>
            <div>
              ${convertToInternationalCurrencySystem(ele.volumeUsd24Hr)}
            </div>
            <div className={ele.changePercent24Hr[0] !== "-" ? "green" : "red"}>
              {(+ele.changePercent24Hr).toFixed(3)}%
            </div>
          </div>
        ))}
      </div>
      <button onClick={viweMore}>View More</button>
    </div>
  );
};

export default Dashboard;
