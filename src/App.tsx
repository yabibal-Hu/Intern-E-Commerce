import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
  const token = sessionStorage.getItem("token"); 
  setToken(token);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={token ? <Navigate to="/" /> : <SignUp />}
        />

        {/* Protected Routes */}
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/cart"
          element={token ? <CartPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/checkout"
          element={token ? <Checkout /> : <Navigate to="/login" />}
        />
        <Route
          path="/wishlist"
          element={token ? <Wishlist /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
