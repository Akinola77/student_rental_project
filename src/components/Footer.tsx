import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8.09h4.52V24H.24zM8.23 8.09h4.33v2.17h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.52v-7.07c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.84-2.71 3.74V24H8.23z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "AI & Automation", href: "/services/ai-automation" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/overview" },
  { label: "Insights", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Partners", href: "/academic-alliance" },
];

export default function Footer() {
  return (
    <footer className="bg-ocu-blue text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/photos/cloudhightlogo.png"
                alt="CloudHight Consulting Logo"
                className="h-10 w-auto object-contain"
                style={{ filter: "brightness(0) invert(1)", mixBlendMode: "normal" }}
              />
              <span className="text-xl font-bold tracking-tight text-white">
                {site.name}
              </span>
            </div>
            <p className="text-sm text-gray-300 mb-6 max-w-md">{site.tagline}</p>
            <div className="flex space-x-4">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-300 whitespace-pre-line">
                  {site.address}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div className="text-center md:text-right">
              <Link
                href="/motivalogic-academy"
                className="text-sm text-white/55 hover:text-white transition-colors"
              >
                MotivaLogic Academy
              </Link>
              <p className="text-xs text-white/35 mt-1">
                Technology education & professional development
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/admin/login"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Content Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
