import React from "react";
import TeamGrid from "../../components/Leadership/TeamGrid";
import type { TeamMember } from "../../components/Leadership/TeamCard";
import Footer from "../../components/Home/Footer";
import Navbar from "../../components/Home/Navbar";
import glowLine from "../../assets/glowline.png";

import ushodharImg from "../../assets/Leadership/ushodhar.png";
import vidhiImg from "../../assets/leadership/vidhi.png";
import estherImg from "../../assets/leadership/esther.png";
import karishmaImg from "../../assets/leadership/karishma.png";

/* ─── TEAM DATA ───────────────── */

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ushodhar Raju",
    title: "Founder & CEO",
    subtitle: "Visionary leader driving strategy, innovation, and global growth for Finsentsis OS.",
    description:
      "Leads product vision and enterprise strategy, building AI-powered governance systems that simplify complex regulatory environments. He focuses on scalable architecture, strategic partnerships, and long-term institutional impact.",
    image: ushodharImg,
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Vidhi Vallechha",
    title: "Director – Strategy & Client Relations",
    subtitle: "Driving communication, partnerships, and growth initiatives.",
    description:
      "Plays a key role in stakeholder engagement and business development at Finsentsis. With strong communication and relationship-building skills, she supports client acquisition, ecosystem collaborations, and strategic expansion efforts.",
    image: vidhiImg,
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Esther Rosalin Narmeta",
    title: "Head of Human Resources",
    subtitle: "People, Culture & Organizational Development",
    description:
      "Leads all HR functions at Finsentsis, overseeing talent acquisition, employee engagement, and organizational structure. Ensures strong internal processes, team alignment, and a performance-driven culture that supports the company’s long-term growth and execution excellence.",
    image: estherImg,
    linkedIn: "https://linkedin.com",
  },
  {
    name: "Karishma Shaik",
    title: "Head of Business Development",
    subtitle: "Client Outreach & Strategic Growth",
    description:
      "Leads client acquisition and business outreach initiatives at Finsentsis. Manages LinkedIn engagement, partnership conversations, and meeting coordination with prospective clients. Plays a key role in expanding market presence and building strong business relationships.",
    image: karishmaImg,
    linkedIn: "https://linkedin.com",
  },
];

const TeamPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        color: "#ffffff",
        backgroundColor: "#000",
        position: "relative",
        overflowX: "hidden",
      }}
    >

      {/* ✅ ONE SINGLE SECTION */}
      <section className="main-section">

  <Navbar />

  {/* CONTENT */}
  <div className="relative z-20">

    {/* HEADER */}
    <header className="text-center mt-[170px] pb-12">

  <h1 className="mx-auto max-w-[926px] text-[80px] font-medium leading-[0.96] text-white mb-[24px]">
    Meet the Innovators Behind Finsentsis OS
  </h1>

  <p className="mx-auto max-w-[770px] text-[20px] leading-[1.38] text-white/80">
    Finsentsis OS is led by visionary leaders and compliance experts
    dedicated to transforming how enterprises manage global regulatory obligations.
  </p>

</header>

    {/* TEAM (with margin top like mt) */}
    {/* ✅ CARDS ABOVE */}
  <div className="relative z-10">
    <TeamGrid members={TEAM_MEMBERS} />
  </div>

    {/* CTA */}
    <section className="story-cta-section">


      {/* LEFT */}
      <img src={glowLine} className="cta-glow-line glow-left glow-layer1" />
      <img src={glowLine} className="cta-glow-line glow-left glow-layer2" />
      <img src={glowLine} className="cta-glow-line glow-left glow-layer3" />
      <img src={glowLine} className="cta-glow-line glow-left glow-layer4" />
      <img src={glowLine} className="cta-glow-line glow-left glow-layer5" />

      {/* RIGHT */}
      <img src={glowLine} className="cta-glow-line glow-right glow-layer1" />
      <img src={glowLine} className="cta-glow-line glow-right glow-layer2" />
      <img src={glowLine} className="cta-glow-line glow-right glow-layer3" />
      <img src={glowLine} className="cta-glow-line glow-right glow-layer4" />
      <img src={glowLine} className="cta-glow-line glow-right glow-layer5" />



      {/* TOP RIGHT */}
      <img src={glowLine} className="cta-glow-line glow-top-right glow-layer1" />
      <img src={glowLine} className="cta-glow-line glow-top-right glow-layer2" />
      <img src={glowLine} className="cta-glow-line glow-top-right glow-layer3" />
      <img src={glowLine} className="cta-glow-line glow-top-right glow-layer4" />
      <img src={glowLine} className="cta-glow-line glow-top-right glow-layer5" />

      <div className="relative z-20 max-w-[1355px] mx-auto text-center pt-[50px] pb-[120px]">

        <h2 className="story-heading">
          Our Story
        </h2>

        <p className="story-text">
          Finsentsis OS was founded with a mission to make regulatory compliance intelligent, autonomous, and global. Traditional compliance processes are slow, manual, and fragmented across tools and geographies. Finsentsis OS eliminates this friction through an AI-powered governance engine that adapts to evolving laws and policies in real time.
        </p>

        <p className="story-subtext">
          Our team combines deep compliance expertise with cutting-edge technology to deliver solutions that actually work.We’re <br/>
          working with leading enterprises across financial services, healthcare, technology, and manufacturing to simplify compliance,<br/> 
  reduce costs and minimize risk.
        </p>

        <h3 className="cta-heading">
          Join Our  <br /> Mission
        </h3>

        <p className="cta-sub-large">
          Help us transform how enterprises manage compliance globally. Explore career opportunities with Finsentsis OS.
        </p>

        <div className="cta-buttons">
          
          <a href="/Requestademo" className="btn-secondary">Schedule Demo ↗</a>
        </div>

      </div>
    </section>

  </div>
