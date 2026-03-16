import finsentsis from "../../assets/logos/finsentsis.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand-logo">
              <div className="footer-brand-icon">
                <img src={finsentsis} alt="Finsentsis Logo" className="footer-logo-img" />
              </div>
              Finsentsis
            </div>

            <p className="footer-newsletter-label">Stay Updated</p>
            <p className="footer-newsletter-sub">
              Get the latest updates on compliance trends, product features, and industry insights.
            </p>

            <div className="footer-input-row">
              <input className="footer-input" type="email" placeholder="Enter your email id" />
              <button className="footer-input-btn" aria-label="Subscribe">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M7 2l5 5-5 5"
                    stroke="#0a0a0a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <p className="footer-col-title">Product</p>
            <ul className="footer-links">
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Why Finsentsis</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Company</p>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Career</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Legal</p>
            <ul className="footer-links">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Finsentsis OS · An AI-Powered Compliance & Governance Operating System
          </span>

          <div className="footer-socials">

            <div className="footer-social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v6h3v-6h2.5l.5-3H13v-2c0-.6.4-1 1-1z"/>
              </svg>
            </div>

            <div className="footer-social-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor"/>
                <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none"/>
              </svg>
            </div>

            <div className="footer-social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M23 7s-.2-1.6-.8-2.3c-.7-.9-1.5-.9-1.9-1C17.6 3.5 12 3.5 12 3.5h0s-5.6 0-8.3.2c-.4.1-1.2.1-1.9 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.7v1.6C.8 14.1 1 16 1 16s.2 1.6.8 2.3c.7.9 1.6.9 2 .9 1.5.2 6.2.2 8.2.2s6.7 0 8.3-.2c.4 0 1.2 0 1.9-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.7v-1.6C23.2 8.9 23 7 23 7z"/>
                <polygon points="10 9 16 12 10 15" fill="#0a0a0a"/>
              </svg>
            </div>

            <div className="footer-social-icon">
              <svg viewBox="0 0 24 24">
                <path d="M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.7 22H1.6l7.9-9.1L1 2h6.9l4.8 6.3L18.9 2z"/>
              </svg>
            </div>

          </div>
        </div>
      </footer>

      <style>{`

 /* ── Footer ── */
        .footer {
          background: #131313;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 52px 48px 28px;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px; margin-bottom: 48px;
        }
        .footer-brand-logo {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Syne', sans-serif; font-weight: 700;
          font-size: 15px; color: #fff; margin-bottom: 18px;
        }
        .footer-logo-img{
  width:30px;
  height:30px;
  object-fit:contain;
}
        .footer-newsletter-label {
          font-size: 16px; font-weight: 700; color: #fff;
          font-family: 'Syne', sans-serif; margin-bottom: 6px;
        }
        .footer-newsletter-sub {
          font-size: 12.5px; color: rgba(255,255,255,0.38);
          line-height: 1.6; margin-bottom: 16px;
        }
        .footer-input-row {
          display: flex; align-items: center;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px; overflow: hidden;
          padding: 4px 4px 4px 16px;
        }
        .footer-input {
          flex: 1; background: transparent; border: none; outline: none;
          font-size: 13px; color: #fff;
          font-family: 'DM Sans', sans-serif;
        }
        .footer-input::placeholder { color: rgba(255,255,255,0.28); }
        .footer-input-btn {
          width: 32px; height: 32px; border-radius: 50%;
          background: #9AFF2E; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: opacity 0.2s;
        }
        .footer-input-btn:hover { opacity: 0.85; }
        .footer-col-title {
          font-size: 13px; font-weight: 600; color: #ffff;
          font-family: 'inter', sans-serif; margin-bottom: 16px;
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a {
          font-size: 13px; color: rgba(255,255,255,0.42);
          text-decoration: none; transition: color 0.2s;
        }
        .footer-links a:hover { color: #ffff; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 20px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy { font-size: 11.5px; color: rgba(255,255,255,0.25); }
        .footer-socials{
  display:flex;
  align-items:center;
  gap:12px;
}

.footer-social-icon{
  width:36px;
  height:36px;
  

  display:flex;
  align-items:center;
  justify-content:center;

  border-radius:6px;

  background:#121212;

  border:1px solid rgba(255,255,255,0.06);

  transition:all .25s ease;
  cursor:pointer;
}

.footer-social-icon svg{
  width:20px;
  height:20px;

  color:#9AFF2E;
}

.footer-social-icon svg path{
  fill:#9AFF2E;
}

.footer-social-icon svg rect,
.footer-social-icon svg circle{
  stroke:#9AFF2E;
  fill:none;
}

.footer-social-icon:hover{
  background:#1a1a1a;

  box-shadow:
    0 0 10px rgba(154,255,46,0.35);
}

/* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0d0d0d; }
        ::-webkit-scrollbar-thumb { background: #9AFF2E; border-radius: 2px; }
`}</style>
    </>
  );
}
