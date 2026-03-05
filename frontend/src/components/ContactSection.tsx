import { useMemo, useState } from "react";

type CardKey = "email" | "phone" | "location";

type Info = {
  key: CardKey;
  icon: string;
  title: string;
  value: string;
};

function InfoCard({
  icon,
  title,
  value,
  active,
  onClick,
}: {
  icon: string;
  title: string;
  value: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`infoCard ${active ? "accent" : ""}`}
      onClick={onClick}
      style={{ width: "100%", textAlign: "left" }}
    >
      <div className="infoIcon">{icon}</div>
      <div>
        <div className="infoTitle">{title}</div>
        <div className="infoValue">{value}</div>
      </div>
    </button>
  );
}

export default function ContactSection() {
  // ✅ default active can be "phone" or "email" as you want
  const [activeCard, setActiveCard] = useState<CardKey>("phone");

  const cards: Info[] = useMemo(
    () => [
      { key: "email", icon: "✉", title: "Email", value: "finsentsis@gmail.com" },
      { key: "phone", icon: "☎", title: "Phone", value: "+91 9322872245" },
      { key: "location", icon: "⌖", title: "Location", value: "Hyderabad, India" },
    ],
    []
  );

  // ✅ optional: auto-fill form based on selected card (nice UX)
  const hintText =
    activeCard === "email"
      ? "Ask us anything. We’ll reply by email."
      : activeCard === "phone"
      ? "Leave your number/message. We can call you back."
      : "Ask about office location, directions, or visits.";

  return (
    <section className="section">
      <div className="sectionHeader">
        <h1>Get in Touch with us</h1>
        <p>
          Have questions about Finsentsis? Our team is here to help. Reach out and
          we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="contactGrid">
        {/* LEFT (Dynamic highlight) */}
        <div className="glass leftBox">
          {cards.map((c) => (
            <InfoCard
              key={c.key}
              icon={c.icon}
              title={c.title}
              value={c.value}
              active={activeCard === c.key}
              onClick={() => setActiveCard(c.key)}
            />
          ))}
        </div>

        {/* RIGHT FORM */}
        <form
          className="glass rightBox"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent (demo) ✅");
          }}
        >
          <div style={{ marginBottom: 10, color: "rgba(255,255,255,0.55)", fontSize: 12 }}>
            {hintText}
          </div>

          <label className="field">
            <span>Name</span>
            <input type="text" placeholder="Enter your name" required />
          </label>

          <label className="field">
            <span>Email</span>
            <input type="email" placeholder="Enter your email" required />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea rows={5} placeholder="Type your message" required />
          </label>

          <button className="sendBtn" type="submit">
            Send your message
          </button>
        </form>
      </div>
    </section>
  );
}