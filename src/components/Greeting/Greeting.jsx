import React from "react";
import "./Greeting.css";
import Logo from "../../assets/giphy.gif";

export const Greeting = () => (
  <>
    <h1>Hello, world!</h1>
    <img alt="Best greeting ever" src={Logo} />
  </>
);
