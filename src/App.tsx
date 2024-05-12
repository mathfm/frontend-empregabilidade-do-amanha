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
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register-student" element={<Register />} />
              <Route
                path="/register-collaborator"
                element={<RegisterCollaborator />}
              />
              <Route path="/login-student" element={<LoginStudent />} />
              <Route
                path="/login-collaborator"
                element={<LoginCollaborator />}
              />
              <Route path="/list-student" element={<StudentList />} />
              <Route path="/perfil-student" element={<PageStudent />} />
              <Route
                path="/perfil-student-edit"
                element={<StudentEditPerfil />}
              />
              <Route
                path="/perfil-collaborator"
                element={<PageCollaborator />}
              />
              <Route
                path="/perfil-collaborator-edit"
                element={<EditPerfilCollaborator />}
              />
              <Route path="/job-register" element={<RegisterJob />} />
              <Route path="/job-edit" element={<EditFormsJob />} />
              <Route path="/jobs" element={<ListJob />} />
            </Routes>
          </Container>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
