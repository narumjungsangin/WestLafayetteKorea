// src/pages/LandingPage.jsx
import React from "react";
import Header from "../components/header"; // default export여야 import 가능
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: "#ffffff", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: 1 }}></main> {/* 빈 메인 콘텐츠 영역 */}
      <Footer />
    </div>
  );
};

export default LandingPage;
