import "./App.css";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
