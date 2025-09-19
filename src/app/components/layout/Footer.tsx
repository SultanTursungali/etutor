import Image from "next/image";
import Link from "next/link";

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link
      href={href}
      className="flex items-center text-white/80 hover:text-orange transition-colors"
    >
      {text}
      <svg
        className="ml-auto"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.5 8H13.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 3.5L13.5 8L9 12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="footer-section bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4">
        <div className="footer-top pb-10 border-b border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="lg:col-span-2">
              <div className="footer-textarea">
                <Link href="/">
                  <Image
                    src="/assets/images/svg-icon/logo-footer.svg"
                    alt="logo"
                    width={180}
                    height={40}
                  />
                </Link>
                <p className="text-white/80 mt-4">
                  Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
                  Donec mattis odio at.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">Explore our</h4>
              <ul className="space-y-3">
                <FooterLink href="#" text="Label" />
                <FooterLink href="#" text="Events" />
                <FooterLink href="#" text="News & Articles" />
                <FooterLink href="#" text="Sitemap" />
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <FooterLink href="/about" text="About" />
                <FooterLink
                  href="/become-instructor"
                  text="Become Instructor"
                />
                <FooterLink href="/contact" text="Contact" />
                <FooterLink href="/career" text="Career" />
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Support</h4>
              <ul className="space-y-3">
                <FooterLink href="#" text="Help Center" />
                <FooterLink href="/faq" text="FAQs" />
                <FooterLink href="#" text="Terms & Condition" />
                <FooterLink href="#" text="Privacy Policy" />
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">
                Download our app
              </h4>
              <div className="flex flex-col space-y-4">
                <Link
                  href="#"
                  className="app-btn flex items-center bg-white/10 p-2 rounded-md hover:bg-white/20"
                >
                  <Image
                    src="/assets/images/apple2.svg"
                    alt="App Store"
                    width={32}
                    height={32}
                  />
                  <div className="ml-3">
                    <p className="text-xs text-white/70">Download now</p>
                    <h5 className="text-sm font-semibold">App Store</h5>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="app-btn flex items-center bg-white/10 p-2 rounded-md hover:bg-white/20"
                >
                  <Image
                    src="/assets/images/google-play.png"
                    alt="Play Store"
                    width={32}
                    height={32}
                  />
                  <div className="ml-3">
                    <p className="text-xs text-white/70">Download now</p>
                    <h5 className="text-sm font-semibold">Play Store</h5>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; 2021 - Etutor. Designed by Templatecookie. All rights
            reserved
          </p>
          <div className="mt-4 md:mt-0">
            <div>English</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
