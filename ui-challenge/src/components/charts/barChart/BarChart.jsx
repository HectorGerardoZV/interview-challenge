import useResult from "../../../hooks/useResults"
import { useContext } from "react";
import WalletContext from "../../../context/WalletContext";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


import "./BarChart.css"
const BarChart = () => {
    const { blockchainResults } = useContext(WalletContext);
    const { results } = useResult();
    const labels = ['Perfect, thak you!', 'Meh,  I’m alive', 'Worst day ever'];
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        },
    };
    const one = results.filter(result => result.questionOne == "one").length;
    const two = results.filter(result => result.questionOne == "two").length;
    const three = results.filter(result => result.questionOne == "three").length;

    const columOne = [];
    blockchainResults.forEach(item => {
        const info = item.split(",")
        columOne.push(info[0])
    })
    const oneBlock = columOne.filter(item => item == "one").length;
    const twoBlock = columOne.filter(item => item == "two").length;
    const threeBlock = columOne.filter(item => item == "three").length;

    const dataAPI = {
        labels,
        datasets: [
            {
                label: 'How do you feel?',
                data: [one, two, three],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    "rgba(255, 206, 86, 0.2)"],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            }
        ],
    };
    const dataABI = {
        labels,
        datasets: [
            {
                label: 'How do you feel?',
                data: [oneBlock, twoBlock, threeBlock],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    "rgba(255, 206, 86, 0.2)"],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            }
        ],
    };
    return (
        <div className="barChart">
            <h2>How do you feel?</h2>
            <p>API</p>
            <Bar options={options} data={dataAPI} />
            <p>ABI</p>
            <Bar options={options} data={dataABI} />
        </div>
    )
}

export default BarChart