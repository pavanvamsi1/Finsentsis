import React from "react";

import Footer from "../../components/Home/Footer";
import Cta from "../../components/Home/Cta";
import Navbar from "../../components/Home/Navbar";


import BarChart      from "../../assets/Home/Bar Chart.png";
import GlowImg       from "../../assets/Home/Glow.png";
import MinimizeRisk  from "../../assets/Home/Minimize Risk.png";
import Dollar        from "../../assets/Home/dollar.png";
import Folder        from "../../assets/Home/Folder.png";
import GradientLines from "../../assets/Home/Gradient Lines.png";
import Regulatory    from "../../assets/Home/Regulatory Intelligence.png";
import Unified       from "../../assets/Home/Unified Visibility Control.png";
import Globe         from "../../assets/Home/3D Globe.png";
import Compliance    from "../../assets/Home/Compliance Monitoring.png";

const G = `
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

.btn-hero {
  background: #B1FC5A; border-radius: 56px; padding: 12px 48px;
  font-size: 16px; font-weight: 600; color: #1E1E1E; border: none; cursor: pointer;
  font-family: 'Inter', sans-serif; transition: opacity .2s, transform .2s;
  display: inline-flex; align-items: center; gap: 10px;
}
.btn-hero:hover { opacity: .9; transform: translateY(-1px); }

.eng-card {
  background: #1E1E1E; border: 1.147px solid #383838; border-radius: 10px;
  overflow: hidden; transition: border-color .3s;
}
.eng-card:hover { border-color: rgba(154,255,46,0.25); }

.why-card {
  background: #1E1E1E; border: 1.147px solid #383838; border-radius: 9.56px;
  overflow: hidden; display: flex; flex-direction: column; transition: border-color .3s;
}
.why-card:hover { border-color: rgba(154,255,46,0.25); }

.stat-card {
  background: #1E1E1E;
  border: 1.6px solid #383838;
  border-radius: 12.611px;
  padding: 28px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex: 1;
}
.stat-label {
  font-size: 28px; font-weight: 500; line-height: 120%;
  color: #999999; font-family: 'Inter', sans-serif;
  max-width: 160px;
}
.stat-num {
  font-size: 88px; font-weight: 600; line-height: 1;
  font-family: 'Inter', sans-serif;
  background:
    linear-gradient(227.03deg, rgba(255,255,255,0.63) 8.85%, rgba(154,255,46,0.63) 33.02%, rgba(30,30,30,0.63) 74.11%),
    linear-gradient(225.89deg, #9AFF2E 8.46%, rgba(154,255,46,0) 76.44%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  filter: drop-shadow(0 0 28px rgba(154,255,46,0.4));
}

.sec-pill {
  background: rgba(17,17,17,0.28); border-radius: 20.369px;
  padding: 8px 24px; display: inline-block;
  font-size: 16px; font-weight: 400; color: #EAEAEA; font-family: 'Inter', sans-serif;
}

.hero-badge-outer {
  background: #111111; border-radius: 20.369px;
  display: inline-block; padding: 6px 22px; margin-bottom: 28px;
}
.hero-badge {
  font-size: 15px; font-weight: 400; font-family: 'Inter', sans-serif;
  background: linear-gradient(90deg, #989898 0%, #EAEAEA 25.08%, #999999 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}

.dg {
  pointer-events: none; position: absolute; border-radius: 50%;
  background: #9AFF2E;
  transform: matrix(0.82, -0.57, 0.82, 0.57, 0, 0);
}

          .footer {
  position: relative;
  z-index: 2;
}
  
`;

