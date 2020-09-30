import React from "react";
import "./css/SiderbarOption.css";

function SiderbarOption({ title, Icon }) {
  return (
    <div className="siderbarOption">
      {Icon && <Icon className="siderbarOptionIcon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SiderbarOption;
