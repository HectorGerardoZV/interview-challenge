import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Pages
import SurveyPage from "../pages/public/surveyPage/SurveyPage"


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<SurveyPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter