import { Mail, Phone, MapPin } from "lucide-react";

const cardClass =
  "flex items-center gap-4 bg-gradient-to-b from-[#3B3B3B]/10 to-[#1f1f1f]/40 border border-white/10 p-5 rounded-xl backdrop-blur-xl";

const iconBox =
  "w-12 h-12 flex items-center justify-center rounded-lg bg-black/40 border border-white/10";

const ContactInfo = () => {
  return (
    <div className="space-y-4 relative z-10">

      {/* EMAIL */}
      <div className={cardClass}>
        <div className={iconBox}>
          <Mail className="text-white/80" size={20} />
        </div>
        <div>
          <p className="text-gray-400 text-sm">Email</p>
          <p className="text-white text-sm">finsentsis@gmail.com</p>
        </div>
      </div>

      {/* PHONE (ACTIVE GLOW) */}
      <div className={`${cardClass} border-lime-400/40 `}>
        <div className={iconBox}>
          <Phone className="text-white/80" size={20} />
        </div>
        <div>
          <p className="text-gray-400 text-sm">Phone</p>
          <p className="text-white text-sm">+91 9322872245</p>
        </div>
      </div>

      {/* LOCATION */}
      <div className={cardClass}>
        <div className={iconBox}>
          <MapPin className="text-white/80" size={20} />
        </div>
        <div>
          <p className="text-gray-400 text-sm">Location</p>
          <p className="text-white text-sm">Hyderabad, India</p>
        </div>
      </div>

    </div>
  );
};

export default ContactInfo;
