import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
// import { Container } from './styles';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Route index element={<Home />} /> */}
      {/* <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} /> */}

      {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
      {/* <Route path="*" element={<NoMatch />} /> */}
      {/* </Route> */}
    </BrowserRouter>
  );
};

export default Router;
