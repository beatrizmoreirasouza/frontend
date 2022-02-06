import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Category from "../pages/Category";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories/:categoryId" element={<Category />} />
    </Routes>
  );
};

export default AppRoutes;
