import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span>
          {Math.round(props.celsius)}
          <span className="unit">ºC</span>
        </span>
      </span>
    );
  }
}
