import useResults from "../../hooks/useResults"

import BarChart from "../charts/barChart/BarChart"
import PieChart from "../charts/pieChart/PieChart"

//Images
import Update from "../../img/updateInfo.svg"
import "./AdminPanel.css"
const AdminPanel = () => {
  const { queryAllResults } = useResults();
  const handleOnClickUpdateInfo = () => {
    queryAllResults();
  }
  return (
    <section className="adminPanel">
      <button className="adminPanel__button"
        onClick={handleOnClickUpdateInfo}
      >
        <img src={Update} alt="update information" />
      </button>
      <BarChart />
      <PieChart />
    </section>
  )
}

export default AdminPanel