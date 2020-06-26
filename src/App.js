import React from "react";
import Quote from "./QuoteApp";
import { QuoteProvider } from "./QuoteProvider";

function App() {
  return (
    <QuoteProvider>
      <div className="app">
        <Quote />
      </div>
    </QuoteProvider>
  );
}

export default App;
