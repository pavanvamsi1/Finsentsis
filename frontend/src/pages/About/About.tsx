import Navbar from "../../components/Home/Navbar";
import CorePhilosophy from "../../components/About/CorePhilosophy";
import WhyWeExist from "../../components/About/WhyWeExist";
import Footer from "../../components/Home/Footer";

const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        
        <div className="hero-beam hero-beam-left" />
        
<div className="hero-beam hero-beam-right" />

<div className="hero-glow hero-glow-left" />
<div className="hero-glow hero-glow-right" />



        <div className="about-hero__inner">
          <Navbar />

          <div className="about-hero__content">
            <h1 className="about-hero__title">
              Redefining Compliance.
              <br />
              Reimagining Governance.
            </h1>

            <p className="about-hero__subtitle">
              Finsentsis OS was founded with a mission to make regulatory
              compliance intelligent, autonomous, and global.
            </p>
          </div>
        </div>
      </section>

      {/* COMBINED SECTION */}
      <section className="about-content-section">
        <CorePhilosophy />
        <WhyWeExist />
      </section>

      {/* FOOTER */}
      <Footer />

      {/* STYLE LAST */}
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");


        #root, .App {
  background: #000;
}

    .about-hero {
  position: relative;
  width: 100%;
  min-height: 820px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-family: "Inter", sans-serif;
  color: #fff;
  overflow: hidden;
   margin-bottom: 40px;

    /* 👇 THIS creates the curved bottom */
    
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;

  background:
    radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 50%, #000 100%),
    radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,0,0,0.5) 0%, transparent 100%),
    linear-gradient(180deg, #020302 0%, #000000 100%);
}



.hero-beam-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: radial-gradient(
    ellipse 89% 75% at 13% 100%,
    #9aff2e 0%,
    rgba(154, 255, 46, 0.5) 25%,
    rgba(154, 255, 46, 0.2) 52%,
    transparent 70%
  );
  z-index: 0;
  pointer-events: none;
}




.hero-beam-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45%;
  height: 100%;
  background: radial-gradient(
    ellipse 89% 75% at 87% 100%,
    #9aff2e 0%,
    rgba(154, 255, 46, 0.5) 25%,
    rgba(154, 255, 46, 0.2) 52%,
    transparent 70%
  );
  z-index: 0;
  pointer-events: none;
}



.hero-glow {
  position: absolute;
  top: -20%;
  width: 50%;
  height: 50%;
  pointer-events: none;
  z-index: 1;
  filter: blur(80px);
  opacity: 0.4;
}

/* 🔹 TOP LEFT */
.hero-glow-left {
  left: -10%;
  background: radial-gradient(
    circle at 30% 30%,
    #9aff2e 30%,
    rgba(154, 255, 46, 0.45) 40%,
    rgba(154, 255, 46, 0.25) 30%,
    transparent 60%
  );
}

/* 🔹 TOP RIGHT */
.hero-glow-right {
  right: -10%;
  background: radial-gradient(
    circle at 70% 30%,
    #9aff2e 30%,
    rgba(154, 255, 46, 0.45) 40%,
    rgba(154, 255, 46, 0.25) 30%,
    transparent 60%
  );
}





        .about-hero__inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1512px;
          margin: 0 auto;
          padding: 170px 24px 0;
        }

        .about-hero__content {
          max-width: 1265px;
          margin: 0 auto;
          text-align: center;
          margin-top: 40px;
        }

        .about-hero__title {
          font-size: 80px;
          font-weight: 500;
          line-height: 96%;
          margin: 0;
        }

        .about-hero__subtitle {
          max-width: 613px;
          margin: 32px auto 0;
          font-size: 20px;
          line-height: 138%;
          color: rgba(255, 255, 255, 0.9);
        }

        .about-content-section {
          width: 100%;
          background: #000;
        }

        @media (max-width: 1024px) {
          .about-hero__title {
            font-size: 56px;
          }

          .about-hero__subtitle {
            font-size: 18px;
          }
        }

        @media (max-width: 768px) {
          .about-hero__title {
            font-size: 40px;
          }

          .about-hero__subtitle {
            font-size: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default About;
