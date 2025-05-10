import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        {/* 상단 로고와 소셜 아이콘 */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            {/* 여기에 SVG 로고 붙여넣으면 됨 */}
            <span className="text-2xl font-bold">Company Logo</span>
          </div>
          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            {/* 소셜 아이콘들 */}
            <li><a href="#" className="text-gray-700 hover:opacity-75">Facebook</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Instagram</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">Twitter</a></li>
            <li><a href="#" className="text-gray-700 hover:opacity-75">GitHub</a></li>
          </ul>
        </div>

        {/* 링크 섹션 */}
        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-gray-900">Services</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="#" className="text-gray-700 hover:opacity-75">1on1 Coaching</a></li>
              <li><a href="#" className="text-gray-700 hover:opacity-75">Company Review</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Company</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="#" className="text-gray-700 hover:opacity-75">About</a></li>
              <li><a href="#" className="text-gray-700 hover:opacity-75">Team</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Links</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="#" className="text-gray-700 hover:opacity-75">Contact</a></li>
              <li><a href="#" className="text-gray-700 hover:opacity-75">FAQs</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium text-gray-900">Legal</p>
            <ul className="mt-6 space-y-4 text-sm">
              <li><a href="#" className="text-gray-700 hover:opacity-75">Privacy</a></li>
              <li><a href="#" className="text-gray-700 hover:opacity-75">Terms</a></li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-500">&copy; 2025. Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
