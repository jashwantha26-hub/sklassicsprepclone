
import React from "react";

export default function SmartPracticeSection() {
  return (
    <>
      <style>{`
        .smart-practice {
          width: 100%;
          padding: 22px 4.1%;
          background: #090b18;
          font-family: Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .smart-practice *,
        .smart-practice *::before,
        .smart-practice *::after {
          box-sizing: border-box;
        }

        .smart-practice-card {
          max-width: 1400px;
          min-height: 412px;
          margin: 0 auto;
          padding: 32px;
          display: grid;
          grid-template-columns: 377px minmax(0, 1fr);
          align-items: center;
          gap: 36px;

          border: 1px solid #222b3d;
          border-radius: 25px;
          background: linear-gradient(
            115deg,
            #101725 0%,
            #070b1a 100%
          );
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.18);
        }

        .smart-practice-image {
          width: 100%;
          height: 252px;
          display: block;
          object-fit: cover;
          object-position: center;
          border: 1px solid #202b40;
          border-radius: 21px;
        }

        .smart-practice-content {
          min-width: 0;
        }

        .smart-practice-badge {
          display: inline-flex;
          align-items: center;
          padding: 7px 14px;
          margin-bottom: 17px;

          border: 1px solid #a94b13;
          border-radius: 22px;
          color: #f4c89d;
          background: rgba(255, 111, 24, 0.06);
          font-size: 12px;
          line-height: 1.2;
        }

        .smart-practice-title {
          margin: 0 0 15px;
          color: #f8fafc;
          font-size: clamp(27px, 2.8vw, 39px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .smart-practice-title span {
          display: block;
          color: #ff741b;
        }

        .smart-practice-description {
          max-width: 680px;
          margin: 0 0 21px;
          color: #a7adbd;
          font-size: 14px;
          line-height: 1.65;
        }

        .smart-practice-button {
          min-height: 36px;
          padding: 0 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          border-radius: 25px;
          background: linear-gradient(110deg, #ff512f, #e91e63);
          box-shadow: 0 8px 24px rgba(239, 40, 78, 0.22);

          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .smart-practice-button:hover {
          transform: translateY(-2px);
        }

        .smart-practice-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 46px;
          margin-top: 28px;
        }

        .smart-practice-stat {
          min-width: 78px;
          text-align: center;
        }

        .smart-practice-stat strong {
          display: block;
          margin-bottom: 7px;
          color: #f8fafc;
          font-size: 23px;
          font-weight: 800;
          line-height: 1.1;
        }

        .smart-practice-stat span {
          color: #a7adbd;
          font-size: 12px;
        }

        @media (max-width: 900px) {
          .smart-practice-card {
            grid-template-columns: 300px minmax(0, 1fr);
            gap: 26px;
            padding: 26px;
          }

          .smart-practice-image {
            height: 230px;
          }

          .smart-practice-stats {
            gap: 24px;
          }
        }

        @media (max-width: 650px) {
          .smart-practice {
            padding: 18px 16px;
          }

          .smart-practice-card {
            grid-template-columns: 1fr;
            gap: 25px;
            padding: 20px;
            border-radius: 20px;
          }

          .smart-practice-image {
            height: 220px;
          }

          .smart-practice-title {
            font-size: 30px;
            letter-spacing: -0.6px;
          }

          .smart-practice-description {
            font-size: 13px;
          }

          .smart-practice-stats {
            justify-content: space-between;
            gap: 12px;
          }

          .smart-practice-stat {
            min-width: 0;
            flex: 1;
          }

          .smart-practice-stat strong {
            font-size: 20px;
          }

          .smart-practice-stat span {
            font-size: 11px;
          }
        }
      `}</style>

      <section className="smart-practice">
        <div className="smart-practice-card">
          <div className="smart-practice-visual">
            <img
              className="smart-practice-image"
              src="/exam-practice.png"
              alt="Student practicing a multiple-choice exam on a laptop"
            />
          </div>

          <div className="smart-practice-content">
            <div className="smart-practice-badge">
              AI-Powered Learning Platform
            </div>

            <h2 className="smart-practice-title">
              Crack Your Dream Exam with
              <span>Smart Practice</span>
            </h2>

            <p className="smart-practice-description">
              Master NEET, JEE, EAMCET and 50+ competitive exams
              with AI-explained solutions, live mock tests, and
              personalized study plans.
            </p>

            <a href="/register" className="smart-practice-button">
              Start Free Trial
            </a>

            <div className="smart-practice-stats">
              <div className="smart-practice-stat">
                <strong>2M+</strong>
                <span>Active Students</span>
              </div>

              <div className="smart-practice-stat">
                <strong>50K+</strong>
                <span>Selections</span>
              </div>

              <div className="smart-practice-stat">
                <strong>1M+</strong>
                <span>AI Explanations</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
