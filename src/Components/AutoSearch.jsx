import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function AutoSearch() {
  const items = [
    {
      id: "btc",
      name: "Bitcoin",
    },
    {
      id: "PD",
      name: "Pax Dollar",
    },
    {
      id: "AE",
      name: "Aave",
    },
    {
      id: "ER",
      name: "Elrond",
    },
    {
      id: "BTCS",
      name: "Bitcoin SV",
    },
    {
      id: "FR",
      name: "Frax",
    },
    {
      id: "CG",
      name: "Chiliz ",
    },
    {
      id: "DD",
      name: "Decentraland",
    },
    {
      id: "QU",
      name: "Quant",
    },
    {
      name: "USD Coin",
    },
    {
      name: "Tether",
    },
    {
      name: "BNB",
    },
    {
      name: "XRP",
    },
    {
      name: "Cardano",
    },

    {
      name: "Solana",
    },
    {
      name: "Terra",
    },
    {
      name: "Shiba Inu",
    },
    {
      name: "TRON",
    },
    {
      name: "Avalanche",
    },
    {
      name: "Polygon",
    },
    {
      name: "Shiba Inu",
    },
  ];

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };

  return (
    <div style={{ width: 200 }}>
      <ReactSearchAutocomplete
        items={items}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
}

export default AutoSearch;
