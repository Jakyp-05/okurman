import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import "./css/base/_all.css"


function App() {
  return <>
  <Routes>
    
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
    </Route>
  </Routes>
  </>;
}

export default App;
