import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Providers
import { SurveyProvider } from "../context/SurveyContext.jsx"
import { AuthProvider } from "../context/AuthContext"


//Pages
import SurveyPage from "../pages/public/surveyPage/SurveyPage"
import LoginPage from "../pages/public/loginPage/LoginPage.jsx"
import AdminPage from "../pages/private/adminPage/AdminPage";

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <SurveyProvider>
          <Routes>
            <Route path="/" element={<SurveyPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </SurveyProvider>

        <Routes>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default AppRouter