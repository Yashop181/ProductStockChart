import { Routes,Route } from "react-router-dom"
import AddProduct from "./AddProduct"
import ChartPage from "./ChartPage"
import DisplayProducts from "./DisplayProduct"
import Layout from "./Layout"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<AddProduct/>}/>
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/display" element={<DisplayProducts/>}/>
        <Route path="/chart" element={<ChartPage/>} />

        </Route>
      </Routes>
    </div>
  )
}

export default App
