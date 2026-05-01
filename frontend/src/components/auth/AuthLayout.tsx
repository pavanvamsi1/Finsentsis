
import finsentsisLogo from "../../assets/logos/finsentsis.png";

type Props = {
  badge: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  
};

const AuthLayout = ({
  badge,
  title,
  subtitle,
  children,
  
}: Props) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-[radial-gradient(circle_at_center,#3a4042_0%,#0b0b0b_70%)]">
      <div className="w-full max-w-[460px] text-center text-white">

        {/* Logo */}
        <div className="w-[60px] h-[60px] bg-black rounded-full flex items-center justify-center mx-auto mb-5">
          <img
            src={finsentsisLogo}
            alt="Finsentsis"
            className="w-[35px] h-[35px] object-contain"
          />
        </div>

        {/* Badge */}
        <div className="bg-[#1a1a1a] px-4 py-1 rounded-full text-xs mb-3 inline-block">
          {badge}
        </div>

        {/* Title */}
        <h1 className="text-[34px] font-semibold">{title}</h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-1 mb-6">{subtitle}</p>

        {children}

        
      </div>
    </div>
  );
};

export default AuthLayout;
