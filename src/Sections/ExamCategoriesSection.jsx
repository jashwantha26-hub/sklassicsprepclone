
import React from "react";
import {
  Stethoscope,
  Settings,
  Calculator,
  Landmark,
  BookOpen,
  GraduationCap,
} from "lucide-react";

const exams = [
  {
    name: "NEET",
    description: "Medical Entrance",
    students: "500K+ students",
    icon: Stethoscope,
    color: "#10b981",
  },
  {
    name: "JEE Main",
    description: "Engineering Entrance",
    students: "400K+ students",
    icon: Settings,
    color: "#4778ff",
  },
  {
    name: "JEE Advanced",
    description: "IIT Entrance",
    students: "200K+ students",
    icon: Calculator,
    color: "#9255f7",
  },
  {
    name: "EAMCET",
    description: "AP/TS State Exam",
    students: "300K+ students",
    icon: Landmark,
    color: "#ff5b32",
  },
  {
    name: "GATE",
    description: "Graduate Aptitude",
    students: "150K+ students",
    icon: BookOpen,
    color: "#1688ee",
  },
  {
    name: "UPSC",
    description: "Civil Services",
    students: "100K+ students",
    icon: GraduationCap,
    color: "#ff900e",
  },
];

export default function ExamCategoriesSection() {
  return (
    <>
      <style>{`
        .exam-categories {
          width: 100%;
          padding: 36px 4%;
          background: linear-gradient(
            115deg,
            #100d19 0%,
            #0b1022 100%
          );
          color: #f8fafc;
          font-family: Arial, Helvetica, sans-serif;
          box-sizing: border-box;
        }

        .exam-categories *,
        .exam-categories *::before,
        .exam-categories *::after {
          box-sizing: border-box;
        }

        .exam-categories-inner {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .exam-categories-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .exam-categories-title {
          margin: 0 0 9px;
          color: #f8fafc;
          font-size: 28px;
          line-height: 1.25;
          font-weight: 800;
          letter-spacing: -0.6px;
        }

        .exam-categories-title span {
          color: #ff741b;
        }

        .exam-categories-subtitle {
          max-width: 600px;
          margin: 0 auto;
          color: #a6abba;
          font-size: 14px;
          line-height: 1.6;
        }

        .exam-categories-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 16px;
        }

        .exam-category-card {
          min-width: 0;
          min-height: 189px;
          padding: 18px 10px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;

          background: #030819;
          border: 1px solid #151f35;
          border-radius: 21px;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
          transition:
            transform 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .exam-category-card:hover {
          transform: translateY(-4px);
          border-color: #39445d;
          background: #080f24;
        }

        .exam-category-icon {
          width: 47px;
          height: 47px;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: #ffffff;
        }

        .exam-category-name {
          margin: 0 0 14px;
          color: #f1f3f9;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.2;
        }

        .exam-category-description {
          margin: 0 0 17px;
          color: #a6abba;
          font-size: 12px;
          line-height: 1.3;
          white-space: nowrap;
        }

        .exam-category-students {
          margin-top: auto;
          color: #f2d0a5;
          font-size: 12px;
          line-height: 1.3;
        }

        .exam-categories-footer {
          margin-top: 24px;
          text-align: center;
        }

        .exam-categories-link {
          display: inline-block;
          color: #f3a64e;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: color 0.2s ease;
        }

        .exam-categories-link:hover {
          color: #ff741b;
        }

        @media (max-width: 1050px) {
          .exam-categories-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .exam-categories {
            padding: 32px 16px;
          }

          .exam-categories-title {
            font-size: 25px;
          }

          .exam-categories-subtitle {
            font-size: 13px;
          }

          .exam-categories-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          .exam-category-card {
            min-height: 185px;
            padding: 18px 6px 15px;
            border-radius: 17px;
          }

          .exam-category-description {
            font-size: 11px;
            white-space: normal;
          }

          .exam-category-students {
            font-size: 11px;
          }
        }
      `}</style>

      <section className="exam-categories">
        <div className="exam-categories-inner">
          <header className="exam-categories-header">
            <h2 className="exam-categories-title">
              Prepare for <span>Any Exam</span>
            </h2>

            <p className="exam-categories-subtitle">
              Choose from 50+ national and state-level competitive
              exams. We've got you covered with comprehensive study
              material and practice tests.
            </p>
          </header>

          <div className="exam-categories-grid">
            {exams.map((exam) => {
              const Icon = exam.icon;

              return (
                <article
                  className="exam-category-card"
                  key={exam.name}
                >
                  <div
                    className="exam-category-icon"
                    style={{ background: exam.color }}
                  >
                    <Icon size={23} strokeWidth={2.5} />
                  </div>

                  <h3 className="exam-category-name">
                    {exam.name}
                  </h3>

                  <p className="exam-category-description">
                    {exam.description}
                  </p>

                  <span className="exam-category-students">
                    {exam.students}
                  </span>
                </article>
              );
            })}
          </div>

          <div className="exam-categories-footer">
            <a href="/exams" className="exam-categories-link">
              View all 50+ exams →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
