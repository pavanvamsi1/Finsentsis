import React from "react";

import BarChart     from "../../assets/Home/Bar Chart.png";
import GlowImg      from "../../assets/Home/Glow.png";
import MinimizeRisk from "../../assets/Home/Minimize Risk.png";
import Dollar       from "../../assets/Home/dollar.png";

const WhyChoose = () => (
  <>
    <section className="why-section">

      

      <div className="why-header">
        <div className="sec-pill">
          Enterprise-grade security · Encryption at rest & in transit · Risk-based access controls
        </div>

        <h2 className="why-heading">
          Why Choose Finsentsis OS?
        </h2>

        <p className="why-text">
          From tax and payroll laws to ESG regulations and labor standards everything runs autonomously through the Finsentsis engine.
        </p>
      </div>

      <div className="why-grid">
        {[
          { icon: Dollar,       title: "Reduce Compliance Costs", desc: "Automate 80%+ of manual compliance work, eliminate tool fragmentation, and optimize your compliance budget." },
          { icon: MinimizeRisk, title: "Minimize Risk",           desc: "Real-time monitoring and proactive alerts ensure you never miss a regulatory change or compliance deadline." },
          { icon: GlowImg,      title: "Gain Visibility",         desc: "Complete transparency into your compliance posture across all jurisdictions, regulations, and business units." },
          { icon: BarChart,     title: "Scale Globally",          desc: "Expand into new markets with confidence. Finsentsis handles compliance complexity across 190+ countries." },
        ].map(({ icon, title, desc }) => (

          <div key={title} className="why-card">

            <div className={`why-card-top card-${title.replace(/\s+/g, "").toLowerCase()}`}>
  <img src={icon} alt={title} />
</div>

            <div className="why-card-bottom">
              <p className="why-card-title">{title}</p>
              <p className="why-card-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>

    <style>{`
      .why-section {
        padding: 20px 60px 150px;
        background: #111111;
        position: relative;
        overflow: hidden;
      }

      .sec-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  padding: 0 20px;

  border-radius: 20px;

  /* 🔥 DARK GLASS BASE */
  background: rgba(17, 17, 17, 0.6); /* #111111 with transparency */

  /* subtle glass border */
  border: 1px solid rgba(255, 255, 255, 0.08);

  /* blur effect */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #EAEAEA;

  margin-bottom: 20px;
}



      /* Header */


      .why-header {
        text-align: center;
        margin-bottom: 56px;
        position: relative;
        z-index: 1;
      }



.why-heading {
  font-family: 'Inter', sans-serif; /* fallback */
  font-weight: 500;

  font-size: 55px;          /* exact */
  line-height: 120%;
  letter-spacing: 0;

  text-align: center;
  color: #FFFFFF;

  margin: 16px 0;
}


.why-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;

  font-size: 20px;        /* exact */
  line-height: 140%;
  letter-spacing: 0;

  text-align: center;
  color: #999999;

  max-width: 773px;       /* from figma */
  margin: 0 auto;
}



      /* Grid */
      .why-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        position: relative;
        z-index: 1;
      }

      /* Card */


     .why-card {
  width: 100%;
  max-width: 347px;
  height: 448px;

  background: #1E1E1E;
  border-radius: 10px;

  border: 1.15px solid #383838;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.why-card-top {
  width: 100%;
  height: 276px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}






/* 🔥 CARD 1 — LEFT HEAVY */

.card-reducecompliancecosts img {
  width: 100%;
  
 
}

/* 🔥 CARD 2 — CENTER CLEAN */
.card-minimizerisk img {
  width: 100%;

 
}

/* 🔥 CARD 3 — ZOOMED GLOW */
.card-gainvisibility img {
  width: 100%;
 transform: translateY(5px);
 
 
}

/* 🔥 CARD 4 — RIGHT SHIFTED */
.card-scaleglobally img {
  width: 70%;
 
  
}



     /* ── CARD BOTTOM (FIGMA EXACT) ── */
.why-card-bottom {
  width: 347px;
  height: 180px; /* exact */

  background: #1E1E1E;

  border-top: 1.21px solid #383838;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  border-bottom-left-radius: 9.56px;
  border-bottom-right-radius: 9.56px;
}



  /* ── CARD TITLE (FIGMA EXACT) ── */
.why-card-title {
  font-family: 'Inter', sans-serif;
  font-weight: 500;

  font-size: 22.95px;   /* exact */
  line-height: 120%;
  letter-spacing: 0;

  color: #FFFFFF;

  margin-top: 10px;
  margin-bottom: 28px;
}



/* ── CARD DESCRIPTION (FIGMA EXACT) ── */
.why-card-desc {
  font-family: 'Inter', sans-serif;
  font-weight: 400;

  font-size: 15.3px;   /* exact */
  line-height: 120%;
  letter-spacing: 0;

  color: #999999;

  width: 300px;       
  max-width: none; 
}





    `}</style>
  </>
);

export default WhyChoose;
