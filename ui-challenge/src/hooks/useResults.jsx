import { useContext } from "react";
import ResultsContext from "../context/ResultsContext";

const useResults = () => {
  return useContext(ResultsContext)
}

export default useResults