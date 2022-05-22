import { createContext, useState, useEffect } from "react"
import axiosClient from "../config/axiosClient"

const ResultsContext = createContext();


const ResultsProvider = ({ children }) => {

    const [results, setResults] = useState([]);
    const queryAllResults = async () => {
        try {
            const response = await axiosClient.get("/survey");
            const { data } = response;
            setResults(data);
        } catch (error) {
            setResults([])
        }
    }

    useEffect(() => {
        queryAllResults();
    }, [])

    return (
        <ResultsContext.Provider
            value={{
                results,
                queryAllResults
            }}
        >
            {children}
        </ResultsContext.Provider>
    )
}

export { ResultsProvider }
export default ResultsContext