
import React from "react";

export default function Navbar() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .sk-navbar {
          width: 100%;
          height: 57px;
          padding: 0 4.7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #111827;
          font-family: Arial, Helvetica, sans-serif;
          position: relative;
          z-index: 100;
        }

        /* Logo */
        .sk-navbar-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .sk-navbar-logo img {
          width: 134px;
          height: auto;
          display: block;
          object-fit: contain;
        }

        /* Navigation links */
        .sk-navbar-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .sk-nav-link {
          color: #f3f4f6;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .sk-nav-link:hover {
          color: #fb7185;
        }

        /* Login button */
        .sk-login-btn {
          height: 36px;
          min-width: 67px;
          padding: 0 17px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid #393344;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            #302333,
            #111827
          );
          transition: border-color 0.2s ease;
        }

        .sk-login-btn:hover {
          border-color: #f43f5e;
        }

        /* Register button */
        .sk-register-btn {
          height: 36px;
          min-width: 83px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          border-radius: 24px;
          background: linear-gradient(
            110deg,
            #ff512f,
            #e91e63
          );
          box-shadow: 0 5px 18px rgba(244, 63, 94, 0.18);
          transition: transform 0.2s ease;
        }

        .sk-register-btn:hover {
          transform: translateY(-1px);
        }

        /* Tablet and mobile */
        @media (max-width: 600px) {
          .sk-navbar {
            height: 60px;
            padding: 0 14px;
          }

          .sk-navbar-logo img {
            width: 100px;
          }

          .sk-navbar-links {
            gap: 12px;
          }

          .sk-nav-link {
            font-size: 12px;
          }

          .sk-login-btn,
          .sk-register-btn {
            min-width: auto;
            height: 32px;
            padding: 0 10px;
            font-size: 11px;
          }
        }

        @media (max-width: 400px) {
          .sk-navbar {
            padding: 0 8px;
          }

          .sk-navbar-logo img {
            width: 78px;
          }

          .sk-navbar-links {
            gap: 7px;
          }

          .sk-nav-link {
            font-size: 10px;
          }

          .sk-login-btn,
          .sk-register-btn {
            padding: 0 7px;
            font-size: 10px;
          }
        }
      `}</style>

      <nav className="sk-navbar">
        {/* Logo */}
        <a href="/" className="sk-navbar-logo">
          <img src="/logo.png" alt="Sklassics" />
        </a>

        {/* Navigation */}
        <div className="sk-navbar-links">
          <a href="/" className="sk-nav-link">
            Home
          </a>

          <a href="/about" className="sk-nav-link">
            About
          </a>

          <a href="/contact" className="sk-nav-link">
            Contact
          </a>

          <a href="/login" className="sk-login-btn">
            Login
          </a>

          <a href="/register" className="sk-register-btn">
            Register
          </a>
        </div>
      </nav>
    </>
  );
}
