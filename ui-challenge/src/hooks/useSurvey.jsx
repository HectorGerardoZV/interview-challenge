import { useContext } from "react"
import SurveyContext from "../context/SurveyContext"


const useSurvey = () => {
  return useContext(SurveyContext)
}

export default useSurvey