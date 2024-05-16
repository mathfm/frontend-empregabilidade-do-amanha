import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home";
// import Register from "./pages/register-student/Register";
// import { Container } from "./components/container/Container";

// import StudentList from "./pages/student-list/StudentList";
import { AuthProvider } from "./context/AuthContext";
import { PageCollaborator } from "./pages/page-collaborator";
import StudentList from "./pages/student-list/StudentList";
import RegisterJob from "./pages/register-job/RegisterJob";
// import PageStudent from "./pages/page-student/PageStudent";
// import StudentEditPerfil from "./pages/student-edit-perfil/StudentEditPerfil";
// import LoginStudent from "./pages/login-student/LoginStudent";
// import LoginCollaborator from "./pages/login-collaborator/LoginCollaborator";

// import RegisterCollaborator from "./pages/register-collaborator/RegisterCollaborator";
// import EditPerfilCollaborator from "./pages/edit-perfil-collaborator/EditPerfilCollaborator";
// import RegisterJob from "./pages/register-job/RegisterJob";
// import EditFormsJob from "./pages/edit-forms-job/EditFormsJob";
// import ListJob from "./pages/list-job/ListJob";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil-collaborator" element={<PageCollaborator />} />
            <Route path="/student" element={<StudentList />} />
            <Route path="/publicar-vaga" element={<RegisterJob /> } />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
