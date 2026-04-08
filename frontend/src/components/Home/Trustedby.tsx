import React from "react";

/* ✅ IMPORT IMAGES */
import img60 from "../../assets/Home/60.png";
import img80 from "../../assets/Home/80.png";
import img190 from "../../assets/Home/190.png";
import MiniDashboard from "../../assets/Home/Mini Dashboard.png";

const TrustedBy: React.FC = () => {
  return (
    <>

      {/* ✅ WRAPPER ADDED */}
      <div className="trusted-wrapper">

        {/* ── PILL ── */}
        <div className="trusted-pill">
          <div className="sec-pill">
            Enterprise-grade security · Encryption at rest & in transit · Role-based access controls
          </div>
        </div>

        {/* ── HEADER ── */}
        <div className="trusted-header">
          <h2 className="trusted-heading">
            Trusted by Leading Enterprises
          </h2>

          <p className="trusted-text">
            From tax and payroll laws to ESG regulations and labor standards everything runs autonomously through the Finsentsis engine.
          </p>
        </div>

        {/* ── STATS ── */}
        <div className="trusted-stats">
          {[
            {
              label: "Reduce\nCompliance\nCosts",
              img: img60,
              width: "381.13px",
              height: "221.22px"
            },
            {
              label: "Manual\nwork\neliminated",
              img: img80,
              width: "380px",
              height: "221.22px"
            },
            {
              label: "Countries\nsupported",
              img: img190,
              width: "340px",
              height: "221.22px"
            },
          ].map(({ label, img, width, height }) => (
            <div key={label} className="stat-card">
              <span className="stat-label">{label}</span>

              <img
                src={img}
                alt="stat"
                style={{ width, height, objectFit: "contain" }}
              />
            </div>
          ))}
        </div>

      </div>

      {/* ✅ DASHBOARD (SEPARATE FROM FLOW) */}
      <div className="trusted-dashboard">
        <img src={MiniDashboard} alt="Dashboard Preview" />
      </div>

      {/* ── STYLES ── */}
      <style>{`

        /* ✅ WRAPPER (MAIN FIX) */
        .trusted-wrapper {
          margin-top: 90px;   /* 👈 moves badge + content down */
        }

        .trusted-pill {
          display: flex;
          justify-content: flex-start;
          max-width: 1400px;
          margin: 0 auto 28px;
        }

        .sec-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 36px;
          padding: 0 20px;
          border-radius: 20px;
          background: rgba(17, 17, 17, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          color: #EAEAEA;
          margin-bottom: 10px;
        }

        .trusted-header {
          max-width: 1400px;
          margin: 0 auto 40px;
        }

        .trusted-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 50px;
          line-height: 120%;
          color: #FFFFFF;
          text-align: left;
          max-width: 860px;
          margin-bottom: 20px;
        }

        .trusted-text {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 20px;
          line-height: 140%;
          color: #999999;
          max-width: 750px;
          text-align: left;
          margin: 0;
        }

        .trusted-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .stat-card {
          width: 458px;
          height: 227px;
          background: #1E1E1E;
          border-radius: 12px;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1.6px solid #383838;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 30.27px;
          line-height: 120%;
          color: #999999;
          max-width: 167px;
          white-space: pre-line;
        }

        /* 🔥 DASHBOARD (FIXED POSITION, DOES NOT AFFECT CTA) */
        .trusted-dashboard {
          position: absolute;
          top: 3480px;     /* 👈 adjust vertical */
          right: -170px;
          width: 100%;

          display: flex;
          justify-content: center;

          pointer-events: none;
        }


        
      

        .trusted-dashboard img {
          width: 80%;
          max-width: 800px;
          height: auto;

          border-radius: 20px;

          margin-left: 400px; /* 👈 right shift */

          -webkit-mask-image: linear-gradient(
            to bottom,
            black 40%,
            transparent 95%
          );
        }

      `}</style>
    </>
  );
};

export default TrustedBy;
