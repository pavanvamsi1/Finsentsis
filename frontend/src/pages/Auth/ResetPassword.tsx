import React from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthForm from "../../components/auth/AuthForm";

const ResetPassword: React.FC = () => {
  return (
    <AuthLayout
      badge="Reset Password"
      title="Reset your password"
      subtitle="Enter your email to receive OTP"
    >
      <AuthForm>
        <input className="auth-input" placeholder="Enter email" />
        <button className="btn-primary full">Send OTP</button>
      </AuthForm>
    </AuthLayout>
  );
};

export default ResetPassword;