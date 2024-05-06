import "./App.css";
// import LoginForm from "./LoginPage/LoginPage";

import Content from "./layout/Content/Content";
import { Routes, Route } from "react-router-dom";
// import { SidebarData } from "./data/data";
import Sidebar1 from "./layout/Sidebar/Sidebar1";
import Portalpage from "./Portalpage/Portalpage";
import Maklumat from "./components/Pages/Maklumat/Maklumat";
import E_Kehakiman from "./components/Pages/E-Kehakiman/E_Kehakiman";
import Maklum_Balas from "./components/Pages/Maklum_Balas/Maklum_Balas";
import Penetapan from "./components/Pages/Penetapan/Penetapan";

function App() {
  return (
    <>
      {/* <div className="app"> */}
      <div className="app">
        <Sidebar1 />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/Maklumat" element={<Maklumat />} />
          <Route path="/E-Kehakiman" element={<E_Kehakiman />} />
          <Route path="/Maklum_Balas" element={<Maklum_Balas />} />
          <Route path="/penetapan" element={<Penetapan />} />
        </Routes>

        {/* <Content /> */}
        {/* <LoginForm /> */}
      </div>
    </>
  );
}

export default App;
