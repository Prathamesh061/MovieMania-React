import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./app.css";
import WhatsHot from "./components/WhatsHot";

function App() {
  return (
    <div className="app">
      <Header />
      <WhatsHot />
      <Footer />
    </div>
  );
}

export default App;