</section>

      <Footer />

      {/* STYLES */}
      <style>{`

.main-section{
  position:relative;
  overflow:hidden;
}
.cta-section{
  position:relative;
  overflow:hidden;
  
  padding:40px 40px 160px;
  text-align:center;
  background:#0d0d0d;
}

.cta-content{
  margin-top:180px;
  position:relative;
  z-index:1;
}

/* STORY HEADING */
.story-heading {
  font-family: 'Inter Display', sans-serif;
  font-size: 80px;
  font-weight: 500;
  line-height: 1.38;
  color: #ffffff;

  text-align: center;
  margin-bottom: 48px;
}


/* STORY TEXT */
.story-text {
  font-family: 'Inter Display', sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: 1.38;
  color: #ffffff;

  max-width: 1355px;
  margin: 0 auto 48px;

  text-align: center;
}
  

/* STORY SUBTEXT */
.story-subtext {
  font-family: 'Inter Display', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.38;
  color: #999999;

  max-width: 1388px;
  margin: 0 auto 180px;

  text-align: center;
  text-wrap: balance; 
}



/* glow images */
.cta-glow-line{
  position:absolute;
  width:925px;

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

.team-glow-wrapper{
  position:absolute;
  inset:0;
  z-index:0;
  pointer-events:none;
}

/* layer depth */

.glow-layer1{
  filter: blur(6px);
  opacity:1;
}

.glow-layer2{
  filter: blur(280px);
  opacity:0.35;
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


/* LEFT beams */
.glow-left{
width: 1500px
}

/* LEFT beams → CENTERED */
.glow-left.glow-layer1 { top: 38%; left: -380px; transform: rotate(-2deg); }
.glow-left.glow-layer2 { top: 40%; left: -340px; transform: rotate(-2deg); }
.glow-left.glow-layer3 { top: 42%; left: -300px; transform: rotate(-2deg); }
.glow-left.glow-layer4 { top: 44%; left: -260px; transform: rotate(-2deg); }
.glow-left.glow-layer5 { top: 46%; left: -220px; transform: rotate(-2deg); }



/* RIGHT beams */
.glow-right{
width: 1150px
}

/* RIGHT beams */

.glow-right.glow-layer1 { bottom:-210px; right:-380px; transform:rotate(-65deg) scaleX(-1); }
.glow-right.glow-layer2 { bottom:-200px; right:-340px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer3 { bottom:-220px; right:-300px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer4 { bottom:-240px; right:-260px; transform:rotate(22deg) scaleX(-1); }
.glow-right.glow-layer5 { bottom:-260px; right:-220px; transform:rotate(22deg) scaleX(-1); }



/* TOP RIGHT beams */
.glow-top-right{
width: 1800px
}


/* RIGHT beams */

.glow-top-right.glow-layer1 { top:-80px; right:-380px; transform:rotate(-70deg) scaleX(-1); }
.glow-top-right.glow-layer2 { top:-100px; right:-340px; transform:rotate(22deg) scaleX(-1); }
.glow-top-right.glow-layer3 { top:-120px; right:-300px; transform:rotate(22deg) scaleX(-1); }
.glow-top-right.glow-layer4 { top:-140px; right:-260px; transform:rotate(22deg) scaleX(-1); }
.glow-top-right.glow-layer5 { top:-160px; right:-220px; transform:rotate(22deg) scaleX(-1); }



/* gradient overlay to fade out glows at edges */
.cta-section::before{
  content:"";
  position:absolute;
  inset:0;

  background:
    linear-gradient(
      to bottom,
      rgba(13,13,13,0) 0%,
      rgba(13,13,13,0.35) 40%,
      rgba(13,13,13,0.75) 70%,
      rgba(13,13,13,1) 100%
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

.cta-sub-large {
  font-size: 20px;
  line-height: 1.4;
  color: #999999;

  max-width: 773px;
  margin: 0 auto 40px;

  text-align: center;
}

.cta-buttons {
  display: flex; 
  align-items: center; 
  justify-content: center;
  gap: 12px; 
  position: relative; 
  z-index: 1; 
  flex-wrap: wrap;
  margin-bottom: 80px; 
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

`}</style>

    </div>
  );
};

export default TeamPage;
