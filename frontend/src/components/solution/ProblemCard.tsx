import num1 from "../../assets/solution/01.png";
import num2 from "../../assets/solution/02.png";
import num3 from "../../assets/solution/03.png";
import num4 from "../../assets/solution/04.png";

interface Problem {
  id: number;
  title: string;
  desc: string;
}

const problems: Problem[] = [
  {
    id: 1,
    title: "Complex, Ever-Changing Regulatory Landscapes",
    desc: "Tracking regulations across multiple countries and compliance domains is nearly impossible with manual processes.",
  },
  {
    id: 2,
    title: "High Cost of Compliance",
    desc: "Manual audits, multiple tools, and large compliance teams drain resources without improving outcomes.",
  },
  {
    id: 3,
    title: "Lack of Unified Visibility",
    desc: "Data is fragmented across systems, leading to compliance gaps and missed regulatory changes.",
  },
  {
    id: 4,
    title: "Risk of Penalties",
    desc: "Fragmented systems and human oversight lead to compliance failures, penalties, audits, and reputational damage.",
  },
];

/* ✅ Map IDs to images */
const numberImages: Record<number, string> = {
  1: num1,
  2: num2,
  3: num3,
  4: num4,
};

export default function ProblemCard() {
  return (
    <>
      <div className="wrapper">
        {problems.map((p) => (
          <div key={p.id} className="card">
            <div className="content">
              <h3 className="card-title">{p.title}</h3>
              <p className="card-desc">{p.desc}</p>
              <span className="badge">Problem</span>
            </div>

            {/* ✅ Number Image */}
            <div className={`number-box number-${p.id}`}>
              <img
                src={numberImages[p.id]}
                alt={`number-${p.id}`}
                className="number-img"
              />
            </div>
          </div>
        ))}
      </div>

      <style>{`
      .wrapper {
  max-width: 1404px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 688px); /* exact */
  gap: 28px;
  justify-content: center;
}

    @media (max-width: 1400px) {
  .wrapper {
    grid-template-columns: 1fr;
  }

  .card {
    width: 100%;
    height: auto;
    aspect-ratio: 688 / 491;
  }
}
     .card {
  position: relative;
  width: 688px;              /* ✅ exact */
  height: 491px;             /* ✅ exact */
  border-radius: 12px;       /* ✅ from Figma (12.08) */
  overflow: hidden;
  border: 1.21px solid #3B3B3B;
  background: #1E1E1E;
}

 

        .content {
          position: relative;
          z-index: 2;
          padding: 32px;
          max-width: 621px;
        }

        .card-title {
          font-family: "Inter Display", sans-serif;
          font-size: 36px;
          font-weight: 500;
          line-height: 1.06;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .card-desc {
          font-family: "Inter Display", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          color: #8a8a8a;
          margin-bottom: 18px;
        }

        .badge {
          display: inline-block;
          font-size: 13px;
          padding: 6px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cfcfcf;
        }

        /* ✅ NUMBER FRAME */
        .number-box {
  position: absolute;
  width: 390px;
  height: 317px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  pointer-events: none;
}

/* 01 */
.number-1 {
  bottom: -30px;
  right: 20px;
}

/* 02 */
.number-2 {
  bottom: -30px;
  right: 20px;
}

/* 03 */
.number-3 {
  bottom: -40px;
  right: 30px;
}

/* 04 */
.number-4 {
  bottom: -25px;
  right: 15px;
}

        /* ✅ NUMBER IMAGE */
        .number-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.95;
        }
      `}</style>
    </>
  );
}
