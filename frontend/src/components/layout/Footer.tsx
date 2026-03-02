import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="footerX">
      <div className="footerX__inner">
        {/* LEFT */}
        <div className="footerX__left">
          <div className="footerX__brandRow">
            <div className="footerX__logoBox" aria-hidden="true">
              <img
                src="/logo.png"
                alt=""
                className="footerX__logoImg"
              />
            </div>
            <span className="footerX__brandText">Finsentsis</span>
          </div>

          <h3 className="footerX__title">Stay Updated</h3>

          <p className="footerX__desc">
            Get the latest updates on compliance trends, product
            <br />
            features, and industry insights.
          </p>

          <div className="footerX__newsletter">
            <input
              type="email"
              placeholder="Enter your email id"
              className="footerX__input"
            />
            <button className="footerX__send" aria-label="Subscribe">
              <HiArrowRight size={18} />
            </button>
          </div>

          <div className="footerX__copyright">
            © 2026 Finsentsis OS · An AI-Powered Compliance &amp; Governance Operating System
          </div>
        </div>

        {/* RIGHT */}
        <div className="footerX__right">
          <div className="footerX__cols">
            <div className="footerX__col">
              <div className="footerX__colTitle">Product</div>
              <a className="footerX__link" href="#">Features</a>
              <a className="footerX__link" href="#">Pricing</a>
              <a className="footerX__link" href="#">Why Finsentsis</a>
            </div>

            <div className="footerX__col">
              <div className="footerX__colTitle">Company</div>
              <a className="footerX__link" href="#">About</a>
              <a className="footerX__link" href="#">Career</a>
              <a className="footerX__link" href="#">Contact</a>
            </div>

            <div className="footerX__col">
              <div className="footerX__colTitle">Legal</div>
              <a className="footerX__link" href="#">Privacy</a>
              <a className="footerX__link" href="#">Terms</a>
            </div>
          </div>

          <div className="footerX__social">
            <a className="footerX__socBtn" href="#" aria-label="Facebook">
              <FaFacebookF size={14} />
            </a>
            <a className="footerX__socBtn" href="#" aria-label="Instagram">
              <FaInstagram size={14} />
            </a>
            <a className="footerX__socBtn" href="#" aria-label="YouTube">
              <FaYoutube size={14} />
            </a>
            <a className="footerX__socBtn" href="#" aria-label="X">
              <FaXTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}