import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import AuthForm from "../../components/auth/AuthForm";
import { useAuth } from "../../context/useAuth";
import { loginAPI, verifyOtpAPI } from "../../library/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"login" | "otp">("login");
  const [timer, setTimer] = useState(60);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const { login } = useAuth();

  const isExpired = timer === 0;

  useEffect(() => {
    if (step === "otp") {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

  useEffect(() => {
    if (step !== "otp" || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);

  /*
  SEND OTP
  */
  const handleContinue = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await loginAPI(email);

      setError("");
      setSuccess("OTP sent to your email");
      setStep("otp");
      setTimer(30);
    } catch {
      setError("Failed to send OTP");
    }
  };

  /*
  VERIFY OTP (REAL API)
  */
  const handleVerify = async () => {
    const otp = inputRefs.current.map((i) => i?.value ?? "").join("");

    if (otp.length !== 6) {
      setError("Please enter a valid 6 digit OTP");
      setSuccess("");
      return;
    }

    try {
      const response = await verifyOtpAPI(email, otp);
      const data = response.data;

      login(data.user);

      if (data.user.role === "ADMIN") {
        navigate("/admin/dashboard");
      } else {
        navigate("/employee/dashboard");
      }
    } catch {
      setError("Invalid OTP");
    }
  };

  const handleResendOTP = () => {
    if (!isExpired) return;

    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });

    setTimer(30);
    setSuccess("OTP has been resent successfully");
    setError("");
    inputRefs.current[0]?.focus();
  };

  const handleBackToLogin = () => {
    setStep("login");
    setEmail("");
    setTimer(30);
    setError("");
    setSuccess("");

    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
  };

  return (
    <AuthLayout
      badge="Welcome back!"
      title="Login your account"
      subtitle={
        step === "login"
          ? "Enter your data to continue"
          : "Enter OTP received through mail"
      }
      bottomText={step === "login" ? "Don't have account?" : undefined}
      bottomLink={step === "login" ? "/Requestademo" : undefined}
      bottomLinkText={step === "login" ? "Request a Demo" : undefined}
    >
      {step === "login" && (
        <>
          <AuthTabs />

          <div className="flex items-center gap-3 text-white text-xs mb-6">
            <span className="flex-1 h-[1px] bg-[#2a2a2a]" />
            OR
            <span className="flex-1 h-[1px] bg-[#2a2a2a]" />
          </div>

          <AuthForm>
            <form className="flex flex-col gap-4" onSubmit={handleContinue}>
              <input
                className="bg-[#050505] border border-[#2a2a2a] p-3.5 rounded-xl text-white w-full focus:outline-none focus:border-[#9aff2e]"
                placeholder="Enter company mail id"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="w-full bg-[#9aff2e] text-black p-3.5 rounded-xl font-medium hover:bg-[#85e600] transition"
              >
                Continue
              </button>
            </form>
          </AuthForm>
        </>
      )}

      {step === "otp" && (
        <>
          <div className="flex justify-center gap-2.5 my-6">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-12 h-12 bg-[#050505] border border-[#2a2a2a] rounded-xl text-center text-white text-lg focus:outline-none focus:border-[#9cff2e]"
                ref={(el) => {
  inputRefs.current[index] = el;
}}
                onChange={(e) => {
                  const value = e.target.value;

                  if (!/^[0-9]?$/.test(value)) return;

                  if (value && index < 5) {
                    inputRefs.current[index + 1]?.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === "Backspace" &&
                    !e.currentTarget.value &&
                    index > 0
                  ) {
                    inputRefs.current[index - 1]?.focus();
                  }
                }}
              />
            ))}
          </div>

          {error && (
            <div className="text-red-400 text-sm text-center mb-2">{error}</div>
          )}

          {success && (
            <div className="text-green-400 text-sm text-center mb-2">
              {success}
            </div>
          )}

          <div className="text-center text-sm text-gray-400 mb-2">
            Time remaining: {timer}s
          </div>

          <div className="text-center mb-4">
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={!isExpired}
              className={`font-medium ${
                isExpired
                  ? "text-blue-500 hover:text-blue-400"
                  : "text-gray-500 cursor-not-allowed"
              }`}
            >
              Resend OTP
            </button>
          </div>

          <div className="flex gap-3 mt-2 max-sm:flex-col">
            <button
              type="button"
              className="flex-1 bg-gray-200 text-black p-3.5 rounded-xl hover:bg-gray-300 transition"
              onClick={handleBackToLogin}
            >
              Back to Login
            </button>

            <button
              type="button"
              className="flex-1 bg-[#9aff2e] text-black p-3.5 rounded-xl hover:bg-[#85e600] transition"
              onClick={handleVerify}
            >
              Continue
            </button>
          </div>
        </>
      )}
    </AuthLayout>
  );
};

export default Login;
