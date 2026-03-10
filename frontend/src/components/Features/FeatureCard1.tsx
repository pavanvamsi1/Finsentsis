import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";


export interface FeatureData {
  number: string;
  title: string;
  description: string;
  widget: ReactNode;
}

interface FeatureCardProps {
  feature: FeatureData;
  index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="
      grid grid-cols-[50%_50%]
      h-[545px]
      border-2 border-[#4B4B4B]
      rounded-[10px]
      bg-[linear-gradient(253.41deg,#323232_38.52%,#080808_99.15%)]
      overflow-hidden
      relative
      cursor-default
      items-stretch
      transition-all duration-700 ease-out
      "
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(36px)",
        transitionDelay: `${index * 0.15}s`,
      }}
    >
      {/* LEFT SIDE */}
<div className="flex flex-col justify-center items-start px-[60px] gap-6 mt-[150px]">


        {/* Number Box */}
       <div
  className="flex items-center justify-center
  w-[109px] h-[109px]
  rounded-[10px]
  text-white text-[40px] font-medium leading-none

  bg-[linear-gradient(135deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.20)_8%,#0a0a0a_22%,#000_100%)]

  shadow-[inset_0_6px_10px_rgba(255,255,255,0.25),inset_0_-20px_35px_rgba(0,0,0,0.95)]
  "
>
  {feature.number}
</div>




        {/* Text */}
        <div className="space-y-6">

          <h3
            className="
            text-[30px]
            font-medium
            text-white
            leading-none
            max-w-[450px]
            "
          >
            {feature.title}
          </h3>

          <p
            className="
            text-[15px]
            text-white/90
            leading-snug
            max-w-[516px]
            "
          >
            {feature.description}
          </p>

        </div>
      </div>

      {/* RIGHT SIDE (Widget) */}
      <div className="flex items-center justify-center">
        {feature.widget}
      </div>

    </div>
  );
}
