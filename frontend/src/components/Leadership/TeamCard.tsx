import React from "react";

export interface TeamMember {
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  linkedIn?: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  const imageRight = index % 2 !== 0;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: imageRight ? "row-reverse" : "row",
        gap: "3rem",
        background: "hsla(0, 0%, 14%, 1)",
        borderRadius: "18px",
        padding: "2rem",
        marginBottom: "2rem",
        border: "1px solid rgba(255,255,255,0.05)",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* IMAGE + NAME CARD */}
      <div
        style={{
          width: "260px",
          flexShrink: 0,
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />

        <div
          style={{
            background: "#111",
            borderRadius: "12px",
            padding: "1rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.2rem",
              fontWeight: 600,
              marginBottom: "0.2rem",
            }}
          >
            {member.name}
          </h3>

          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "0.5rem",
            }}
          >
            {member.title}
          </p>

          {member.subtitle && (
            <p
              style={{
                fontSize: "0.8rem",
                color: "#9AFF2E",
              }}
            >
              {member.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div
        style={{
          flex: 1,
          minWidth: "250px",
        }}
      >
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.8",
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;