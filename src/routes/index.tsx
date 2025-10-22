import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { CheckoutPage } from "../pages/Checkout";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}
