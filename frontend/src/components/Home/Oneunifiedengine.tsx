import React from "react";

import Folder     from "../../assets/Home/Folder.png";
import Globe      from "../../assets/Home/3D Globe.png";
import Regulatory from "../../assets/Home/Regulatory Intelligence.png";
import Unified    from "../../assets/Home/Unified Visibility Control.png";
import Mask      from "../../assets/Home/Mask.png";

export default function OneUnifiedEngine() {
  return (
    <>
      <div className="wrapper">

        {/* HEADER */}
        <div className="header">
          <h2>One Unified Engine for Global Compliance.</h2>
          <p>
            From tax and payroll laws to ESG regulations and labor standards everything runs autonomously through the Finsentsis engine.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="row">
          <div className="card-audit">
            <h3>Audit-Ready, On Demand</h3>
            <p>Auto-generated compliant reports standardized for regulators and auditors.</p>
            <img src={Folder} />
          </div>

          <div className="card-autonomous">
            <h3>Autonomous by Design</h3>
            <p>Self-managing compliance engine that adapts to regulatory changes in real-time.</p>
            <img src={Globe} />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row">
          <div className="card-regulatory">
            <div className="content">
              <h3>Real-Time Regulatory Intelligence</h3>
              <p>AI-powered monitoring of global laws and policy <br/>
               updates across all jurisdictions.</p>
            </div>
            <img src={Regulatory} />
            <img src={Mask} />
          </div>

          <div className="card-unified">
            <h3>Unified Visibility & Control</h3>
            <p>Single dashboard for ESG, tax, labor, and data compliance metrics.</p>
            <img src={Unified} />
          </div>
        </div>

      </div>

      <style>{`
        /* 🔥 LAYOUT */
        .wrapper {
          max-width: 1450px;
          margin: 0 auto;
          padding: 150px 24px 100px;
        }

        .header {
          text-align: center;
          margin-bottom: 80px;
        }

        .header h2 {
          font-size: 55px;
          font-weight: 500;
          color: #fff;
        }

        .header p {
          font-size: 20px;
          color: #999;
          max-width: 850px;
          margin: 24px auto 0;
        }

        .row {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
        }




       /* ========================= */
/* 🔥 CARD 1 - AUDIT (FINAL) */
/* ========================= */

.card-audit {
  width: 430px;              /* rounded from 429.64 */
  height: 416px;
  background: #1E1E1E;
  border-radius: 10px;
  padding: 32px;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

/* TITLE */
.card-audit h3 {
  font-size: 29px;
  font-weight: 500;
  color: #ffffff;
  margin: 0 0 10px 0;
}

/* DESCRIPTION */
.card-audit p {
  max-width: 351px;
  font-size: 18px;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: 0%;
  color: #999999;
  margin: 0;
}


.card-audit img {
  position: absolute;
  width: 263.51px;
  height: 243.51px;

  bottom: 0px;     /* keep visual overlap */
  left: 20px;        /* from Figma (78.11px → rounded) */

  transform: none;   /* remove translateX */
  pointer-events: none;
}




        /* ========================= */
        /* 🔥 CARD 2 - AUTONOMOUS */
        /* ========================= */


        .card-autonomous {
  width: 963px;
  height: 416px;
  background: #1E1E1E;
  border-radius: 10px;
  padding: 32px;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
}

.card-autonomous h3 {
  width: 370px;
  font-size: 29px;
  font-weight: 500;
  line-height: 120%;
  color: #FFFFFF;
  margin: 30px 0 32px 20px;
}

.card-autonomous p {
  width: 443px;
  font-size: 18px;
  line-height: 120%;
  color: #999999;
  margin: 0 0 0 20px;
}

.card-autonomous img {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: auto;
  object-fit: contain;
}




        /* ========================= */
        /* 🔥 CARD 3 - REGULATORY */
        /* ========================= */
        .card-regulatory {
          width: 843px;
          height: 416px;
          background: #1E1E1E;
          border-radius: 10px;
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

/* content position */
.card-regulatory .content {
  position: absolute;
  bottom: 50px;              /* adjusted for spacing */
  left: 30px;                /* ADD this (important) */
  width: 500px;
  
}

/* heading */
.card-regulatory h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 29.72px;        /* exact from Figma */
  line-height: 120%;
  color: #fff;
  margin: 0 0 32px 0;
}

/* paragraph */
.card-regulatory p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;        /* exact from Figma */
  line-height: 120%;
  color: #999999;
  margin: 0;
}

.card-regulatory img {
  position: absolute;
  bottom: -40px;  /* push slightly outside */
  right: -20px;        /* offset to the right */
  width: 443px; 
  height: 492px; size (NOT 100%) */
  transform: rotate(47deg);
  transform-origin: center;
  object-fit: contain;
  pointer-events: none; /* optional: makes it decorative */
}


.card-regulatory img:last-of-type {
  position: absolute;
  width: 300px;
  height: 345px;

  top: -50px;        /* adjusted relative to card */
  left: 0px;

  object-fit: contain;
  pointer-events: none;
  z-index: 1;
}





        /* ========================= */
        /* 🔥 CARD 4 - UNIFIED */
        /* ========================= */
        .card-unified {
          width: 549px;
          height: 416px;
          background: #1E1E1E;
          border-radius: 10px;
          padding: 32px;
          position: relative;
          overflow: hidden;
        }

 /* heading */
.card-unified h3 {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 29.72px;
  line-height: 120%;
  color: #ffffff;
  margin: 240px 0 32px 5px;

}

/* paragraph */
.card-unified p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  color: #999999;
  margin: 0 0 0 5px;
  width: 443px;          /* from Figma */
}

     .card-unified img {
  position: absolute;

  width: 718px;
  height: 410px;

  top: 10px;     /* push slightly outside */
  right: 0px;

  object-fit: contain;
  pointer-events: none;
}

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .row {
            flex-direction: column;
          }

          .card-audit,
          .card-regulatory,
          .card-unified {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}