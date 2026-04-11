import glowLine from "../../assets/glowline.png";
import { Link } from "react-router-dom";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import Footer from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";

export default function Contact() {
  return (
    <div className="page min-h-screen relative overflow-hidden bg-[#111111] text-white">

      <Navbar/>

      <section className="contact-cta-section">

        {/* TOP WHITE GLOW RAYS */}
<div className="sun-rays">
  <span className="ray ray1"></span>  
  <span className="ray ray2"></span>
  <span className="ray ray3"></span>
  <span className="ray ray4"></span>
  <span className="ray ray5"></span>
</div>

        {/* GLOW BACKGROUND */}

        <img src={glowLine} className="cta-glow-line glow-left glow-layer1" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer2" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer3" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer4" />
        <img src={glowLine} className="cta-glow-line glow-left glow-layer5" />

        <img src={glowLine} className="cta-glow-line glow-right glow-layer1" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer2" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer3" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer4" />
        <img src={glowLine} className="cta-glow-line glow-right glow-layer5" />


        <div className="relative z-20 max-w-[1080px] mx-auto px-[22px] pt-[170px]">

          {/* CONTACT HEADER */}

          <div className="text-center mb-[28px]">

            <h1 className="text-[56px] md:text-[80px] font-medium leading-[0.96] tracking-[-0.02em] mb-[24px]">
              Get in Touch with us
            </h1>

            <p className="max-w-[770px] mx-auto text-[16px] md:text-[20px] text-white/60 leading-[1.38]">
              Have questions about Finsentsis? Our team is here to help.
              Reach out and we’ll get back to you as soon as possible.
            </p>

          </div>

          {/* CONTACT GRID */}

          <div className="grid md:grid-cols-[360px_1fr] gap-[20px] mb-[140px] mt-[100px]">

            <ContactInfo />
            <ContactForm />

          </div>


          {/* CTA */}

          <div className="cta-content mt-[100px] md:mt-[180px] mb-[100px] md:mb-[180px]">

            <h2 className="cta-heading">
              Let's Build <br />
              The Future <br />
              Together
            </h2>

            <p className="cta-sub">
              Let's build the future of intelligent compliance together.
            </p>

            <div className="cta-buttons">

              <a href="#" className="btn-primary">
                Start free trial ↗︎
              </a>

              <Link to="/Requestademo" className="btn-secondary">
                Schedule Demo ↗
              </Link>

            </div>

          </div>

        </div>

      </section>

      <Footer />

<style>{`

/* MAIN SECTION */

.contact-cta-section{
  position:relative;
  overflow:hidden;
  padding-bottom:50px;
  z-index:0;
}




  /* Sun Rays Effect */
          .sun-rays {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 550px;
  pointer-events: none;
  overflow: hidden;
  z-index: -2;
}  
  
.ray {
  position: absolute;
  top: -500px;

  width: 100px;
  height: 1950px;

  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0.13) 0%,
    rgba(255,255,255,0.38) 40%,
    rgba(255,255,255,0.33) 60%,
    transparent 90%
  );

  filter: blur(48px);
  transform-origin: top;

  left: var(--left);
  transform: rotate(var(--angle));
  opacity: var(--opacity, 1);

  mix-blend-mode: screen; 
}

/* Position and rotate rays to fan out across the hero section */

.ray1 { --left: 30%; --angle: 30deg; --opacity: 0.3; }
.ray2 { --left: 50%; --angle: 28deg; --opacity: 0.6; }
.ray3 { --left: 70%; --angle: 28deg; --opacity: 0.9; }
.ray4 { --left: 90%; --angle: 28deg;  --opacity: 1.2; }
.ray5 { --left: 110%; --angle: 25deg; --opacity: 1.5; }



  .sun-rays {
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0,0,0,1) 0%,
    rgba(0,0,0,0.9) 30%,
    rgba(0,0,0,0.5) 60%,
    transparent 90%
  );
}




/* GLOW */

.cta-glow-line{
  position:absolute;
  width:925px;
  pointer-events:none;
  mix-blend-mode:screen;
  opacity:0.6;
  transform:scaleX(1.3);
  z-index:-1;
  

  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 25%,
    black 35%,
    transparent 100%
  );
}

/* LAYERS */

.glow-layer1{
  filter: blur(6px);
  opacity:1;
}

.glow-layer2{
  filter: blur(280px);
  opacity:0.25;
}

.glow-layer3{
  filter: blur(320px);
  opacity:0.15;
}

.glow-layer4{
  filter: blur(160px);
  opacity:0.25;
}

.glow-layer5{
  filter: blur(200px);
  opacity:0;
}

/* LEFT */
.glow-left{
width: 1130px
}

.glow-left.glow-layer1 { bottom:150px; left:-380px; transform:rotate(-5deg); }
.glow-left.glow-layer2 { bottom:150px; left:-340px; transform:rotate(-5deg); }
.glow-left.glow-layer3 { bottom:180px; left:-300px; transform:rotate(-5deg); }
.glow-left.glow-layer4 { bottom:210px; left:-260px; transform:rotate(-5deg); }
.glow-left.glow-layer5 { bottom:240px; left:-220px; transform:rotate(-5deg); }

/* RIGHT */

.glow-right.glow-layer1 { bottom:-120px; right:-380px; transform:rotate(-82deg) scaleX(-1); }
.glow-right.glow-layer2 { bottom:-150px; right:-340px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer3 { bottom:-180px; right:-300px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer4 { bottom:-210px; right:-260px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer5 { bottom:-240px; right:-220px; transform:rotate(22deg) scaleX(-1); }


/* CTA TEXT */

.cta-content{
  text-align:center;
  position:relative;
  z-index:2;
}

.cta-heading{
  font-family:'inter',sans-serif;
  font-size:clamp(44px,8vw,100px);
  font-weight:700;
  color:#fff;
  line-height:1;
  letter-spacing:-0.02em;
  margin-bottom:20px;
}

.cta-sub{
  font-size:14px;
  color:rgba(255,255,255,0.5);
  max-width:440px;
  margin:0 auto 36px;
}

/* BUTTONS */

.cta-buttons{
  display:flex;
  justify-content:center;
  gap:12px;
  flex-wrap:wrap;
}

.btn-primary{
  padding:12px 24px;
  border-radius:999px;
  background:#9AFF2E;
  color:#0a0a0a;
  font-weight:600;
  text-decoration:none;
}

.btn-secondary{
  padding:12px 24px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,0.18);
  color:#fff;
  text-decoration:none;
}

.btn-secondary:hover{
  border-color:rgba(255,255,255,0.4);
}

`}</style>

    </div>
  );
}
