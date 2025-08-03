import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#006699] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* Follow Us */}
        <div>
          <h4 className="text-base font-semibold mb-3">Follow Khmer24</h4>
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-white rounded-full p-1">
              <img
                src="/footer-img/facebook.png"
                alt="Facebook"
                className="w-5 h-5"
              />
            </div>
            <span>Facebook</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-1">
              <img
                src="/footer-img/youtube.png"
                alt="YouTube"
                className="w-5 h-5"
              />
            </div>
            <span>Youtube</span>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-base font-semibold mb-3">Customer Service</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Account Deletion
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Info */}
        <div>
          <h4 className="text-base font-semibold mb-3">Useful Information</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Safety Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Ad Posting Rule
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* App Download */}
        <div>
          <h4 className="text-base font-semibold mb-3">
            Download Khmer23 app for FREE
          </h4>

          <div className="space-y-2">
            <img
              src="/footer-img/appstore.png"
              alt="App Store"
              className="w-12"
            />
            <img
              src="/footer-img/playstore-removebg.png"
              alt="Google Play"
              className="w-12"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
