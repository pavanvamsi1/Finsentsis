import glowLine from "../../assets/glowline.png";
import { Link } from "react-router-dom";

import Navbar           from "../../components/Home/Navbar";
import Footer           from "../../components/Home/Footer";

import OneUnifiedEngine from "../../components/Home/Oneunifiedengine";
import WhyChoose        from "../../components/Home/Whychoose";
import TrustedBy        from "../../components/Home/Trustedby";


import Dashboard from "../../assets/Home/Dashboard.png";





export default function Homepage() {
  return (
    <div className="page">

      <Navbar />

      {/* ══════ HERO ══════ */}
      <section className="hero-section">

          {/* 🔥 SUN RAYS */}
  <div className="sun-rays">
    <span className="ray ray1"></span>
    <span className="ray ray2"></span>
    <span className="ray ray3"></span>
    <span className="ray ray4"></span>
  </div>
        

        <div className="hero-content">
          <div className="hero-badge-outer">
            <span className="hero-badge">AI-powered Autonomous Compliance</span>
          </div>

          <h1 className="hero-heading">
            Finsentsis OS. Where<br /> ComplianceMeets Autonomy.
          </h1>

          <p className="hero-sub">
            An AI-powered Autonomous Compliance &amp; Governance Operating System that helps
            enterprises simplify global <br/> regulatory, tax, and ESG obligations — through
            real-time intelligence and automation.
          </p>

          <Link to="/RequestaDemo" className="btn-hero">
  Explore the OS ↗
</Link>
        </div>




          {/* HERO IMAGE (FIGMA PERFECT) */}


<div className="hero-images">
    <img src={Dashboard} alt="Dashboard" className="img-dashboard" />
</div>
      
      </section>

      {/* ══════ INTRO TEXT ══════ */}
      
     
        <p className="intro__text">
          Finsentsis OS transforms how organizations handle compliance and governance by
          merging AI, data intelligence, and automation into 
           <span className="intro__highlight"> one unified platform. From
          tax and payroll laws to ESG regulations and labor standards
          everything runs autonomously through the Finsentsis engine.</span>
        </p>
    

      {/* ══ ONE UNIFIED ENGINE ══ */}
      <OneUnifiedEngine />

      {/* ══ WHY CHOOSE ══ */}
      <WhyChoose />

      {/* ══ TRUSTED BY ══ */}
      <TrustedBy />

    {/* ══ CTA (INLINE, NOT SEPARATE) ══ */}
<div className="cta-section">

  {/* RIGHT beams */}
  <img src={glowLine} className="cta-glow-line glow-right glow-layer1" />
  <img src={glowLine} className="cta-glow-line glow-right glow-layer2" />
  <img src={glowLine} className="cta-glow-line glow-right glow-layer3" />
  <img src={glowLine} className="cta-glow-line glow-right glow-layer4" />
  <img src={glowLine} className="cta-glow-line glow-right glow-layer5" />

  <div className="cta-content">
    <h2 className="cta-heading">
      Ready to <br />
      Transform Your <br />
      Compliance?
    </h2>
  </div>

  <p className="cta-sub">
    Join forward-thinking enterprises that are already using Finsentsis OS
    to simplify compliance and reduce risk.
  </p>

  <div className="cta-buttons">
    

    <Link to="/Requestademo" className="btn-secondary">
      Schedule Demo ↗
    </Link>
  </div>
</div>



     

      {/* ══ FOOTER ══ */}
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #111111;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #111111; }
        ::-webkit-scrollbar-thumb { background: #2a2a2a; }

        

        /* ── Page ── */
        .page {
          background: #111111;
        }

        /* ── Hero Section ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 140px 60px 80px;
          overflow: hidden;
         
        }


        /* 🔥 SUN RAYS EFFECT (from features page) */
.sun-rays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
}

.ray {
  position: absolute;
  top: -200px;
  width: 100px;
  height: 1000px;

  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.4),
    rgba(255,255,255,0.3),
    transparent
  );

  filter: blur(60px);
  transform-origin: top;

  left: var(--left);
  transform: rotate(var(--angle));
  opacity: var(--opacity, 1);

  mix-blend-mode: screen;
}

/* Rays positions */
.ray1 { --left: 55%; --angle: 30deg; height: 1050px;  opacity: 0.9; }
.ray2 { --left: 75%; --angle: 30deg; height: 900px;  opacity: 0.8; }
.ray3 { --left: 90%; --angle: 25deg; height: 700px;  opacity: 0.8; }
.ray4 { --left: 35%; --angle: 25deg; height: 800px;  opacity: 0.5; }

/* Fade bottom */
.sun-rays {
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.9) 30%,
    rgba(0,0,0,0.5) 60%,
    transparent 90%
  );
}

     

        .hero-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          
        }


     .hero-badge-outer {
  background: #111111;
  border-radius: 20px;
  padding: 6px 18px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 34px;       /* from Figma */
  min-width: 286px;   /* from Figma */

  margin-bottom: 28px;
}



