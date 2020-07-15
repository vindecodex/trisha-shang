import React from "react";
import { connect } from "react-redux";
import { getImages } from "../actions/api";
import Portfolio from "./Portfolio";
import "../assets/css/portfolio.css";

const PortfolioList = ({ getImages, imageURL }) => {
  getImages();
  const portfolios = () => {
    let render = [];
    for (let i=0;i<9;i++) {
      render.push(<Portfolio imageURL={imageURL} />);
    }
    return render;
  }
  return (
    <div className="portfolio-list">
      { portfolios() }
    </div>
  )
};

const mapStateToProps = (state) => ({
  imageURL: state.images.imageURL,
});

const mapDispatchToProps = {
  getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioList);
