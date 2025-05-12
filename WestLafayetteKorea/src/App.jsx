import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BuynSell from "./pages/buynsell"; // 정확한 파일 경로와 대소문자 확인
// import BoardWrite from './pages/BoardWrite';
// import BoardList from './pages/BoardList';
// import Home from './pages/Home';
// import BoardDetail from './pages/BoardDetail';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/buynsell" element={<BuynSell />} />
    </Routes>
  );
};

export default App;
