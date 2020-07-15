import React from "react";
import { Provider } from "react-redux";
import Header from "./components/Header";
import PortfolioList from "./components/PortfolioList";
import store from "./store/storeConfig";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <Provider store={store} >
      <div className="container">
        <Header />
        <Introduction />
        <PortfolioList />
      </div>
    </Provider>
  )
};

export default App;
