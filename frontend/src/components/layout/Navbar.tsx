export default function Navbar() {
  const activePage = "Contact";

  const navItems = [
    "Home",
    "About",
    "Solutions",
    "Features",
    "Leadership",
    "Careers",
    "Contact",
  ];

  return (
    <header className="navWrap">
      <div className="navInner">
        {/* LEFT LOGO */}
        <div className="brand">
          <img src="/logo.png" alt="Finsentsis Logo" className="brandImg" />
          <span className="brandText">Finsentsis</span>
        </div>

        {/* CENTER NAV */}
        <nav className="navPills">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className={`pill ${item === activePage ? "active" : ""}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* RIGHT CTA */}
        <button className="navCta">Join our early access ↗</button>
      </div>
    </header>
  );
}