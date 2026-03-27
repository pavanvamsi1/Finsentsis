import React from "react";
import glowLine from "../../assets/glowline.png";

const philosophyCards = [
  {
    title: "Our Mission",
    text: "To empower enterprises with AI-driven compliance intelligence that adapts in real-time to global regulatory changes, eliminating manual processes and reducing risk across all jurisdictions",
  },
  {
    title: "Our Vision",
    text: "A world where compliance is autonomous, transparent, and intelligent—where organizations can confidently operate globally without the fear of regulatory gaps or missed obligations.",
  },
];

const valueCards = [
  {
    title: "Innovation",
    text: "Leveraging cutting-edge AI and automation to solve the most complex compliance challenges.",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L6 13h5l-1 9 8-12h-5V2Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Precision",
    text: "Delivering accurate, audit-ready compliance with zero tolerance for regulatory gaps.",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Trust",
    text: "Building enterprise-grade security and transparency into every layer of our platform.",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Global Impact",
    text: "Supporting organizations across all jurisdictions with localized compliance intelligence.",
    icon: (
      <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" />
      </svg>
    ),
  },
];

export default function CorePhilosophy() {
  return (
    <div
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    backgroundColor: "#000", 
        background: `
          linear-gradient(
            180deg,
            rgba(180,255,60,0.75) 0%,
            rgba(154,255,46,0.35) 8%,
            rgba(154,255,46,0.15) 16%,
            rgba(10,12,10,0.9) 28%,
            #050505 50%,
            #060606 75%,
            #070807 100%
          )
        `,
        WebkitMaskImage: `linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)`,
        maskImage: `linear-gradient(90deg, transparent 0%, black 15%, black 85%, transparent 100%)`,
      }}
    >

      {/* TOP CENTER GLOW */}
