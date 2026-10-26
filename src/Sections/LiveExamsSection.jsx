
import React from "react";
import {
  Radio,
  Activity,
  Target,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";

const examGroups = [
  {
    title: "Medical Entrance Exams",
    icon: Activity,
    items: [
      { icon: Target, text: "NEET (UG) – Full syllabus & chapter-wise live mocks" },
      { icon: Cpu, text: "AI-based accuracy & biology-focused analytics" },
    ],
  },
  {
    title: "Engineering Entrance Exams",
    icon: Cpu,
    items: [
      { icon: Target, text: "JEE Main & JEE Advanced (MCQ + numerical)" },
      { icon: Target, text: "EAMCET / State CETs with real exam UI" },
    ],
  },
  {
    title: "MBA & Management Exams",
    icon: BriefcaseBusiness,
    items: [
      { icon: Target, text: "CAT-pattern aptitude & sectional tests" },
      { icon: Cpu, text: "Quant, LRDI & Verbal with time pressure" },
    ],
  },
  {
    title: "Aptitude, Reasoning & Placements",
    icon: Activity,
    items: [
      { icon: Target, text: "Quantitative & logical reasoning tests" },
      { icon: BriefcaseBusiness, text: "Campus placement & hiring assessments" },
    ],
  },
];

export default function LiveExamsSection() {
  return (
    <section className="live-exams-section">
      <div className="live-exams-layout">
        <div className="live-exams-info">
          <div className="live-badge">
            <Radio size={14} />
            <span>Live Now</span>
          </div>

          <h2>
            India-Scale <span>Competitive Live Exams,</span> Conducted by Us
          </h2>

          <p className="live-intro">
            We design and conduct real exam-pattern live tests for NEET, JEE,
            EAMCET, aptitude, reasoning, and placement exams — exactly like the
            actual exam experience students face.
          </p>

          <p className="live-description">
            From thousands of students attempting simultaneously to instant
            All India Ranks, detailed analytics, and strict exam controls —
            our platform is built to handle high-stakes competitive testing
            without compromise.
          </p>

          <div className="live-stats">
            <div>
              <strong>100+</strong>
              <span>Live tests / month</span>
            </div>
            <div>
              <strong>50K</strong>
              <span>Avg. participants</span>
            </div>
            <div>
              <strong>₹10L</strong>
              <span>Monthly prizes</span>
            </div>
          </div>

          <a
            className="live-cta"
            href="https://sklassicsquiz.com/"
            target="_blank"
            rel="noreferrer"
          >
            Join Live Test Now
          </a>
        </div>

        <div className="live-exams-panel">
          <h3>Exams &amp; Test Types We Conduct</h3>

          <div className="live-exam-list">
            {examGroups.map((group) => {
              const GroupIcon = group.icon;

              return (
                <article className="live-exam-card" key={group.title}>
                  <h4>
                    <GroupIcon size={15} />
                    <span>{group.title}</span>
                  </h4>

                  <div className="live-exam-items">
                    {group.items.map((item) => {
                      const ItemIcon = item.icon;

                      return (
                        <p key={item.text}>
                          <ItemIcon size={13} />
                          <span>{item.text}</span>
                        </p>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .live-exams-section {
          box-sizing: border-box;
          width: 100%;
          padding: 40px 3.8% 50px;
          color: #f8fafc;
          background:
            radial-gradient(
              ellipse at 15% 10%,
              rgba(73, 32, 65, 0.18),
              transparent 50%
            ),
            #0c0f1e;
          font-family: Arial, sans-serif;
        }

        .live-exams-layout {
          max-width: 1500px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 6%;
          align-items: start;
        }

        .live-exams-info {
          padding-top: 0;
        }

        .live-badge {
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          margin-bottom: 13px;
          border: 1px solid rgba(255, 100, 76, 0.35);
          border-radius: 25px;
          background: rgba(255, 86, 55, 0.1);
          color: #ff8a39;
          font-size: 12px;
        }

        .live-exams-info h2 {
          margin: 0 0 10px;
          font-size: clamp(24px, 2.1vw, 30px);
          line-height: 1.22;
          font-weight: 750;
          letter-spacing: -0.7px;
        }

        .live-exams-info h2 span {
          color: #ff741c;
        }

        .live-intro,
        .live-description {
          color: #a8adbc;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 15px;
        }

        .live-description {
          margin-top: 16px;
          color: #d0d4df;
          font-size: 13px;
        }

        .live-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 35px;
          margin: 23px 0 24px;
        }

        .live-stats div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .live-stats strong {
          color: #ffffff;
          font-size: 16px;
          font-weight: 750;
        }

        .live-stats span {
          color: #a8adbc;
          font-size: 12px;
        }

        .live-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 18px;
          border-radius: 28px;
          color: #ffffff;
          background: linear-gradient(100deg, #ff572f, #ed174c);
          box-shadow: 0 10px 25px rgba(239, 48, 70, 0.22);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          transition: transform 0.2s ease;
        }

        .live-cta:hover {
          transform: translateY(-2px);
        }

        .live-exams-panel {
          box-sizing: border-box;
          padding: 20px 18px 15px;
          border: 1px solid #263047;
          border-radius: 21px;
          background: #030716;
        }

        .live-exams-panel > h3 {
          margin: 0 0 15px;
          font-size: 14px;
          font-weight: 750;
        }

        .live-exam-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .live-exam-card {
          padding: 14px 15px;
          border: 1px solid #273047;
          border-radius: 16px;
          background: #030716;
          transition:
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .live-exam-card:hover {
          border-color: #4b4560;
          background: #080d20;
        }

        .live-exam-card h4 {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 0 0 9px;
          font-size: 12px;
          font-weight: 750;
        }

        .live-exam-card h4 svg,
        .live-exam-items svg {
          color: #ff8a19;
          flex-shrink: 0;
        }

        .live-exam-items {
          padding-left: 13px;
        }

        .live-exam-items p {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin: 4px 0 0;
          color: #c8cede;
          font-size: 12px;
          line-height: 1.4;
        }

        @media (max-width: 850px) {
          .live-exams-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .live-exams-info h2 {
            max-width: 650px;
          }

          .live-exams-panel {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .live-exams-section {
            padding: 30px 16px 40px;
          }

          .live-exams-info h2 {
            font-size: 25px;
          }

          .live-stats {
            gap: 22px;
          }

          .live-exams-panel {
            padding: 16px 12px;
          }

          .live-exam-card {
            padding: 13px 10px;
          }
        }
      `}</style>
    </section>
  );
}
