import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/home";
import Footer from "./Components/Footer";
import WorkPage from "./Components/WorkPage";
import ContactPage from "./Components/ContactPage";
import NotFound404 from "./Components/NotFound404";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/shelf" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
