import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form id="search-form">
        <input type="text" placeholder="Search city..." />
        <button className="form-buttons">
          <i className="fas fa-search"></i>
        </button>
        <button className="form-buttons">
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}
