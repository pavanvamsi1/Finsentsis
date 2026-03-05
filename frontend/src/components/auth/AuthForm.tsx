import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthForm: React.FC<Props> = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>;
};

export default AuthForm;
