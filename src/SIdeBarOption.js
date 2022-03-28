import React from "react";
import "./sidebaroption.css";

function SIdeBarOption({ Icon, title, number }) {
  return (
    <div className="sidebaroption">
      <div className="sidebaroption-left">
        <Icon />
        <h3>{title}</h3>
      </div>
      <p>{number}</p>
    </div>
  );
}

export default SIdeBarOption;
