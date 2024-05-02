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

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register-student" element={<Register />} />
            <Route path="/register-collaborator" element={<CollaboratorRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/oportunitties" element={<PublishOpportunities />} />
            <Route path="/list-student" element={<StudentList />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
