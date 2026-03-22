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

          background:
            radial-gradient(60% 60% at 50% 40%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 60%, #000 100%),
            linear-gradient(180deg, #020302 0%, #000000 100%);
        }

       /* LEFT BEAM */
.hero-beam-left {
  position: absolute;
  bottom: -50px;
  left: -5%;
  width: 300px;
  height: 600px;
  transform: rotate(35deg);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(154, 255, 46, 0.8) 40%,
    rgba(154, 255, 46, 0.4) 60%,
    transparent 100%
  );
  filter: blur(40px);
  opacity: 0.7;
  z-index: 0;
}

/* RIGHT BEAM */
.hero-beam-right {
  position: absolute;
  bottom: -50px;
  right: -5%;
  width: 300px;
  height: 600px;
  transform: rotate(-85deg);
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(154, 255, 46, 0.8) 40%,
    rgba(154, 255, 46, 0.4) 60%,
    transparent 100%
  );
  filter: blur(40px);
  opacity: 0.7;
  z-index: 0;
}

       

        .about-hero::before {
          left: -10%;
        }

        .about-hero::after {
          right: -10%;
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