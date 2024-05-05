import { createContext, useEffect, useState } from "react";
import propType from "prop-types";
import { jwtDecode } from "jwt-decode";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  // Verificar se há um token de autenticação no localStorage ao carregar a aplicação
  const token = localStorage.getItem("token");
  if (token) {
    setIsLoggedIn(true);
  }
}, []);

const login = (token) => {
    setIsLoggedIn(true);
  localStorage.setItem("token", token);
  const decodeToken = jwtDecode(token)
  localStorage.setItem("type", decodeToken.type);
};

const logout = () => {
  setIsLoggedIn(false);
  localStorage.removeItem("token");
};

return (
  <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
    {children}
  </AuthContext.Provider>
);

}

AuthProvider.propTypes = {
    children: propType.node.isRequired,
};