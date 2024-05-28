import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Header />} />
        <Route path="*" element={<Banner />} />
        
      </Routes>
      </Router>

  </React.StrictMode>
  
);