import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page">

      {/* LEFT SIDE */}
      <section className="login-section">

        <div className="login-container">

          {/* Bus Logo */}
          <div className="bus-logo">
            <img src={`${import.meta.env.BASE_URL}logoBus.jpg`}alt="Bus Logo"/>

            

          </div>

          <h1>
            <span>Login</span> <small>or</small>{" "}
            <strong>Sign up</strong>
          </h1>

          <p className="subtitle">
            Get started with your account to track buses,
            <br />
            book tickets and more.
          </p>

          {/* Username */}
          <div className="input-box">
            <span className="input-icon">🚌</span>

            <input type="text"
              placeholder="Username or Mobile"/>

          </div>

          {/* Password */}
          <div className="input-box password-box">
            <span className="input-icon">🔑</span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁" :  "⌣"}
            </button>
          </div>

          {/* Buttons */}
          <div className="buttons">

            <button className="login-btn">
              Login
            </button>

            <button className="signup-btn">
              Sign Up
            </button>

          </div>

          {/* Divider */}
          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          {/* Social Login */}
          <div className="social-buttons">

            <button className="social google">
              <b>G</b>
            </button>

            <button className="social facebook">
              <b>f</b>
            </button>

            <button className="social x">
              <b>𝕏</b>
            </button>

          </div>

        </div>

      </section>


      {/* RIGHT SIDE */}
      <section className="hero-section">

        <div className="hero-overlay"></div>

        {/* Diagonal divider */}
        <div className="divider-shape">
          <div className="blue-line"></div>
          <div className="red-line"></div>
        </div>

        {/* Logo */}
        <div className="brand-logo">
          <span className="logo-red"></span>
          BAT Mobile
        </div>

        <div className="brand-text">
          <h2>
            SRI LANKA’S <span>LEADING</span>
          </h2>

          <h2 className="red-text">
            BOOKING & TRACKING
          </h2>

          <h2>
            SERVICE
          </h2>
        </div>

        {/* Top right stripes */}
        <div className="corner-stripes">
          <span className="corner-blue"></span>
          <span className="corner-red"></span>
        </div>

      </section>

    </div>
  );
}

export default App;