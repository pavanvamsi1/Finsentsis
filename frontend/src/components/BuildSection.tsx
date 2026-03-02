import { HiArrowUpRight } from "react-icons/hi2";

export default function BuildSection() {
  return (
    <section className="section buildSection">
      <div className="glass buildCard">
        <h2 className="buildTitle">
          Let&apos;s Build <br />
          the Future <br />
          Together
        </h2>

        <p className="buildDesc">
          Let’s build the future of intelligent compliance together. Explore what we do and how
          we can help.
        </p>

        <div className="buildActions">
          <button className="btnPrimary" type="button">
            Start a free trail <HiArrowUpRight size={18} />
          </button>

          <button className="btnGhost" type="button">
            Schedule Demo <HiArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}