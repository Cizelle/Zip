import React, { useState } from "react";
import { useSearchParams, Navigate } from "react-router-dom";
import "./AuthForm.css";

interface AuthFormProps {
  onLogin: (username: string, password: string, userType: string) => void;
  onRegister: (username: string, password: string, userType: string) => void;
  userType: string | null;
  onBack: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  onLogin,
  onRegister,
  userType,
  onBack,
}: AuthFormProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const [navigation, setNavigation] = useState<JSX.Element | null>(null);
  const [searchParams] = useSearchParams();
  const selectedType = searchParams.get("type") || userType;

  const Login_button = async () => {
    const response = await fetch("http://localhost:1371/api/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        userType: selectedType,
      }),
    });
    if (!response.ok) {
      throw new Error("Hello world");
    }
    const data = await response.json();
    console.log("My name adarsh", JSON.stringify(data));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    if (selectedType) {
      if (isRegistering) {
        onRegister(username, password, selectedType);
      } else {
        onLogin(username, password, selectedType);
      }
      setNavigation(<Navigate to="/hero" replace={true} />);
    }
  };

  const handleBack = () => {
    onBack();
    setNavigation(<Navigate to="/" replace={true} />);
  };

  if (navigation) {
    return navigation;
  }

  return (
    <div className="auth-form-container">
      <div className="auth-form-card">
        <h2 className="auth-form-title">
          {isRegistering ? "Register" : "Login"} ({selectedType ?? "User"})
        </h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="auth-form-error">{error}</p>}
          <div className="mb-4">
            <label htmlFor="username" className="auth-form-label">
              {selectedType === "donor"
                ? "Donor ID/Email"
                : selectedType === "recipient"
                ? "Recipient ID/Email"
                : selectedType === "hospital"
                ? "Organization ID/Email"
                : "User ID/Email"}
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              className="auth-form-input"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="auth-form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              className="auth-form-input"
              required
            />
          </div>
          <button type="submit" className="auth-form-button">
            {isRegistering ? "" : "Login"}
          </button>
          <p className="auth-form-toggle">
            {isRegistering ? "Already have an account?" : ""}
            {""}
            <span
              onClick={() => Login_button}
              className="auth-form-toggle-link"
            >
              {isRegistering ? "Login" : ""}
            </span>
          </p>
        </form>
        <button className="auth-form-back-button" onClick={handleBack}>
          Back to User Type Selection
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
