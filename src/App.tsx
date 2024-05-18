import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { AuthProvider } from "./context/AuthContext";
import { PageCollaborator } from "./pages/page-collaborator";
import { PageAllStudents} from "./pages/page-all-students";
import { RegisterJob } from "./pages/register-job";
import { PageAllJobs } from "./pages/page-all-jobs";
import { PerfilEditCollaborator } from "./pages/perfil-edit-collaborator";
import { PageStudent } from "./pages/page-student";
import { PerfilEditStudent } from "./pages/perfil-edit-student";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" toastOptions={{duration: 2000}}/>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil-collaborator" element={<PageCollaborator />} />
            <Route path="/perfil-colaborador/edit" element={<PerfilEditCollaborator />} />
            <Route path="/publicar-vaga" element={<RegisterJob /> } />
            <Route path="/perfil-estudante" element={<PageStudent /> } />
            <Route path="/perfil-estudante/edit" element={<PerfilEditStudent /> } />
            <Route path="/estudantes" element={<PageAllStudents />} />
            <Route path="/vagas" element={<PageAllJobs /> } />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
