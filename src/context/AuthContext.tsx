import { createContext, useEffect, useState } from "react";

interface AuthContextData {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: JSX.Element[];
}

export const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar se há um token de autenticação no localStorage ao carregar a aplicação
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token: string): void => {
    setIsLoggedIn(true);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("type");
  };

  const authContextData: AuthContextData = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
