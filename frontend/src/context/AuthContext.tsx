 develop
import { createContext, useContext, useState } from "react";

type Role = "ADMIN" | "EMPLOYEE";

interface User {

import { createContext } from "react";

export type Role = "ADMIN" | "EMPLOYEE";

export interface User {
main
  id: string;
  email: string;
  role: Role;
}

develop
interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};

export interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

// ✅ Only context here
export const AuthContext = createContext<AuthContextType | null>(null);
 main
