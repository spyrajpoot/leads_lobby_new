import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-sm py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/final-logo.png"
                alt="Leads Lobby Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              
            </div>
            <p className="text-gray-400 text-blue-600 leading-relaxed">
              Transforming businesses through innovative digital solutions and data-driven strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/Home" className="text-gray-400 hover:text-blue-600transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600">Our Services</h3>
            <ul className="space-y-3 text-gray-400 text-blue-600">
              <li>Web Development</li>
              <li>App Development</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
              <li>Graphics Designing</li>
              <li>Video Editing</li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600">Connect With Us</h3>
            <ul className="space-y-3 text-gray-400 text-blue-600 mb-6">
              <li>📧 info@leadslobby.com</li>
              <li>📱 +92 300 1234567</li>
              <li>📍 Lahore, Punjab, Pakistan</li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/leadslobby" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all overflow-hidden"
                aria-label="Facebook"
              >
                <img 
                  src="/FB.png" 
                  alt="Facebook"
                  className="w-10 h-10 object-contain"
                />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-all overflow-hidden"
                aria-label="Instagram"
              >
                <img 
                  src="/insta.png" 
                  alt="Instagram"
                  className="w-10 h-10 object-contain"
                />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-all overflow-hidden"
                aria-label="Twitter"
              >
                <img 
                  src="/twitter.jpg" 
                  alt="Twitter"
                  className="w-10 h-10 object-contain"
                />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all overflow-hidden"
                aria-label="TikTok"
              >
                <img 
                  src="/tiktok.png" 
                  alt="TikTok"
                  className="w-10 h-10 object-contain"
                />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Leads Lobby. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}