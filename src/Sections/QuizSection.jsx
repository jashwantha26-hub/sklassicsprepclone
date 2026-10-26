
import React from "react";

const quizzes = [
  {
    title: "Senior BiPC - EAMCET",
    category: "EAMCET",
  },
  {
    title: "Senior MPC - EAMCET",
    category: "EAMCET",
  },
  {
    title: "Junior BiPC - EAMCET",
    category: "EAMCET",
  },
  {
    title: "Junior MPC - EAMCET",
    category: "EAMCET",
  },
  {
    title: "Junior MPC - EAPCET",
    category: "EAPCET",
  },
  {
    title: "Junior BiPC - NEET",
    category: "NEET",
  },
];

export default function QuizSection() {
  return (
    <section className="quiz-section" id="quizzes">
      <div className="quiz-heading">
        <div>
          <h2>Practice with live &amp; mock quizzes.</h2>
          <p>
            Get a sneak peek of a few quizzes available on sklassics Quiz.
          </p>
        </div>

        <a
          className="view-quizzes"
          href="https://sklassicsquiz.com/"
          target="_blank"
          rel="noreferrer"
        >
          View all quizzes →
        </a>
      </div>

      <div className="quiz-grid">
        {quizzes.map((quiz, index) => (
          <article className="quiz-card" key={index}>
            <div className="quiz-image" />

            <div className="quiz-content">
              <span className="quiz-meta">Quiz | 1 level</span>

              <h3>{quiz.title}</h3>

              <a
                className="take-quiz"
                href="https://sklassicsquiz.com/"
                target="_blank"
                rel="noreferrer"
              >
                Take quiz →
              </a>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .quiz-section {
          width: 100%;
          box-sizing: border-box;
          padding: 18px 4.2% 60px;
          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(40, 42, 75, 0.18),
              transparent 65%
            ),
            #0d1020;
          color: #f8fafc;
          font-family: Arial, sans-serif;
        }

        .quiz-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 34px;
        }

        .quiz-heading h2 {
          margin: 0 0 10px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: -0.3px;
        }

        .quiz-heading p {
          margin: 0;
          color: #a4a9ba;
          font-size: 12px;
          line-height: 1.6;
        }

        .view-quizzes {
          flex-shrink: 0;
          padding: 10px 18px;
          border-radius: 30px;
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          background: linear-gradient(100deg, #ff572f, #ed174c);
          box-shadow: 0 5px 20px rgba(239, 48, 70, 0.2);
          transition: transform 0.2s ease;
        }

        .view-quizzes:hover {
          transform: translateY(-2px);
        }

        .quiz-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .quiz-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #30384e;
          border-radius: 15px;
          background: #030716;
          transition:
            transform 0.2s ease,
            border-color 0.2s ease;
        }

        .quiz-card:hover {
          transform: translateY(-3px);
          border-color: #59627c;
        }

        .quiz-image {
          height: 234px;
          background: linear-gradient(115deg, #ffc5c1 0%, #ff9745 100%);
        }

        .quiz-content {
          min-height: 95px;
          box-sizing: border-box;
          padding: 14px 13px 12px;
        }

        .quiz-meta {
          display: block;
          margin-bottom: 10px;
          color: #aeb5c7;
          font-size: 10px;
        }

        .quiz-content h3 {
          margin: 0 0 12px;
          color: #f1f3f9;
          font-size: 12px;
          line-height: 1.4;
          font-weight: 700;
        }

        .take-quiz {
          color: #ff526e;
          text-decoration: none;
          font-size: 11px;
        }

        .take-quiz:hover {
          color: #ff879a;
        }

        @media (max-width: 900px) {
          .quiz-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .quiz-image {
            height: 200px;
          }
        }

        @media (max-width: 560px) {
          .quiz-section {
            padding: 25px 16px 40px;
          }

          .quiz-heading {
            align-items: flex-start;
            flex-direction: column;
            margin-bottom: 24px;
          }

          .quiz-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .quiz-image {
            height: 210px;
          }

          .view-quizzes {
            align-self: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
