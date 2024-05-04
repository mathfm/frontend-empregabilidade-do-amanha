import { createContext, useEffect, useState } from "react";
import propType from "prop-types";
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
    console.log(localStorage.getItem("token"));
  localStorage.setItem("token", token);
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