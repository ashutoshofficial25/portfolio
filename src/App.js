import React, { useEffect, useState } from "react";
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
import ErrorPage from "./pages/404";
import LoadingPage from "./pages/LoadingPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {!loading && <TopNav />}
        <Routes>
          <Route
            exact
            path="/"
            element={loading ? <LoadingPage /> : <Homepage />}
          />
          <Route path="/thankyou" element={<ThankyouPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        {!loading && <Footer />}
      </BrowserRouter>
    </div>
  );
}

export default App;
