import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import Register from "./pages/register-student/Register";
import { Container } from "./components/container/Container";

import StudentList from "./pages/student-list/StudentList";
import { AuthProvider } from "./context/AuthContext";
import PageStudent from "./pages/page-student/PageStudent";
import StudentEditPerfil from "./pages/student-edit-perfil/StudentEditPerfil";
import LoginStudent from "./pages/login-student/LoginStudent";
import LoginCollaborator from "./pages/login-collaborator/LoginCollaborator";
import PageCollaborator from "./pages/page-collaborator/PageCollaborator";
import RegisterCollaborator from "./pages/register-collaborator/RegisterCollaborator";
import EditPerfilCollaborator from "./pages/edit-perfil-collaborator/EditPerfilCollaborator";
import RegisterJob from "./pages/register-job/RegisterJob";
import EditFormsJob from "./pages/edit-forms-job/EditFormsJob";
import ListJob from "./pages/list-job/ListJob";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <h1>Teste</h1>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
