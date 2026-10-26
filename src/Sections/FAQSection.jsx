
import React, { useState } from "react";

const faqs = [
  {
    question: "What type of questions are supported?",
    answer:
      "sklassics Quiz supports MCQs, multi-select, true/false, short answer, long answer, coding questions, and file-upload assignments depending on your plan.",
  },
  {
    question: "How does anti-cheat & proctoring work?",
    answer:
      "Proctoring features can help monitor exam activity and identify suspicious behavior during assessments. Available features depend on the exam configuration.",
  },
  {
    question: "Can I export results and detailed reports?",
    answer:
      "Review student performance, scores, and test analytics. Export options depend on the reporting features available in your plan.",
  },
  {
    question: "Will this platform actually help me improve my exam score?",
    answer:
      "Regular mock tests, practice questions, and performance reviews can help you identify weak areas and prepare more effectively.",
  },
  {
    question: "What if I make mistakes or score low in mock tests?",
    answer:
      "Use your results to identify topics that need more practice. Review mistakes, revise concepts, and attempt practice tests again.",
  },
  {
    question: "Can beginners use this platform, or is it only for toppers?",
    answer:
      "Beginners can use practice tests and learning resources to build their confidence and improve gradually at their own pace.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-layout">
        <div className="faq-left">
          <h2>Frequently asked questions.</h2>

          <p className="faq-subtitle">
            Everything you need to know about creating, hosting, and analysing
            quizzes on sklassics Quiz.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <article
                  className={`faq-item ${isOpen ? "faq-active" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() =>
                      setActiveIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-symbol">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="faq-answer">{faq.answer}</p>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="faq-image-frame">
          <img
            src="/faq-students.png"
            alt="Students preparing for exams together"
          />
        </div>
      </div>

      <style>{`
        .faq-section {
          box-sizing: border-box;
          width: 100%;
          padding: 28px 4.2% 55px;
          color: #f8fafc;
          background:
            radial-gradient(
              ellipse at 25% 0%,
              rgba(57, 37, 66, 0.18),
              transparent 60%
            ),
            #0c0f1e;
          font-family: Arial, sans-serif;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.9fr);
          gap: 32px;
          align-items: center;
          max-width: 1500px;
          margin: 0 auto;
        }

        .faq-left h2 {
          margin: 0 0 9px;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 750;
        }

        .faq-subtitle {
          max-width: 400px;
          margin: 0 0 24px;
          color: #a8adbc;
          font-size: 12px;
          line-height: 1.7;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .faq-item {
          overflow: hidden;
          border: 1px solid #30384d;
          border-radius: 14px;
          background: rgba(3, 7, 22, 0.85);
          transition: border-color 0.2s ease;
        }

        .faq-item.faq-active {
          border-color: #f04a60;
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 13px 12px;
          border: 0;
          background: transparent;
          color: #edf0f7;
          text-align: left;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .faq-symbol {
          flex-shrink: 0;
          color: #aeb6c8;
          font-size: 17px;
          line-height: 1;
        }

        .faq-answer {
          margin: -1px 12px 11px;
          color: #aab1c1;
          font-size: 11.5px;
          line-height: 1.65;
        }

        .faq-image-frame {
          box-sizing: border-box;
          width: 100%;
          padding: 15px;
          overflow: hidden;
          border: 1px solid #263047;
          border-radius: 24px;
          background: #030716;
        }

        .faq-image-frame img {
          display: block;
          width: 100%;
          aspect-ratio: 1.45 / 1;
          object-fit: cover;
          border-radius: 17px;
        }

        @media (max-width: 850px) {
          .faq-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .faq-image-frame {
            max-width: 600px;
          }
        }

        @media (max-width: 560px) {
          .faq-section {
            padding: 30px 16px 40px;
          }

          .faq-subtitle {
            margin-bottom: 20px;
          }

          .faq-question {
            font-size: 12px;
          }

          .faq-image-frame {
            padding: 9px;
            border-radius: 17px;
          }

          .faq-image-frame img {
            border-radius: 11px;
          }
        }
      `}</style>
    </section>
  );
}
