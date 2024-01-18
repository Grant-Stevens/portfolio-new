import React from "react";
import logoImg from "../../../assets/GSlogo.png";
import "./logo.scss";

const Logo = () => {
  return (
    <div className={"name-brand"}>
      <img className={"brand"} src={logoImg} alt={"logo"} />
      <span className={"name"}>GRANT STEVENS</span>
    </div>
  );
};

export default Logo;
