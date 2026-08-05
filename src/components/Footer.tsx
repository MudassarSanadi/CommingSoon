import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";
import type { PageType } from "../App";
import LogoIcon from './LogoIcon'

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const footerLinks = {
    company: [
      { label: "About Us", page: "about" as PageType },
      { label: "Our Team", page: "team" as PageType },
      { label: "Contact", page: "contact" as PageType },
    ],
    solutions: [
      { label: "Business Software", page: "solutions" as PageType },
      { label: "CRM Systems", page: "solutions" as PageType },
      { label: "ERP Platforms", page: "solutions" as PageType },
      { label: "Industry Solutions", page: "industry" as PageType },
    ],
    services: [
      { label: "Web Development", page: "services" as PageType },
      { label: "Mobile Apps", page: "services" as PageType },
      { label: "Cloud Architecture", page: "services" as PageType },
      { label: "SaaS Products", page: "services" as PageType },
    ],
  };

  return (
    <footer className="bg-white border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-blue-100">
          <div className="space-y-3 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5">
              <div className="w-14 h-14 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center overflow-hidden p-1">
                <LogoIcon />
              </div>
              <span className="font-syne font-bold text-xl text-gray-800">
                Logic<span className="text-blue-500">Shell</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Where precision meets perfection — building intelligent digital
              ecosystems for modern businesses.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-500">
                <Mail size={14} className="text-blue-400 flex" />
                <span className="break-all">info@thelogicshell.com</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-500">
                <Phone size={14} className="text-blue-400 flex" />
                <span>+91 95790 74450</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-gray-500">
                <MapPin size={14} className="text-blue-400 flex" />
                <span> Madhvnagar Road, Sangli<br />
                      Maharashtra</span>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-blue-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-blue-500 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-blue-500 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => setCurrentPage(link.page)}
                    className="text-sm text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6">
          <div className="text-xs text-gray-400 flex items-center gap-1 flex-wrap justify-center text-center">
            © 2025 Logic Shell LLP. All rights reserved.
            <span className="hidden sm:inline mx-1">·</span>
            <span className="inline-flex items-center gap-1">
              Crafted with{" "}
              <Heart size={12} className="text-red-400 fill-red-400" /> by Shiv
              Infotech
            </span>
          </div>
          <div className="text-xs text-gray-400 italic text-center">
            where precision meets perfection
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
