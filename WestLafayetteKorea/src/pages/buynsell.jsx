'use client';

import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { MapPinIcon, StarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

const sell = [
  {
    title: "쿠쿠 밥솥 팝니다!",
    desc: "귀국으로 인하여 급매 합니다!",
    price: 1200,
    location: "700 Sagamore Pkwy N, Lafayette, IN 47904",
    tag: "생활 가전",
    pickup: true,
    nego: true,
    image: "", // 추후 이미지 경로 추가
  },
];

export default function BuynSell() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12 max-w-md">
        <h1 className="text-3xl font-bold mb-6">사고팔고</h1>

        {sell.map((item, index) => (
          <div key={index} className="relative border p-4 rounded-lg shadow-md">
            {/* 즐겨찾기 아이콘 */}
            <div className="absolute top-3 right-3">
              <StarIcon className="h-6 w-6 text-black" />
            </div>

            {/* 이미지 + 텍스트 줄 */}
            <div className="flex gap-4">
              <div className="w-24 h-24 bg-gray-300 rounded-sm" /> {/* 이미지 자리 */}
              <div>
                <span className="bg-gray-100 px-2 py-0.5 text-sm rounded">{item.tag}</span>
                <p className="inline-block ml-2 font-medium">{item.title}</p>

                <div className="flex items-center gap-1 mt-2 text-gray-800 font-medium">
                  <CurrencyDollarIcon className="h-4 w-4" />
                  <span>${item.price}</span>
                </div>
                <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
              </div>
            </div>

            {/* 위치 */}
            <div className="flex items-center text-sm text-gray-500 mt-4">
              <MapPinIcon className="h-4 w-4 mr-1" />
              {item.location}
            </div>

            {/* 버튼 */}
            <div className="mt-4 flex gap-2">
              {item.pickup && (
                <button className="px-4 py-1 rounded-full bg-white border text-sm">픽업만</button>
              )}
              {item.nego && (
                <button className="px-4 py-1 rounded-full bg-white border text-sm">애누리 가능</button>
              )}
            </div>

            {/* Details 버튼 */}
            <div className="mt-4 text-right">
              <button className="bg-black text-white px-4 py-1 text-sm rounded">Details</button>
            </div>
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
