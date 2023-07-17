import React from "react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./app.css";
import WhatsHot from "./components/WhatsHot";

function App() {
  const [count, setCount] = useState(1);
  return (
    <div className="app">
      <Header />
      <WhatsHot />
      <Footer />
    </div>
  );
}

export default App;
