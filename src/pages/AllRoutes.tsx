import { Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { SingleProduct } from "./SingleProduct";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/:id" element={<SingleProduct />} />
    </Routes>
  );
};
