import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-1 px-6 py-16 max-w-screen-lg mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Tailwind 적용됨?</h1>
        <ul className="list-disc list-inside space-y-2 text-base">
          <li>기본 스타일 리셋 확인</li>
          <li>ul에 점 생겼으면 성공</li>
        </ul>
        <a href="#" className="inline-block mt-6 text-blue-600 underline">링크 스타일 확인</a>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;