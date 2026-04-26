import React from "react";

const FooterDisclaimer = () => {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "20px",
        textAlign: "center",
        fontSize: "13px",
        backgroundColor: "#f8f9fa",
        color: "#6c757d",
        borderTop: "1px solid #ddd",
      }}
    >
      Demo Project Only — This application was created for academic purposes.
      Please do not enter real personal, banking, or cryptocurrency account
      information.
    </footer>
  );
};

export default FooterDisclaimer;