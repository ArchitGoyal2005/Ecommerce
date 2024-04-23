import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import ProductPage from "./pages/ProductPage";
import ReviewPage from "./pages/ReviewPage";
import ProductListPage from "./pages/ProductListPage";
// import OrderLayout from "./pages/OrderLayout";
import CheckoutLayout from "./pages/CheckoutLayout";
import CartLayout from "./pages/CartLayout";
import ScrollToTop from "./ui/ScrollToTop";
import LoginPage from "./pages/LoginPage";

function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="product/:productId">
            <Route index element={<ProductPage />} />
            <Route path="reviews" element={<ReviewPage />} />
            {/* add review */}
          </Route>
          <Route path="products" element={<ProductListPage />}></Route>
          {/* needsrefactoring */}
          <Route path="checkout" element={<CheckoutLayout />}></Route>
          <Route path="cart" element={<CartLayout />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
