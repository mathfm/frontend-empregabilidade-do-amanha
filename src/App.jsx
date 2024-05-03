import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Container } from "./components/container/Container";
import CollaboratorRegister from "./pages/collaborator-register/CollaboratorRegister";
import PublishOpportunities from "./pages/publish-opportunities/PublishOpportunities";
import StudentList from "./pages/student-list/StudentList";
import { AuthProvider } from "./hooks/AuthContext";
import PageStudent from "./pages/pageStudent/PageStudent";

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
              <Route path="/register-collaborator" element={<CollaboratorRegister />} />
              <Route path="/login" element={<Login />} />
              <Route path="/oportunitties" element={<PublishOpportunities />} />
              <Route path="/list-student" element={<StudentList />} />
              <Route path="/perfil-student" element={<PageStudent />} />

            </Routes>
          </Container>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
