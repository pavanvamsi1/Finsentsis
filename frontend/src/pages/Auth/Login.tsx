import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthTabs from "../../components/auth/AuthTabs";
import AuthForm from "../../components/auth/AuthForm";
develop
import { useAuth } from "../../context/AuthContext";

import { useAuth } from "../../context/useAuth";
main

const Login = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"login" | "otp">("login");
develop

  // 🔥 Timer states
  const [timer, setTimer] = useState(60);
  const [expired, setExpired] = useState(false);

  const [timer, setTimer] = useState(60);
main

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const { login } = useAuth();

 develop
  // Focus first OTP box

  const isExpired = timer === 0;

  // Focus first OTP input
main
  useEffect(() => {
    if (step === "otp") {
      inputRefs.current[0]?.focus();
    }
  }, [step]);

develop
  // 🔥 Timer logic
  useEffect(() => {
    if (step !== "otp") return;

    if (timer === 0) {
      setExpired(true);
      return;
    }

  // Timer logic
  useEffect(() => {
    if (step !== "otp" || timer === 0) return;
 main

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [step, timer]);

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStep("otp");
develop
    setTimer(60);     // reset timer
    setExpired(false);
  };

  const handleVerify = () => {
    if (expired) {
      alert("OTP Expired");
      return;
    }


    setTimer(30);
  };

  const handleVerify = () => {
 main
    const otp = inputRefs.current
      .map((input) => input?.value ?? "")
      .join("");

    if (otp.length !== 6) {
      alert("Enter 6 digit OTP");
      return;
    }

develop
    // Fake role logic
    const fakeUser =
      email.includes("admin")
        ? { id: "1", email, role: "ADMIN" as const }
        : { id: "2", email, role: "EMPLOYEE" as const };

    const fakeUser = email.includes("admin")
      ? { id: "1", email, role: "ADMIN" as const }
      : { id: "2", email, role: "EMPLOYEE" as const };
 main

    login(fakeUser);

    if (fakeUser.role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/employee/dashboard");
    }
  };

 develop

  const handleResendOTP = () => {
    if (!isExpired) return; // 🔒 Block if timer not finished

    // Clear OTP inputs
    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });

    setTimer(30);
    inputRefs.current[0]?.focus();

    alert("OTP Resent Successfully");
  };

  const handleBackToLogin = () => {
    setStep("login");
    setEmail("");
    setTimer(60);

    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
  };

main
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
develop
      bottomLink={step === "login" ? "/" : undefined}
      bottomLinkText={step === "login" ? "Sign Up" : undefined}
    >
      {/* STEP 1 */}
      {step === "login" && (
        <>
          <AuthTabs />

          <div className="divider">
            <span /> OR <span />
          </div>


      bottomLink={step === "login" ? "/Requestademo" : undefined}
      bottomLinkText={step === "login" ? "Request a Demo" : undefined}
    >
      {step === "login" && (
        <>
          <AuthTabs />
          <div className="divider">
            <span /> OR <span />
          </div>
 main
          <AuthForm>
            <form className="form" onSubmit={handleContinue}>
              <input
                className="auth-input"
                placeholder="Enter company mail id"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
 develop


 main
              <button type="submit" className="btn-primary full">
                Continue
              </button>
            </form>
          </AuthForm>
        </>
      )}

 develop
      {/* STEP 2 OTP */}

 main
      {step === "otp" && (
        <>
          <div className="otp-row">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="otp-box"
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

 develop
          {/* 🔥 TIMER DISPLAY */}
          <div
            style={{
              marginBottom: "15px",
              fontSize: "13px",
              color: expired ? "red" : "#9ca3af",
            }}
          >
            {expired
              ? "OTP Expired"
              : `Time remaining: ${timer}s`}
   {/* Timer */}
          <div
            style={{
              marginBottom: "8px",
              fontSize: "13px",
              color: "#9ca3af",
              textAlign: "center",
            }}
          >
            Time remaining: {timer}s
          </div>

          {/* Resend button always visible */}
          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={!isExpired}
              style={{
                background: "none",
                border: "none",
                color: isExpired ? "#2563eb" : "#9ca3af",
                cursor: isExpired ? "pointer" : "not-allowed",
                fontWeight: 500,
              }}
            >
              Resend OTP
            </button>
main
          </div>

          <div className="btn-row">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setStep("login")}
            >
              Back to Login
            </button>

            <button
              type="button"
              className="btn-primary"
              onClick={handleVerify}
 develop
              disabled={expired}

 main
            >
              Continue
            </button>
          </div>
        </>
      )}
    </AuthLayout>
  );
};

 develop
export default Login;

export default Login;
 main
