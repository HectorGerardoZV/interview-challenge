import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Providers
import { SurveyProvider } from "../context/SurveyContext.jsx"
import LoginPage from "../pages/public/loginPage/LoginPage.jsx"


//Pages
import SurveyPage from "../pages/public/surveyPage/SurveyPage"


const AppRouter = () => {
  return (
    <Router>
      <SurveyProvider>
        <Routes>
          <Route path="/" element={<SurveyPage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </SurveyProvider>
    </Router>
  )
}

export default AppRouter