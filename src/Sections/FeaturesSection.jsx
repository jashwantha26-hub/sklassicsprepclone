
import React from "react";
import {
  Stethoscope,
  Settings,
  Calculator,
  BookOpen,
  Landmark,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Explanations",
    description:
      "Get instant, detailed explanations for every question. Our AI breaks down complex concepts into easy-to-understand steps.",
    icon: Stethoscope,
    color: "#a044ff",
  },
  {
    title: "Live Mock Tests",
    description:
      "Join thousands of students in real-time mock tests. Experience exam pressure and compete on leaderboards.",
    icon: Settings,
    color: "#4169f1",
  },
  {
    title: "Personalized Practice",
    description:
      "Smart algorithms identify weak areas and create customised practice sessions to improve your score.",
    icon: Calculator,
    color: "#10c5dc",
  },
  {
    title: "Detailed Analytics",
    description:
      "Track your progress with comprehensive analytics. Understand your strengths and areas for improvement.",
    icon: BookOpen,
    color: "#ffc928",
  },
  {
    title: "Previous Year Papers",
    description:
      "Access 20+ years of previous exam papers with detailed solutions and difficulty analysis.",
    icon: Landmark,
    color: "#5948e8",
  },
  {
    title: "Doubt Resolution",
    description:
      "Ask your doubts and get quick, accurate answers from our AI tutor or expert mentors.",
    icon: GraduationCap,
    color: "#f04da7",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <h2>
          Everything You Need to <span>Succeed</span>
        </h2>
        <p>
          Powerful features designed to make your exam preparation
          efficient, effective, and enjoyable.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="feature-card" key={feature.title}>
              <div
                className="feature-icon"
                style={{ backgroundColor: feature.color }}
              >
                <Icon size={25} strokeWidth={2.5} />
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          );
        })}
      </div>

      <style>{`
        .features-section {
          box-sizing: border-box;
          width: 100%;
          padding: 50px 4.2% 65px;
          color: #f8fafc;
          font-family: Arial, sans-serif;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(43, 35, 67, 0.24),
              transparent 65%
            ),
            #0b0e1d;
        }

        .features-heading {
          text-align: center;
          margin-bottom: 38px;
        }

        .features-heading h2 {
          margin: 0 0 12px;
          font-size: 28px;
          line-height: 1.3;
          font-weight: 750;
          letter-spacing: -0.7px;
        }

        .features-heading h2 span {
          color: #ff711c;
        }

        .features-heading p {
          margin: 0;
          color: #a8adbc;
          font-size: 14px;
          line-height: 1.6;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
        }

        .feature-card {
          box-sizing: border-box;
          min-height: 232px;
          padding: 29px 25px 25px;
          display: flex;
          align-items: center;
          flex-direction: column;
          text-align: center;
          border: 1px solid #17213a;
          border-radius: 23px;
          background: #030718;
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: #344365;
          background: linear-gradient(
            120deg,
            #153b59,
            #282442 65%,
            #522b25
          );
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .feature-icon {
          width: 58px;
          height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 17px;
          color: #ffffff;
          margin-bottom: 18px;
        }

        .feature-card h3 {
          margin: 0 0 10px;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        .feature-card p {
          max-width: 340px;
          margin: 0;
          color: #c5cada;
          font-size: 13px;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 18px;
          }

          .features-heading h2 {
            font-size: 25px;
          }
        }

        @media (max-width: 560px) {
          .features-section {
            padding: 40px 16px 45px;
          }

          .features-heading {
            margin-bottom: 28px;
          }

          .features-heading h2 {
            font-size: 23px;
          }

          .features-heading p {
            font-size: 13px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .feature-card {
            min-height: 215px;
            padding: 25px 20px;
          }
        }
      `}</style>
    </section>
  );
}
