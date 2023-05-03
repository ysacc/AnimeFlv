import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directorio from "./pages/Directorio"
import "./App.css";
import "./fontawesome.css";
// import Routes from "./helpers/configRouting";

const home= `/`;
const directorio= `/directorio`;
// const Home = lazy(() => import("./pages/Home"));
// const Directorio = lazy(() => import("./pages/Directorio"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Routes>
          <Route path={home} element={<Home/>} exact />
          <Route path={directorio} element={<Directorio/>} exact />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;