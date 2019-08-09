import React from "react";
import BpkText from "bpk-component-text";

import STYLES from "./App.scss";
import Header from "./../Header";

const getClassName = className => STYLES[className] || "UNKNOWN";

const App = () => (
  <div className={getClassName("App")}>
    <Header />
    <main className={getClassName("App__main")}>
      <BpkText tagName="p">Over to you...</BpkText>
      {/* TODO: Add an information blue header component here */}

      {/* TODO: Add a component to display results here */}
    </main>
  </div>
);

export default App;
