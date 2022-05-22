
import BarChart from "../charts/barChart/BarChart"
import PieChart from "../charts/pieChart/PieChart"
import "./AdminPanel.css"
const AdminPanel = () => {

  return (
    <section className="adminPanel">
      <BarChart />
      <PieChart />
    </section>
  )
}

export default AdminPanel