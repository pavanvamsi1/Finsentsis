import React from "react";
import TeamCard, { type TeamMember } from "./TeamCard";

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "1500px", // wider layout like the design
        margin: "0 auto",
        padding: isMobile ? "0 1rem 3rem" : "0 2rem 5rem",
      }}
    >
      {members.map((member, index) => (
        <TeamCard key={member.name} member={member} index={index} />
      ))}
    </section>
  );
};

export default TeamGrid;