<div aria-hidden style={{
  position: "absolute",
  top: "-300px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "1700px",
  height: "500px",
  background: "radial-gradient(ellipse at 50% 40%, #9AFF2E 0%, rgba(154,255,46,0.6) 40%, transparent 70%)",
  filter: "blur(80px)",
  pointerEvents: "none",
  zIndex: 4,
}} />



      {/* DARK VIGNETTE */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none",
        background:
          "radial-gradient(circle at 50% 40%, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.8) 45%, #111111 100%)",
      }} />

      {/* GRID */}
      <div aria-hidden style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: "65%",
        zIndex: 3, pointerEvents: "none",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.22) 5px, transparent 2px)," +
          "linear-gradient(90deg, rgba(255,255,255,0.22) 5px, transparent 2px)",
        backgroundSize: "90px 90px",
        WebkitMaskImage:
          "linear-gradient(180deg, black 0%, black 20%, rgba(0,0,0,0.6) 50%, transparent 80%)," +
          "radial-gradient(ellipse 70% 70% at 50% 30%, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.7) 55%, black 80%)",
        WebkitMaskComposite: "destination-in",
        maskImage:
          "linear-gradient(180deg, black 0%, black 20%, rgba(0,0,0,0.6) 50%, transparent 80%)," +
          "radial-gradient(ellipse 70% 70% at 50% 30%, transparent 0%, transparent 15%, rgba(0,0,0,0.3) 35%, rgba(0,0,0,0.7) 55%, black 80%)",
        maskComposite: "intersect",
      } as React.CSSProperties} />

      {/* BEAMS — absolutely positioned across the whole component */}
      <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 5, pointerEvents: "none", overflow: "hidden" }}>
        {/* LEFT BEAMS */}
        <img src={glowLine} style={{ position: "absolute", bottom: "180px", left: "-380px", width: "1100px", transform: "rotate(75deg)", filter: "blur(6px)", opacity: 1 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "160px", left: "-340px", width: "1100px", transform: "rotate(75deg)", filter: "blur(280px)", opacity: 0.55 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "140px", left: "-300px", width: "1100px", transform: "rotate(75deg)", filter: "blur(320px)", opacity: 0.35 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "120px", left: "-260px", width: "1100px", transform: "rotate(75deg)", filter: "blur(160px)", opacity: 0.25 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "100px", left: "-220px", width: "1100px", transform: "rotate(75deg)", filter: "blur(200px)", opacity: 0.15 }} />
        {/* RIGHT BEAMS */}
        <img src={glowLine} style={{ position: "absolute", bottom: "180px", right: "-380px", width: "1100px", transform: "rotate(-75deg) scaleX(-1)", filter: "blur(6px)", opacity: 1 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "160px", right: "-340px", width: "1100px", transform: "rotate(-75deg) scaleX(-1)", filter: "blur(280px)", opacity: 0.55 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "140px", right: "-300px", width: "1100px", transform: "rotate(-75deg) scaleX(-1)", filter: "blur(320px)", opacity: 0.35 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "120px", right: "-260px", width: "1100px", transform: "rotate(-75deg) scaleX(-1)", filter: "blur(160px)", opacity: 0.25 }} />
        <img src={glowLine} style={{ position: "absolute", bottom: "100px", right: "-220px", width: "1100px", transform: "rotate(-75deg) scaleX(-1)", filter: "blur(200px)", opacity: 0.15 }} />
      </div>

      {/* ── SINGLE UNIFIED CONTENT WRAPPER ── */}
      <div style={{ position: "relative", zIndex: 10, padding: "80px 40px 88px" }}>

        {/* Green glows */}
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "30%",
          width: "340px", height: "340px", transform: "translateX(-50%)",
          background: "rgba(180,255,60,1.00)", filter: "blur(80px)",
          borderRadius: "50%", pointerEvents: "none", zIndex: 1,
        }} />
        <div aria-hidden style={{
          position: "absolute", left: "50%", top: "32%",
          width: "140px", height: "140px", transform: "translateX(-50%)",
          background: "rgba(210,255,80,1.00)", filter: "blur(28px)",
          borderRadius: "50%", pointerEvents: "none", zIndex: 1,
        }} />

        {/* LEFT RECTANGLE */}
        <div style={{
          position: "absolute",
          width: "422px", height: "357px",
          left: "-150px", top: "450px",
          borderRadius: "20px",
          border: "0.5px solid rgba(255,255,255,0.5)",
          pointerEvents: "none", zIndex: 5,
        }} />

        {/* RIGHT RECTANGLE */}
        <div style={{
          position: "absolute",
          width: "422px", height: "357px",
          right: "-159px", top: "450px",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.5)",
          pointerEvents: "none", zIndex: 5,
        }} />

        {/* ── Core Philosophy ── */}
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1100px", margin: "20px auto" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{
              marginTop: "86px",
              fontFamily: "Inter Display, sans-serif",
              fontSize: "55px", fontWeight: 600,
              lineHeight: "82.5px", letterSpacing: "0px",
              textAlign: "center", color: "#FFFFFF",
            }}>
              Our Core Philosophy
            </h2>
            <p style={{
              marginTop: "16px",
              maxWidth: "745px",
              marginLeft: "auto", marginRight: "auto",
              fontFamily: "Inter Display, sans-serif",
              fontSize: "20px", fontWeight: 400,
              lineHeight: "20px", letterSpacing: "0px",
              textAlign: "center", color: "rgba(255,255,255,0.7)",
            }}>
              Empower enterprises with autonomy so compliance never feels like a burden again.
            </p>
          </div>

          <div style={{
            position: "relative", maxWidth: "780px", margin: "64px auto 0",
            display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap",
          }}>
            {philosophyCards.map((card) => (
              <article key={card.title} style={{
                flex: "1 1 300px",
                maxWidth: "422px",
                height: "357px",
                borderRadius: "25px",
                position: "relative",
                overflow: "hidden",
                border: "1px solid transparent",
                background: `
                  linear-gradient(#111111, #111111) padding-box,
                  linear-gradient(180deg, #111111 0%, #FFFFFF -50%, #111111 100%) border-box
                `,
                padding: "36px 28px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              }}>
                <div aria-hidden style={{
                  position: "absolute", inset: 0, borderRadius: "12px",
                  background: "radial-gradient(circle at 50% 100%, rgba(154,255,46,0.18), transparent 40%)",
                }} />
                <h3 style={{
                  position: "relative",
                  margin: 0,
                  fontFamily: "Inter, sans-serif",
                  fontSize: "24px", fontWeight: 700,
                  lineHeight: "36px", letterSpacing: "0px",
                  textAlign: "left", color: "#9AFF2E",
                  top: "30px",
                }}>
                  {card.title}
                </h3>
                <p style={{
                  marginTop: "52px",
                  width: "327px",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "18px", fontWeight: 500,
                  lineHeight: "27px", color: "#FFFFFF",
                  textAlign: "left",
                }}>
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── Core Values (seamlessly continues below) ── */}
        <div style={{ position: "relative", zIndex: 2 }}>

          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "170px" }}>
            <span style={{
              width: "300px", height: "36px",
              display: "flex", alignItems: "center", justifyContent: "center",
              borderRadius: "20.37px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(17,17,17,0.28)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset",
            }}>
              <span style={{
                width: "250px", height: "23px",
                fontFamily: "Inter Display, sans-serif",
                fontSize: "15px", fontWeight: 400,
                lineHeight: "23px", letterSpacing: "0",
                textAlign: "center",
                backgroundImage: "linear-gradient(90deg, #989898, #EAEAEA, #999999)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                whiteSpace: "nowrap",
              }}>
                AI-powered Autonomous Compliance
              </span>
            </span>
          </div>

          {/* Heading */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <h3 style={{
              margin: 0, height: "66px",
              fontFamily: "Inter Display, sans-serif",
              fontSize: "55px", fontWeight: 500,
              lineHeight: "66px", letterSpacing: "0",
              color: "#FFFFFF",
            }}>
              Finsentsis Core Value
            </h3>
            <p style={{
              margin: "25px auto 0",
              width: "690px", height: "56px",
              fontFamily: "Inter Display, sans-serif",
              fontSize: "20px", fontWeight: 400,
              lineHeight: "28px", letterSpacing: "0",
              textAlign: "center", color: "#999999",
            }}>
              From tax and payroll laws to ESG regulations and labor standards everything
              runs autonomously through the Finsentsis engine.
            </p>
          </div>

          {/* Value Cards */}
          <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
            <div style={{
              marginTop: "120px",
              display: "grid",
              gridTemplateColumns: "repeat(4, 336px)",
              justifyContent: "center",
              gap: "16px",
            }}>
              {valueCards.map((card) => (
                <article key={card.title} style={{
                  width: "336px",
                  height: "366px",
                  borderRadius: "20px",
                  transform: "translateY(40px)",
                  border: "2px solid transparent",
                  background: `
                    linear-gradient(#111111, #111111) padding-box,
                    linear-gradient(180deg, #111111 0%, #FFFFFF 120%, #111111 100%) border-box
                  `,
                  padding: "24px 24px 32px",
                  position: "relative",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.08) inset, 0 10px 30px rgba(0,0,0,0.45)",
                  display: "flex",
                  flexDirection: "column",
                  isolation: "isolate",
                  overflow: "hidden",
                }}>
                  <div style={{
                    position: "absolute", inset: 0, borderRadius: "20px", overflow: "hidden",
                    pointerEvents: "none",
                  }}>
                    <div aria-hidden style={{
                      position: "absolute", inset: 0,
                      background: "radial-gradient(circle at 50% 0%, rgba(113,81,81,0.06), transparent 34%)",
                    }} />
                    <div aria-hidden style={{
                      position: "absolute", top: "-80%", left: "-10%",
                      width: "180px", height: "640px", transform: "rotate(-60deg)",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent)",
                      filter: "blur(18px)",
                    }} />
<div
  aria-hidden
  style={{
    position: "absolute",
    inset: 0,
    pointerEvents: "none",

    background:
      /* 🔹 LEFT BOTTOM CORNER */
      "radial-gradient(ellipse 40% 100% at 0% 100%, " +
      "rgba(154,255,46,0.45) 0%, " +
      "rgba(154,255,46,0.48) 40%, " +
      "transparent 70%)," +

      /* 🔹 RIGHT BOTTOM CORNER */
      "radial-gradient(ellipse 60% 50% at 100% 100%, " +
      "rgba(154,255,46,0.45) 0%, " +
      "rgba(154,255,46,0.48) 40%, " +
      "transparent 70%)," +

      /* 🔹 CENTER SOFT GLOW */
      "radial-gradient(ellipse 70% 40% at 50% 110%, " +
      "rgba(154,255,46,0.35) 0%, " +
      "rgba(154,255,46,0.42) 35%, " +
      "transparent 75%)",

    filter: "blur(20px)",
  }}
/>
                  </div>

                  <div style={{
                    width: "64px", height: "64px", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "radial-gradient(circle at 30% 30%, #3a3a3a 0%, #121212 60%, #000000 100%)",
                    border: "0.5px solid rgba(255,255,255,0.25)",
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.15), 0 0 10px rgba(154,255,46,0.25)",
                    position: "relative",
                    flexShrink: 0,
                  }}>
                    <div style={{
                      position: "absolute", inset: 0, borderRadius: "50%",
                      background: "radial-gradient(circle at 70% 30%, rgba(154,255,46,0.25), transparent 60%)",
                    }} />
                    <div style={{
                      position: "relative", zIndex: 1, color: "#9AFF2E",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {card.icon}
                    </div>
                  </div>

                  <h4 style={{
                    position: "relative", marginTop: "60px", left: "10px",
                    width: "259px", height: "36px",
                    fontFamily: "Inter, sans-serif", fontSize: "24px",
                    fontWeight: 700, lineHeight: "36px", letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}>{card.title}</h4>

                  <p style={{
                    position: "relative", marginTop: "40px", left: "10px",
                    width: "259px", height: "81px",
                    fontFamily: "Inter, sans-serif", fontSize: "18px",
                    fontWeight: 400, lineHeight: "27px", letterSpacing: "0px",
                    color: "#FFFFFF",
                  }}>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}