const BhavithaHomepage: React.FC = () => (
  <>
    <style dangerouslySetInnerHTML={{ __html: G }} />

    <div style={{ background: "#111111" }}>
      <Navbar/>

      {/* ══════════════════════════════════════════════════
          UNIFIED SINGLE PAGE — all content flows together
      ══════════════════════════════════════════════════ */}

      {/* ── HERO ── */}
      <div style={{
        position: "relative", minHeight: "100vh",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", 
        textAlign: "center", padding: "100px 60px 80px", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(154,255,46,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div className="hero-badge-outer" style={{ position: "relative", zIndex: 1 }}>
          <span className="hero-badge">AI-powered Autonomous Compliance</span>
        </div>

        <h1 style={{
          fontFamily: "'Inter',sans-serif", fontWeight: 500, lineHeight: "99.14%",
          fontSize: "clamp(44px,5vw,75px)", maxWidth: "1094px", color: "#fff",
          marginBottom: "36px", position: "relative", zIndex: 1,
        }}>
          Finsentsis OS. Where Compliance<br />Meets Autonomy.
        </h1>

        <p style={{
          fontSize: "16px", fontWeight: 400, lineHeight: "150%", color: "#ffffff",
          maxWidth: "778px", marginBottom: "48px", position: "relative", zIndex: 1,
          fontFamily: "'Inter',sans-serif",
        }}>
          An AI-powered Autonomous Compliance &amp; Governance Operating System that helps enterprises
          simplify global regulatory, tax, and ESG obligations — through real-time intelligence and automation.
        </p>

        <button className="btn-hero" style={{ position: "relative", zIndex: 1 }}>Explore the OS ↗</button>

        <div style={{ marginTop: "72px", width: "100%", maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr", gap: "14px", alignItems: "flex-start" }}>
            <div style={{ borderRadius: "40px", overflow: "hidden", opacity: 0.32, transform: "scale(0.9) translateX(12px)", filter: "blur(2px)" }}>
              <img src={Compliance} alt="" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ borderRadius: "40px", overflow: "hidden", boxShadow: "0 8px 80px rgba(0,0,0,0.8), 0 0 50px rgba(154,255,46,0.07)", position: "relative", zIndex: 2 }}>
              <img src={Compliance} alt="Dashboard" style={{ width: "100%", display: "block" }} />
            </div>
            <div style={{ borderRadius: "40px", overflow: "hidden", opacity: 0.32, transform: "scale(0.9) translateX(-12px)", filter: "blur(2px)" }}>
              <img src={Compliance} alt="" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "130px", background: "linear-gradient(to top,#111111,transparent)", pointerEvents: "none" }} />
        </div>
      </div>

      {/* ── INTRO TEXT ── */}
      <div style={{ padding: "80px 60px", maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        <img src={GradientLines} alt="" style={{ position: "absolute", right: 0, top: 0, width: "38%", opacity: 0.5, pointerEvents: "none" }} />
        <p style={{
          fontSize: "clamp(22px,2.8vw,40px)", fontWeight: 500, lineHeight: "120%",
          color: "#EAEAEA", maxWidth: "1272px", fontFamily: "'Inter',sans-serif",
        }}>
          Finsentsis OS transforms how organizations handle compliance and governance by merging AI,
          data intelligence, and automation into one unified platform. From tax and payroll laws to
          ESG regulations and{" "}
          <span style={{ color: "#9AFF2E", textShadow: "0 0 18px rgba(154,255,46,0.4)" }}>labor standards</span>
          {" "}everything runs autonomously through the Finsentsis engine.
        </p>
      </div>

      {/* ── ONE UNIFIED ENGINE ── */}
      <div style={{ padding: "60px 60px 80px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 style={{
            fontFamily: "'Inter',sans-serif", fontWeight: 500,
            fontSize: "clamp(32px,3.6vw,55px)", lineHeight: "120%", color: "#fff", marginBottom: "16px",
          }}>
            One Unified Engine for Global Compliance.
          </h2>
          <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: "120%", color: "#999999", maxWidth: "727px", margin: "0 auto", fontFamily: "'Inter',sans-serif" }}>
            From tax and payroll laws to ESG regulations and labor standards everything runs autonomously
            through the Finsentsis engine.
          </p>
        </div>

        {/* Row 1 */}
        <div style={{ display: "grid", gridTemplateColumns: "5fr 8fr", gap: "12px", marginBottom: "12px" }}>
          <div className="eng-card" style={{ minHeight: "416px", display: "flex", flexDirection: "column" }}>
            <div style={{ padding: "28px 28px 16px" }}>
              <p style={{ fontSize: "29.72px", fontWeight: 500, lineHeight: "120%", color: "#fff", marginBottom: "10px", fontFamily: "'Inter',sans-serif" }}>Audit-Ready, On Demand</p>
              <p style={{ fontSize: "19.81px", fontWeight: 400, lineHeight: "120%", color: "#999999", fontFamily: "'Inter',sans-serif" }}>Auto-generated compliant reports standardized for regulators and auditors.</p>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden", padding: "0 20px" }}>
              <img src={Folder} alt="Folder" style={{ width: "70%", maxWidth: "240px", objectFit: "contain", filter: "drop-shadow(0 0 14px rgba(154,255,46,0.2))" }} />
            </div>
          </div>
          <div className="eng-card" style={{ minHeight: "416px", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
            <div style={{ padding: "28px 20px 28px 28px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <p style={{ fontSize: "29.72px", fontWeight: 500, lineHeight: "120%", color: "#fff", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Autonomous by Design</p>
              <p style={{ fontSize: "19.81px", fontWeight: 400, lineHeight: "120%", color: "#999999", fontFamily: "'Inter',sans-serif" }}>Self-managing compliance engine that adapts to regulatory changes in real-time.</p>
            </div>
            <div style={{ position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(37,37,37,0) 0%,rgba(154,255,46,0.38) 100%)", pointerEvents: "none", zIndex: 0 }} />
              <div style={{ position: "absolute", top: "-30%", left: "-30%", width: "80%", height: "200%", background: "#9AFF2E", opacity: 0.12, filter: "blur(90px)", transform: "rotate(-75deg)", pointerEvents: "none", zIndex: 0 }} />
              <img src={Globe} alt="3D Globe" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", position: "relative", zIndex: 1 }} />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div style={{ display: "grid", gridTemplateColumns: "8fr 5fr", gap: "12px" }}>
          <div className="eng-card" style={{ minHeight: "416px", display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", overflow: "hidden" }}>
              <img src={Regulatory} alt="Regulatory" style={{ width: "100%", maxWidth: "300px", objectFit: "contain", filter: "drop-shadow(0 0 20px rgba(154,255,46,0.25))" }} />
            </div>
            <div style={{ padding: "28px 28px 28px 20px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p style={{ fontSize: "29.72px", fontWeight: 500, lineHeight: "120%", color: "#fff", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>Real-Time Regulatory Intelligence</p>
              <p style={{ fontSize: "19.81px", fontWeight: 400, lineHeight: "120%", color: "#999999", fontFamily: "'Inter',sans-serif" }}>AI-powered monitoring of global laws and policy updates across all jurisdictions.</p>
            </div>
          </div>
          <div className="eng-card" style={{ minHeight: "416px", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", overflow: "hidden" }}>
              <img src={Unified} alt="Unified" style={{ width: "95%", maxWidth: "340px", objectFit: "contain", filter: "drop-shadow(0 0 14px rgba(154,255,46,0.2))" }} />
            </div>
            <div style={{ padding: "0 28px 28px" }}>
              <p style={{ fontSize: "29.72px", fontWeight: 500, lineHeight: "120%", color: "#fff", marginBottom: "10px", fontFamily: "'Inter',sans-serif" }}>Unified Visibility &amp; Control</p>
              <p style={{ fontSize: "19.81px", fontWeight: 400, lineHeight: "120%", color: "#999999", fontFamily: "'Inter',sans-serif" }}>Single dashboard for ESG, tax, labor, and data compliance metrics.</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
          <div className="sec-pill">Enterprise-grade security · Encryption at rest &amp; in transit · Role-based access controls</div>
        </div>
      </div>

      {/* ── WHY CHOOSE ── */}
      <div style={{ padding: "60px 60px 80px", maxWidth: "1400px", margin: "0 auto", position: "relative", overflow: "hidden" }}>
        <div className="dg" style={{ width: "1860px", height: "92px", left: "-26px", top: "0", filter: "blur(122px)", opacity: 0.75 }} />
        <div className="dg" style={{ width: "1860px", height: "18px", left: "-8px", top: "22px", filter: "blur(30px)" }} />

        <div style={{ textAlign: "center", marginBottom: "56px", position: "relative", zIndex: 1 }}>
          <div className="sec-pill" style={{ marginBottom: "28px" }}>
            Enterprise-grade security · Encryption at rest &amp; in transit · Risk-based access controls
          </div>
          <h2 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "clamp(32px,3.6vw,55px)", lineHeight: "120%", color: "#fff", marginBottom: "16px" }}>
            Why Choose Finsentsis OS?
          </h2>
          <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: "140%", color: "#999999", maxWidth: "773px", margin: "0 auto", fontFamily: "'Inter',sans-serif" }}>
            From tax and payroll laws to ESG regulations and labor standards everything runs autonomously
            through the Finsentsis engine.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", position: "relative", zIndex: 1 }}>
          {[
            { icon: Dollar,       title: "Reduce Compliance Costs", desc: "Automate 80%+ of manual compliance work, eliminate tool fragmentation, and optimize your compliance budget." },
            { icon: MinimizeRisk, title: "Minimize Risk",           desc: "Real-time monitoring and proactive alerts ensure you never miss a regulatory change or compliance deadline." },
            { icon: GlowImg,      title: "Gain Visibility",         desc: "Complete transparency into your compliance posture across all jurisdictions, regulations, and business units." },
            { icon: BarChart,     title: "Scale Globally",          desc: "Expand into new markets with confidence. Finsentsis handles compliance complexity across 190+ countries." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="why-card">
              <div style={{ height: "277px", background: "#1E1E1E", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                <img src={icon} alt={title} style={{ maxWidth: "85%", maxHeight: "230px", objectFit: "contain", filter: "drop-shadow(0 0 16px rgba(154,255,46,0.25))" }} />
              </div>
              <div style={{ borderTop: "1.213px solid #383838", padding: "22px 22px 26px" }}>
                <p style={{ fontSize: "22.953px", fontWeight: 500, lineHeight: "120%", color: "#fff", marginBottom: "12px", fontFamily: "'Inter',sans-serif" }}>{title}</p>
                <p style={{ fontSize: "15.302px", fontWeight: 400, lineHeight: "120%", color: "#999999", fontFamily: "'Inter',sans-serif" }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── TRUSTED BY LEADING ENTERPRISES ── */}
      <div style={{ padding: "60px 60px 80px", position: "relative", overflow: "hidden" }}>
        <div className="dg" style={{ width: "1860px", height: "92px", left: "-1057px", top: "200px", filter: "blur(122px)", opacity: 0.65 }} />
        <div className="dg" style={{ width: "1860px", height: "18px", left: "-1039px", top: "222px", filter: "blur(30px)", background: "#E1FFC2" }} />

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px", position: "relative", zIndex: 1 }}>
          <div className="sec-pill">
            Enterprise-grade security · Encryption at rest &amp; in transit · Role-based access controls
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "60px", alignItems: "center",
          maxWidth: "1400px", margin: "0 auto 40px",
          position: "relative", zIndex: 1,
        }}>
          <div>
            <h2 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "clamp(32px,3.6vw,55px)", lineHeight: "120%", color: "#fff", marginBottom: "20px" }}>
              Trusted by Leading Enterprises
            </h2>
            <p style={{ fontSize: "20px", fontWeight: 400, lineHeight: "140%", color: "#999999", maxWidth: "690px", fontFamily: "'Inter',sans-serif" }}>
              From tax and payroll laws to ESG regulations and labor standards everything runs autonomously
              through the Finsentsis engine.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: "-24px", background: "#AFFF5A", filter: "blur(46.65px)", borderRadius: "40px", opacity: 0.1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: "-8px", background: "#DEFFBB", filter: "blur(14.7px)", borderRadius: "40px", opacity: 0.08, pointerEvents: "none" }} />
            <div style={{ borderRadius: "28px", overflow: "hidden", position: "relative", boxShadow: "0 4px 60px rgba(0,0,0,0.5), 0 0 40px rgba(154,255,46,0.06)" }}>
              <img src={Compliance} alt="Compliance Monitoring" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px", maxWidth: "1400px", margin: "0 auto",
          position: "relative", zIndex: 1,
        }}>
          {[
            { label: "Reduce\nCompliance\nCosts", val: "60" },
            { label: "Manual\nwork\neliminated",  val: "80" },
            { label: "Countries\nsupported",      val: "190" },
          ].map(({ label, val }) => (
            <div key={val} className="stat-card">
              <span className="stat-label" style={{ whiteSpace: "pre-line" }}>{label}</span>
              <span className="stat-num">{val}</span>
            </div>
          ))}
        </div>
      </div>

      <Cta />
      <Footer />

    </div>
  </>
);

export default BhavithaHomepage;
