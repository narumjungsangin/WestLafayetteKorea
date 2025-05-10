import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 mt-12 border-t">
      <div className="max-w-screen-lg mx-auto px-4 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold mb-2">Services</h3>
          <ul className="space-y-1">
            <li>1on1 Coaching</li>
            <li>Company Review</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            <li>About</li>
            <li>Team</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Legal</h3>
          <ul className="space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 pb-4">&copy; 2025. Company Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;