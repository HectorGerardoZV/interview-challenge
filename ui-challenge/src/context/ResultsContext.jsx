import { createContext, useState, useEffect } from "react"
import axiosClient from "../config/axiosClient"

const ResultsContext = createContext();


const ResultsProvider = ({ children }) => {

    const [results, setResults] = useState(
        localStorage.getItem("results") ?
            JSON.parse(localStorage.getItem("results")) :
            []
    );
    const queryAllResults = async () => {
        try {
            const response = await axiosClient.get("/survey");
            const { data } = response;
            setResults(data);
            localStorage.setItem("results", JSON.stringify(data))
        } catch (error) {
            setResults(
                localStorage.getItem("results") ?
                    JSON.parse(localStorage.getItem("results")) :
                    []
            )
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