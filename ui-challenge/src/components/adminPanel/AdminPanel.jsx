import { useContext } from "react"
import useResults from "../../hooks/useResults"
import WalletContext from "../../context/WalletContext"

import BarChart from "../charts/barChart/BarChart"
import PieChart from "../charts/pieChart/PieChart"

//Images
import Update from "../../img/updateInfo.svg"
import "./AdminPanel.css"
const AdminPanel = () => {
  const { queryAllResults } = useResults();
  const { getHealthDataBlockchain } = useContext(WalletContext);

  const handleOnClickUpdateInfo = () => {
    queryAllResults();
    getHealthDataBlockchain();
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