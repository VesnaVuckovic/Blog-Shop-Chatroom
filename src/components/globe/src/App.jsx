import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CityPage from "./pages/CityPage";

function App() {
  return (    
    <Routes> 
      <Route path="*" element={<HomePage />} />
      <Route path="/city/:cityName" element={<CityPage />} />      
    </Routes>  
  );
}

export default App;
