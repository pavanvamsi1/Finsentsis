

const WhyWeExist = () => {
  return (
    <>
      <section className="why">
        {/* BASE BACKGROUND */}
        <div className="why__bg" />


        {/* GREEN GLOW */}
        <div className="why__glow">
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
  <span className="why__ray" />
</div>


        {/* DARK VIGNETTE */}
        <div className="why__vignette" />

        {/* CONTENT */}
        <div className="why__content">
          <h2 className="why__title">Why We Exist</h2>

         <div className="why__text">
  <p>
    The compliance landscape is broken. Organizations spend billions annually on manual processes,
    fragmented tools, and reactive compliance strategies. Regulatory bodies continue to increase
    requirements, yet most enterprises lack real-time visibility into their compliance posture.<br/>
    We saw an opportunity to fundamentally change this. By combining AI, data intelligence,
    and automation, Finsentsis OS transforms compliance from a cost center into a competitive advantage.<br/>
    Our platform doesn't just help you stay compliant—it helps you stay ahead of regulatory changes,
    optimize your compliance spend, and build trust with regulators and stakeholders.
  </p>
</div>
        </div>
      </section>

      {/* STYLE */}
      <style>{`
        .why {
          position: relative;
          width: 100%;
          min-height: 720px;
          background: #000;
          overflow: hidden;
          color: #fff;
        }

        /* BASE BACKGROUND */
        .why__bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #020302 0%, #000 100%);
          z-index: 0;
        }


.why__glow {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: hidden;
}

.why__glow::before {
  content: '';
  position: absolute;
  bottom: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 2400px;
  height: 550px;
  background: radial-gradient(
    ellipse at center bottom,
    #9AFF2E 0%,
    rgba(154,255,46,0.85) 15%,
    rgba(154,255,46,0.45) 35%,
    rgba(154,255,46,0.3) 45%,
    rgba(100,200,20,0.1) 50%,
    transparent 85%
  );
  filter: blur(50px);
}

/* INDIVIDUAL LIGHT RAYS */
.why__ray {
  position: absolute;
  bottom: 0;
  width: 1px;
  height: 100%;
  background: linear-gradient(to top, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 50%, transparent 75%);
  filter: blur(0.5px);
  transform-origin: bottom center;
}

.why__ray:nth-child(1)  { left: 20%; transform: rotate(40deg);  height: 60%; opacity: 0.25; }
.why__ray:nth-child(2)  { left: 28%; transform: rotate(30deg);  height: 60%; opacity: 0.35; }
.why__ray:nth-child(3)  { left: 34%; transform: rotate(22deg);  height: 60%; opacity: 0.4;  }
.why__ray:nth-child(4)  { left: 39%; transform: rotate(14deg);  height: 60%; opacity: 0.45; }
.why__ray:nth-child(5)  { left: 44%; transform: rotate(7deg);   height: 60%; opacity: 0.5;  }
.why__ray:nth-child(6)  { left: 50%; transform: rotate(0deg);   height: 60%; opacity: 0.55; width: 2px; }
.why__ray:nth-child(7)  { left: 56%; transform: rotate(-7deg);  height: 60%; opacity: 0.5;  }
.why__ray:nth-child(8)  { left: 61%; transform: rotate(-14deg); height: 60%; opacity: 0.45; }
.why__ray:nth-child(9)  { left: 66%; transform: rotate(-22deg); height: 60%; opacity: 0.4;  }
.why__ray:nth-child(10) { left: 72%; transform: rotate(-30deg); height: 60%; opacity: 0.35; }
.why__ray:nth-child(11) { left: 80%; transform: rotate(-40deg); height: 60%; opacity: 0.25; }




        /* DARK CENTER */
       .why__vignette {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.92) 0%,
    rgba(0,0,0,0.6) 40%,
    rgba(0,0,0,0.1) 75%,
    rgba(0,0,0,0) 100%
  );
  z-index: 3;
}

        /* CONTENT */
        .why__content {
          position: relative;
          z-index: 5;
          max-width: 1300px;
          margin: 0 auto;
          padding: 100px 20px 120px;
          text-align: center;
          font-family: "Inter", sans-serif;
        }

        .why__title {
          font-size: 42px;
          font-weight: 500;
          margin-bottom: 40px;
        }

.why__text {
  max-width: 1250px; /* slightly tighter for better shape */
  margin: 0 auto;
}

.why__text p {
  font-family: "Inter", sans-serif;
  font-size: 26px;
  font-weight: 400;
  line-height: 138%;
  letter-spacing: 0;
  color: #979797;
  text-align: center;
  
  margin: 0;
}

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .why__title {
            font-size: 32px;
          }

          
        }
      `}</style>
    </>
  );
};

export default WhyWeExist;