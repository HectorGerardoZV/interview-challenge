import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import useResults from "../../../hooks/useResults"
import { useContext } from "react";
import WalletContext from "../../../context/WalletContext";
ChartJS.register(ArcElement, Tooltip, Legend);

import "./PieChart.css"
const PieChart = () => {
    const { results } = useResults()
    const { blockchainResults } = useContext(WalletContext);
    const yes = results.filter(result => result.questionTwo == "one").length;
    const no = results.filter(result => result.questionTwo == "two").length;

    const columTwo = [];
    blockchainResults.forEach(item => {
        const info = item.split(",")
        columTwo.push(info[1])
    })
    const yesBlock = columTwo.filter(item => item.split("\0")[0] == "one").length;
    const noBlock = columTwo.filter(item => item.split("\0")[0] == "two").length;

    const dataAPI = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                label: '# of Votes',
                data: [yes, no],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const dataABI = {
        labels: ['Yes', 'No'],
        datasets: [
            {
                label: '# of Votes',
                data: [yesBlock, noBlock],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className='pieChart'>
            <h2>Did you sleep weel?</h2>
            <p>API</p>
            <Pie data={dataAPI} />
            <p>ABI</p>
            <Pie data={dataABI} />
        </div>
    )
}

export default PieChart