import React from "react";
import "./HeroLeft.css";
import OrderButton from "../OrderButton/OrderButton";

const HeroLeft = () => {
  return (
    <div className="hero-left">
      <h4>OPEN FOR DELIVERY & PICK UP</h4>

      <h1>
        GET IT WHILE <br />
        IT'S HOT
      </h1>

      <OrderButton />
    </div>
  );
};

export default HeroLeft;