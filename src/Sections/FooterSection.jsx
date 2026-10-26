
import React from "react";

export default function FooterSection() {
  const exams = [
    "NEET Preparation",
    "JEE Main & Advanced",
    "EAMCET",
    "GATE",
    "UPSC",
  ];

  const resources = [
    "Previous Year Papers",
    "Study Material",
    "Mock Tests",
    "AI Tutor",
    "AI Explanation",
  ];

  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <img src="/logo.png" alt="Sklassics" />
          </a>

          <p>
            Enterprise-ready exam &amp; quiz platform helping
            learners achieve their goals since 2020.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">♥</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="YouTube">▷</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Popular Exams</h3>
          {exams.map((exam) => (
            <a href="#" key={exam}>{exam}</a>
          ))}
        </div>

        <div className="footer-column">
          <h3>Resources</h3>
          {resources.map((resource) => (
            <a href="#" key={resource}>{resource}</a>
          ))}
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a href="mailto:info@sklassics.com">
            <span>✉</span> info@sklassics.com
          </a>

          <a href="tel:+918074595152">
            <span>♧</span> +91 80745 95152
          </a>

          <h3 className="download-title">Download App</h3>

          <div className="download-buttons">
            <a href="#">App Store</a>
            <a href="#">Play Store</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} sklassics. All rights reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>

      <style>{`
        .footer-section {
          box-sizing: border-box;
          width: 100%;
          padding: 22px 4.2% 20px;
          background: #192033;
          color: #f5f6fb;
          font-family: Arial, sans-serif;
          border-top: 1px solid #283148;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.15fr 1.15fr 1.15fr 1fr;
          gap: 40px;
          max-width: 1500px;
          margin: 0 auto;
        }

        .footer-logo {
          display: inline-flex;
          align-items: center;
          height: 55px;
          margin-bottom: 17px;
        }

        .footer-logo img {
          display: block;
          width: 140px;
          max-height: 48px;
          object-fit: contain;
          object-position: left center;
        }

        .footer-brand p {
          max-width: 280px;
          color: #e0e5f0;
          font-size: 12px;
          line-height: 1.8;
          margin: 0 0 16px;
        }

        .footer-socials {
          display: flex;
          gap: 11px;
        }

        .footer-socials a {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #293247;
          color: #e0e5f0;
          font-size: 18px;
          font-weight: bold;
          text-decoration: none;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-column h3 {
          margin: 0 0 6px;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
        }

        .footer-column > a {
          color: #e0e5f0;
          font-size: 12px;
          text-decoration: none;
        }

        .footer-column > a:hover,
        .footer-bottom a:hover {
          color: #ff8b49;
        }

        .footer-contact > a {
          display: flex;
          gap: 9px;
          align-items: center;
        }

        .download-title {
          margin-top: 7px !important;
        }

        .download-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .download-buttons a {
          padding: 10px 15px;
          background: #293247;
          color: white;
          border-radius: 7px;
          font-size: 11px;
          text-decoration: none;
        }

        .footer-bottom {
          max-width: 1500px;
          margin: 55px auto 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer-bottom p,
        .footer-bottom a {
          color: #f0f2f8;
          font-size: 12px;
        }

        .footer-bottom p {
          margin: 0;
        }

        .footer-bottom > div {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
        }

        .footer-bottom a {
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 35px;
          }

          .footer-bottom {
            margin-top: 40px;
          }
        }

        @media (max-width: 560px) {
          .footer-section {
            padding: 30px 20px 22px;
          }

          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 32px 18px;
          }

          .footer-brand {
            grid-column: 1 / -1;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 35px;
            padding-top: 20px;
            border-top: 1px solid #30384c;
          }

          .footer-bottom > div {
            gap: 15px;
          }
        }
      `}</style>
    </footer>
  );
}
