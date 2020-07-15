import React from "react";
import "../assets/css/portfolio.css";

const Portfolio = ({ imageURL }) => {
  return (
    <div className="portfolio-item">
      <img src={imageURL} />
    </div>
  )
};

export default Portfolio;
