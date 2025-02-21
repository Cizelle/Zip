import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import UserTypeSelection from "./components/UserTypeSelection";
import AuthForm from "./components/AuthForm";
import CuteForm from "./components/CuteForm";
import DonorForm from "./components/DonorForm";
function App() {
  const [userType, setUserType] = useState<string | null>(
    localStorage.getItem("userType")
  );
  const [userData, setUserData] = useState<{
    userType: string;
    name: string;
  } | null>(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData")!)
      : null
  );

  useEffect(() => {
    if (userType) {
      localStorage.setItem("userType", userType);
    }
  }, [userType]);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  const handleUserTypeSelect = (type: string) => {
    setUserType(type);
  };

  const handleLogin = (
    username: string,
    password: string,
    userType: string
  ) => {
    setUserData({ userType, name: username });
  };

  const handleRegister = (
    username: string,
    password: string,
    userType: string
  ) => {
    handleLogin(username, password, userType);
  };

  const handleBackToUserType = () => {
    setUserType(null);
  };

  const handleLogout = () => {
    setUserData(null);
    setUserType(null);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<UserTypeSelection onSelect={handleUserTypeSelect} />}
          />
          <Route
            path="/auth"
            element={
              userType ? (
                <AuthForm
                  onLogin={handleLogin}
                  onRegister={handleRegister}
                  userType={userType}
                  onBack={handleBackToUserType}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/hero"
            element={
              userData ? (
                <Hero userData={userData} />
              ) : (
                <Navigate to="/auth?mode=login" replace />
              )
            }
          />
          <Route
            path="/products"
            element={
              userData ? (
                <ProductCard
                  userData={userData}
                  id={0}
                  name={""}
                  description={""}
                  price={0}
                  imageUrl={""}
                />
              ) : (
                <Navigate to="/auth?mode=login" replace />
              )
            }
          />
          <Route path="/donor-form" element={<DonorForm />} /> {}
          <Route path="/form" element={<CuteForm />} /> {}
          <Route path="/logout" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
