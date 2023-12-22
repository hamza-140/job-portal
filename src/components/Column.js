// Column.js
import React from "react";

const Column = ({ text }) => {
  return (
    <div>
      <p
        style={{
          margin: 0,
          whiteSpace: "nowrap",
          fontSize: "18px",
          paddingTop: "20px",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default Column;
