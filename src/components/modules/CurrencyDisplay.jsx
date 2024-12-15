import React from "react";

function CurrencyDisplay({ currency }) {
  const getCurrentSymbol = (symbol) => {
    if (symbol === "usd") {
      return "$";
    } else if (symbol === "eur") {
      return "€";
    } else {
      return "¥";
    }
  };
  return <span>{getCurrentSymbol(currency)}</span>;
}

export default CurrencyDisplay;
