
import React from "react";

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>Start Your Journey to Success Today</h2>

        <p>
          Join 2 million+ students who are already cracking their dream exams.
          Get 7 days free access to all features.
        </p>

        <div className="cta-actions">
          <a
            href="https://sklassicsquiz.com/"
            className="cta-button"
            target="_blank"
            rel="noreferrer"
          >
            Start 7-Day Free Trial <span>→</span>
          </a>

          <span className="cta-note">No credit card required</span>
        </div>
      </div>

      <style>{`
        .cta-section {
          box-sizing: border-box;
          width: 100%;
          padding: 35px 4.2% 55px;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(42, 34, 65, 0.18),
              transparent 65%
            ),
            #0b0e1d;
          color: #ffffff;
          font-family: Arial, sans-serif;
        }

        .cta-card {
          box-sizing: border-box;
          width: 100%;
          max-width: 1500px;
          min-height: 250px;
          margin: 0 auto;
          padding: 48px 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 32px;
          background: linear-gradient(
            115deg,
            #111020 0%,
            #101224 55%,
            #111326 100%
          );
        }

        .cta-card h2 {
          margin: 0 0 12px;
          font-size: clamp(24px, 2.5vw, 32px);
          line-height: 1.3;
          font-weight: 750;
          letter-spacing: -0.8px;
        }

        .cta-card > p {
          max-width: 650px;
          margin: 0 0 25px;
          color: #e0e2eb;
          font-size: 13px;
          line-height: 1.7;
        }

        .cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 17px;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 30px;
          background: linear-gradient(100deg, #ff572f, #ed174c);
          box-shadow: 0 10px 28px rgba(239, 48, 70, 0.25);
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: transform 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
        }

        .cta-note {
          color: #e0e2eb;
          font-size: 12px;
        }

        @media (max-width: 560px) {
          .cta-section {
            padding: 25px 16px 40px;
          }

          .cta-card {
            min-height: 250px;
            padding: 35px 20px;
            border-radius: 24px;
          }

          .cta-card h2 {
            font-size: 25px;
          }

          .cta-actions {
            flex-direction: column;
            gap: 14px;
          }
        }
      `}</style>
    </section>
  );
}
