interface Feature {
  id: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Real-Time Regulatory Interpretation",
    description:
      "AI & NLP technology tracks and analyzes global laws to ensure organizations always stay updated.",
  },
  {
    id: 2,
    title: "Policy-to-Task Conversion",
    description:
      "Convert policies into real-time workflows via automation scripts, reducing human effort.",
  },
  {
    id: 3,
    title: "Continuous Compliance Monitoring",
    description:
      "Automated monitoring and alerts ensure you never miss a regulatory change or deadline.",
  },
  {
    id: 4,
    title: "Multi-Country Governance",
    description:
      "Supports compliance frameworks across multiple countries and industries.",
  },
  {
    id: 5,
    title: "Audit-Ready Reporting",
    description:
      "Auto-generates compliant, standardized reports for regulators and auditors on demand.",
  },
];

export default function FeatureGrid() {
  return (
    <>
      <div className="feature-wrapper">

        {/* TOP BIG CARD */}
        <div className="card large">
          <h3>{features[0].title}</h3>
          <p>{features[0].description}</p>
        </div>

        {/* MIDDLE ROW */}
        <div className="row">
          <div className="card">
            <h3>{features[1].title}</h3>
            <p>{features[1].description}</p>
          </div>

          <div className="card">
            <h3>{features[2].title}</h3>
            <p>{features[2].description}</p>
          </div>
        </div>

        {/* 🔥 BOTTOM ROW (FIGMA EXACT) */}
        <div className="row-bottom">
          <div className="card wide">
            <h3>{features[3].title}</h3>
            <p>{features[3].description}</p>
          </div>

          <div className="card small">
            <h3>{features[4].title}</h3>
            <p>{features[4].description}</p>
          </div>
        </div>

      </div>

      <style>{`
        .feature-wrapper {
          max-width: 1404px;
          margin: 0 auto;
          padding: 0 24px 100px;
        }

        /* COMMON CARD */
        .card {
          position: relative;
          background: linear-gradient(180deg, #0d0f0d, #060807);
          border: 1px solid #222;
          border-radius: 20px;
          padding: 32px;
          overflow: hidden;
        }

        .card h3 {
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 14px;
          color: #777;
          max-width: 420px;
        }

        /* TOP LARGE CARD */
        .large {
          width: 100%;
          height: 320px;
          margin-bottom: 24px;
        }

        /* MIDDLE ROW */
        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        /* 🔥 BOTTOM ROW (CUSTOM WIDTHS) */
        .row-bottom {
          display: grid;
          grid-template-columns: 2.7fr 1fr; /* ≈ 1004px / 373px */
          gap: 24px;
        }

        /* CARD HEIGHTS (FIGMA) */
        .wide {
          height: 434px;
        }

        .small {
          height: 434px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .row-bottom {
            grid-template-columns: 1fr; /* stack */
          }
        }

        @media (max-width: 768px) {
          .row {
            grid-template-columns: 1fr;
          }

          .large,
          .wide,
          .small {
            height: auto;
          }
        }
      `}</style>
    </>
  );
}
