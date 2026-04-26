import React from "react";

export const WarningBanner = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#fff3cd",
        color: "#856404",
        padding: "10px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "600",
        borderBottom: "1px solid #ffeeba",
        position: "sticky",
        top: "0",
        zIndex: "9999",
      }}
    >
      ⚠ Educational Student Project — This demo is not affiliated with Coinbase
      and should not be used for real financial transactions.
    </div>
  );
};

export default WarningBanner;