import { useState } from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import AuthForm from "../../components/auth/AuthForm";
import { requestDemoAPI } from "../../library/api";

const Requestademo = () => {
  

  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [accepted, setAccepted] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!accepted) {
    alert("Please accept Terms & Conditions");
    return;
  }

  try {
    const res = await requestDemoAPI({
      company,
      email,
      country,
    });

    // ✅ Show backend message
    alert(res?.message || "✅ Successfully submitted!");

    // ✅ Reset form
    setCompany("");
    setEmail("");
    setCountry("");
    setAccepted(false);

  } catch (error) {
    console.error(error);
    alert("❌ Demo request failed");
  }
};

  return (
    <AuthLayout
      badge="Create your Finsentsis account"
      title="Sign up account"
      subtitle=""
      
    >
      <AuthTabs />

      <div className="flex items-center gap-3 text-white text-xs mb-6">
        <span className="flex-1 h-[1px] bg-[#2a2a2a]" />
        OR
        <span className="flex-1 h-[1px] bg-[#2a2a2a]" />
      </div>

      <AuthForm>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="bg-[#050505] border border-[#2a2a2a] p-3.5 rounded-xl text-white"
            placeholder="Enter company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <input
            className="bg-[#050505] border border-[#2a2a2a] p-3.5 rounded-xl text-white"
            placeholder="Enter company mail id"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <select className="bg-[#050505] border border-[#2a2a2a] p-3.5 rounded-xl text-white">
            <option>Employees Size</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>

          <select
            className="bg-[#050505] border border-[#2a2a2a] p-3.5 rounded-xl text-white"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">Select your country</option>
            <option>India</option>
            <option>United States</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>China</option>
            <option>Australia</option>
            <option>Germany</option>
            <option>Singapore</option>
            <option>United Arab Emirates</option>
          </select>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            I agree to Terms & Conditions
          </div>

          <button
            type="submit"
            className="w-full bg-[#9aff2e] text-black p-3.5 rounded-xl hover:bg-[#85e600]"
          >
            Request a Demo
          </button>
        </form>
      </AuthForm>
    </AuthLayout>
  );
};

export default Requestademo;