.hero-badge {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  letter-spacing: 0;

  text-align: center;
  white-space: nowrap;

  background: linear-gradient(
    90deg,
    #989898,
    #EAEAEA,
    #999999
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}



.hero-heading {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 75px;          /* exact from Figma */
  line-height: 99%;         /* exact */
  letter-spacing: 0;

  text-align: center;
  color: #ffffff;

  max-width: 1094px;        /* from Figma */
  margin: 0 auto 36px;
}



.hero-sub {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;          /* exact */
  line-height: 150%;        /* exact */
  letter-spacing: 0;

  text-align: center;
  color: #ffffff;

  max-width: 878.7px;       /* from Figma */
  margin: 10px auto 48px;      /* center + spacing */
}



.btn-hero {
  background: #B1FC5A;              /* exact */
  border-radius: 56px;             /* exact */

  height: 47px;                    /* from Figma */
  min-width: 205px;

  padding: 0 24px;                 /* center text nicely */

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0;

  color: #1E1E1E;

  border: none;
  cursor: pointer;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

60px rgba(0,0,0,0.5);
  transition: transform 0.4s ease, opacity 0.4s ease;
}







/* ── HERO IMAGES (LIKE YOUR DESIGN) ── */
.hero-images {
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(-160px);
}

.img-dashboard {
  width: 100vw;     /* full screen width */
  max-width: none;  /* remove cap */
  height: auto;
  
  border-radius: 16px;

-webkit-mask-image: linear-gradient(
    to bottom,
    transparent 10%,   /* 👈 fade from top */
    black 20%,       /* fully visible */
    black 70%,       /* fully visible */
    transparent 100% /* fade bottom */
  );
}





        /* ── Intro Section ── */
    

     .intro__text {
  font-family: 'Inter', sans-serif;
  font-weight: 500;            /* Medium */
  font-size: 40px;             /* exact */
  line-height: 120%;
  letter-spacing: 0;

  color: #EAEAEA;

  max-width: 1400px;           /* from Figma */
  margin: 0 50px auto ;

  text-align: left;            /* IMPORTANT */
}

        .intro__highlight {
          color: #2c2c2c;
        }


        /*CTA*/

        .cta-section{
  position:relative;
  overflow:hidden;
  z-index: 0;
  background: #111111;
  padding:40px 40px 180px;
  text-align:center;
  
  
}

.cta-content{
  margin-top:80px;
  position:relative;
  z-index:1;
}

/* glow images */
.cta-glow-line{
  position:absolute;
  width:1125px;
  z-index:0;

  pointer-events:none;
  mix-blend-mode:screen;
  opacity:0.75;

  transform:scaleX(1.3);

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    black 75%,
    transparent 100%
  );
}

/* layer depth */

.glow-layer1{
  filter: blur(6px);
  opacity:1;
}

.glow-layer2{
  filter: blur(280px);
  opacity:0;
}

.glow-layer3{
  filter: blur(320px);
  opacity:0.05;
}

.glow-layer4{
  filter: blur(160px);
  opacity:0;
}

.glow-layer5{
  filter: blur(100px);
  opacity:0.05;
}


/* RIGHT beams */

.glow-right.glow-layer1 { bottom:-250px; right:-380px; transform:rotate(-70deg) scaleX(-1); }
.glow-right.glow-layer2 { bottom:-280px; right:-340px; transform:rotate(-70deg) scaleX(-1); }
.glow-right.glow-layer3 { bottom:-310px; right:-300px; transform:rotate(-70deg) scaleX(-1); }
.glow-right.glow-layer4 { bottom:-340px; right:-260px; transform:rotate(-70deg) scaleX(-1); }
.glow-right.glow-layer5 { bottom:-370px; right:-220px; transform:rotate(-70deg) scaleX(-1); }



/* gradient overlay to fade out glows at edges */
.cta-section::before{
  content:"";
  position:absolute;
  inset:0;

  

  background:
    linear-gradient(
      to bottom,
      #111111
    ),
    linear-gradient(
      to right,
      rgba(13,13,13,0) 60%,
      rgba(13,13,13,0.6) 85%,
      rgba(13,13,13,1) 100%
    );

  pointer-events:none;
}

.cta-section::after{
  content:"";
  position:absolute;

  right:-250px;
  bottom:-250px;

  width:520px;
  height:520px;

  background: radial-gradient(
    circle,
    rgba(154,255,46,0.35) 0%,
    rgba(154,255,46,0.15) 40%,
    transparent 75%
  );

  filter: blur(140px);
  pointer-events:none;
}

.glow-soft{
  opacity:0.35;
  filter: blur(60px);
}


.cta-heading {
  font-family: 'Syne', sans-serif;
  font-size: clamp(44px, 8vw, 100px);
  font-weight: 700; 
  color: #fff;
  line-height: 1.0; 
  letter-spacing: -0.02em;
  position: relative; 
  z-index: 1; 
  margin-bottom: 24px;
}

.cta-sub {
  font-size: 14px; 
  color: rgba(255,255,255,0.45);
  line-height: 1.65; 
  max-width: 540px;
  margin: 0 auto 40px; 
  position: relative; 
  z-index: 1;
}

.cta-buttons {
  display: flex; 
  align-items: center; 
  justify-content: center;
  gap: 12px; 
  position: relative; 
  z-index: 1; 
  flex-wrap: wrap;
}



.btn-secondary {
  display: inline-flex; 
  align-items: center; 
  gap: 6px;
  padding: 12px 24px; 
  border-radius: 999px;
  background: transparent; 
  color: #fff;
  font-family: 'DM Sans', sans-serif; 
  font-size: 14px; 
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.18); 
  cursor: pointer;
  text-decoration: none; 
  transition: border-color 0.2s, transform 0.2s;
}

.btn-secondary:hover { 
  border-color: rgba(255,255,255,0.4); 
  transform: translateY(-1px); 
}





   
        /* ── Responsive ── */
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .nav-center { display: none; }
        }
        @media (max-width: 640px) {
          .hero-section { padding: 90px 16px 0; }
          .hero-heading { font-size: 32px; }
          .hero-sub { font-size: 14px; }
          .hero__preview-grid { grid-template-columns: 1fr; }
          .intro-section { padding: 40px 16px; }
          .footer { padding: 40px 16px 24px; }
          .footer-top { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>

    </div>
  );
}
