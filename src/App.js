import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Image2 from "./components/Image2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Header />

          <Route path="/image2" exact component={Image2}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
