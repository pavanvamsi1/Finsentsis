import React from "react";

// New Feature Images
import ai from "../../assets/Features/AI.png";
import audit from "../../assets/Features/Audit.png";
import compliance from "../../assets/Features/Compliance.png";
import copilot from "../../assets/Features/Copilot.png";
import governance from "../../assets/Features/Governance.png";
import marketplace from "../../assets/Features/Marketplace.png";
import policy from "../../assets/Features/Policy.png";
import realestate from "../../assets/Features/Realestate.png";
import risk from "../../assets/Features/Risk.png";

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "radial-gradient(ellipse at 50% 50%, #1E1E1E, #1C1C1C 100%)",
  overflow: "hidden",
};

const imgStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "contain",
};

/* ═══════════════════════════════
   AI Regulatory Layer
═══════════════════════════════ */
export function AIWidget() {
  return (
    <div style={containerStyle}>
      <img src={ai} alt="AI Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Audit Trail
═══════════════════════════════ */
export function AuditWidget() {
  return (
    <div style={containerStyle}>
      <img src={audit} alt="Audit Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Compliance
═══════════════════════════════ */
export function ComplianceWidget() {
  return (
    <div style={containerStyle}>
      <img src={compliance} alt="Compliance Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Copilot
═══════════════════════════════ */
export function CopilotWidget() {
  return (
    <div style={containerStyle}>
      <img src={copilot} alt="Copilot Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Governance
═══════════════════════════════ */
export function GovernanceWidget() {
  return (
    <div style={containerStyle}>
      <img src={governance} alt="Governance Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Marketplace
═══════════════════════════════ */
export function MarketplaceWidget() {
  return (
    <div style={containerStyle}>
      <img src={marketplace} alt="Marketplace Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Policy Engine
═══════════════════════════════ */
export function PolicyWidget() {
  return (
    <div style={containerStyle}>
      <img src={policy} alt="Policy Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Real Estate
═══════════════════════════════ */
export function RealEstateWidget() {
  return (
    <div style={containerStyle}>
      <img src={realestate} alt="Real Estate Feature" style={imgStyle} />
    </div>
  );
}

/* ═══════════════════════════════
   Risk
═══════════════════════════════ */
export function RiskWidget() {
  return (
    <div style={containerStyle}>
      <img src={risk} alt="Risk Feature" style={imgStyle} />
    </div>
  );
}