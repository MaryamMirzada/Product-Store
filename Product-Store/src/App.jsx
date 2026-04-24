import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
  // بروسر روت اینجه استفاده گردیده 
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
