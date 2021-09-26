import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepages,
  News,
  Cryptocurrencies,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className=" navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepages />
              </Route>
              <Route path="/exchanges">
                <Exchanges />
              </Route>
              <Route path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route path="/crypto/:coinID">
                <CryptoDetails />
              </Route>

              <Route path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Crypto
             All rights reserverd
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchange">Exchange</Link>

            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
