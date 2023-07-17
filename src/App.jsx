import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./app.css";
import WhatsHot from "./components/WhatsHot";
import NewReleases from "./components/NewReleases";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <WhatsHot /> */}
      <NewReleases />
      <Footer />
    </div>
  );
}

export default App;
