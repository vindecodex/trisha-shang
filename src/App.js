import React, { Fragment } from "react";
import Header from "./components/Header";
import PortfolioList from "./components/PortfolioList";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <Header />
        <PortfolioList />
      </div>
    </Fragment>
  )
};

export default App;
