import { Link , Outlet } from "react-router-dom"
const Layout = () => {
  return (
    <div>
      <div className="disaa">
      <Link to="/add">AddProduct</Link>
      <Link to="/display">DisplayProduct</Link>
      <Link to="/chart">ChartPage </Link>
      </div>

      <Outlet/>
    </div>
  )
}

export default Layout

