import React from "react";
import Marquee from "react-fast-marquee";
import Column from "../components/Column";

const MarqueeP = () => {
  return (
    <div style={{ display: "flex" }}>
      <Marquee direction="up" style={{ width: "300px", height: "200px" }}>
        <Column text={"Hello"}></Column>
      </Marquee>
      <Marquee direction="down" style={{ width: "300px", height: "200px" }}>
        <Column text={"Hello"}></Column>
      </Marquee>
      <Marquee direction="up" style={{ width: "300px", height: "200px" }}>
        <Column text={"Hello"}></Column>
      </Marquee>
      <Marquee direction="down" style={{ width: "300px", height: "200px" }}>
        <Column text={"Hello"}></Column>
      </Marquee>
      <Marquee direction="up" style={{ width: "300px", height: "200px" }}>
        <Column text={"Hello"}></Column>
      </Marquee>
    </div>
  );
};

export default MarqueeP;
