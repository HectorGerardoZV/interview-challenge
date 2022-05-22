import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import useResults from "../../../hooks/useResults"
ChartJS.register(ArcElement, Tooltip, Legend);

import "./PieChart.css"
const PieChart = () => {
    const {results}= useResults()

    const yes = results.filter(result=>result.questionTwo=="one").length;
    const no = results.filter(result=>result.questionTwo=="two").length;

    const data = {
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


    return (
        <div className='pieChart'>
            <h2>Did you sleep weel?</h2>
            <Pie data={data} />
        </div>
    )
}

export default PieChart