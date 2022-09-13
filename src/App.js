import React from "react";
import "./App.css";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/homepage";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThankyouPage from "./pages/thankyouPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
