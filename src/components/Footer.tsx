import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import type { PageType } from "../App";
import LogoIcon from "./LogoIcon";

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

const pageHref = (page: PageType) => (page === "home" ? "/" : `/${page}`);

const Footer: React.FC<FooterProps> = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 pb-8 sm:pb-10 border-b border-blue-100">
          <div className="space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center justify-center sm:justify-start gap-2.5 group"
            >
              <div className="w-14 h-14 rounded-full bg-white border border-blue-200 shadow-sm flex items-center justify-center overflow-hidden p-1 group-hover:scale-105 transition-transform">
                <LogoIcon />
              </div>
              <span className="font-syne font-bold text-xl text-gray-800">
                Logic<span className="text-blue-500">Shell</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Where precision meets perfection — building intelligent digital
              ecosystems for modern businesses.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href="mailto:info@thelogicshell.com"
                className="flex items-center justify-center sm:justify-start gap-2.5 text-sm text-gray-500 hover:text-blue-500 transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail size={13} className="text-blue-500" />
                </span>
                <span className="break-all">info@thelogicshell.com</span>
              </a>
              <a
                href="tel:+919579074450"
                className="flex items-center justify-center sm:justify-start gap-2.5 text-sm text-gray-500 hover:text-blue-500 transition-colors group"
              >
                <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Phone size={13} className="text-blue-500" />
                </span>
                <span>+91 95790 74450</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-500 mx-auto sm:mx-0 w-fit">
                <span className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} className="text-blue-500" />
                </span>
                <span className="text-left">
                  Madhvnagar Road, Sangli
                  <br />
                  Maharashtra
                </span>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-blue-500 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.page}>
                  <Link
                    to={pageHref(link.page)}
                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-blue-500 mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.solutions.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={pageHref(link.page)}
                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h4 className="text-xs font-bold tracking-wider uppercase text-blue-500 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={pageHref(link.page)}
                    className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-blue-500 transition-colors group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-2 pt-6">
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
