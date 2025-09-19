"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingCart,
  X,
  ChevronDown,
  Phone,
  Mail,
  Menu,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Grid,
  Briefcase,
  Camera,
  Code,
  PenTool,
} from "lucide-react";

interface TopDropdownProps {
  label: string;
  options: string[];
}
const TopDropdown = ({ label, options }: TopDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-secondary hover:text-primary"
      >
        {selectedOption}
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 w-32 bg-white text-primary rounded-md shadow-lg z-20">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

interface NavLinkProps {
  href: string;
  text: string;
  submenu?: { href: string; text: string }[];
}
const NavLink = ({ href, text, submenu }: NavLinkProps) => (
  <li className="group relative">
    <Link
      href={href}
      className="flex items-center gap-1 py-3 px-4 text-secondary hover:text-primary font-semibold"
    >
      {text}
      {submenu && (
        <ChevronDown
          size={16}
          className="transition-transform group-hover:rotate-180"
        />
      )}
    </Link>
    {submenu && (
      <ul className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1 z-20">
        {submenu.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-secondary hover:text-primary hover:bg-gray-50"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onClose();
      router.push(`/courses?search=${query}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-full max-w-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={24} />
        </button>
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Search for Anything
          </h3>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search courses, instructors, etc..."
              className="w-full pl-5 pr-14 py-4 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 button orange-btn !rounded-full !p-3"
            >
              <Search size={22} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const categoriesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const pagesSubmenu = [
    { href: "/about", text: "About Us" },
    { href: "/faq", text: "FAQ" },
    { href: "/instructor", text: "Instructors" },
    { href: "/cart", text: "Shopping Cart" },
    { href: "/checkout", text: "Checkout" },
  ];

  const categoryItems = [
    { icon: <PenTool size={20} />, name: "Design" },
    { icon: <Code size={20} />, name: "Development" },
    { icon: <Briefcase size={20} />, name: "Business" },
    { icon: <Camera size={20} />, name: "Photography" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${searchQuery}`);
    }
  };

  return (
    <>
      <header className="header-section bg-white shadow-sm sticky top-0 z-40">
        <div className="header-top border-b py-2 hidden lg:block">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Link href="#" className="text-secondary hover:text-primary">
                  <Facebook size={18} />
                </Link>
                <Link href="#" className="text-secondary hover:text-primary">
                  <Twitter size={18} />
                </Link>
                <Link href="#" className="text-secondary hover:text-primary">
                  <Linkedin size={18} />
                </Link>
                <Link href="#" className="text-secondary hover:text-primary">
                  <Instagram size={18} />
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <TopDropdown
                    label="English"
                    options={["English", "Spanish", "French"]}
                  />
                  <TopDropdown label="USD" options={["USD", "EUR", "GBP"]} />
                </div>
                <div className="h-5 w-px bg-gray-200"></div>
                <div className="flex items-center gap-2 text-sm">
                  <Link
                    href="/sign-in"
                    className="text-secondary hover:text-primary font-semibold"
                  >
                    Login
                  </Link>
                  <span className="text-gray-300">/</span>
                  <Link
                    href="/create-account"
                    className="text-secondary hover:text-primary font-semibold"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main-header py-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-6">
                <Link href="/" className="flex-shrink-0">
                  <Image
                    src="/assets/images/logo-cap.png"
                    alt="E-Tutor Logo"
                    width={40}
                    height={40}
                  />
                </Link>
                <div className="relative hidden lg:block" ref={categoriesRef}>
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="button div-orange-btn flex items-center gap-2 !py-2.5"
                  >
                    <Grid size={20} />
                    Categories
                  </button>
                  {isCategoriesOpen && (
                    <ul className="absolute top-full left-0 mt-2 w-60 bg-white shadow-lg rounded-md py-2 z-20">
                      {categoryItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            href="#"
                            className="flex items-center gap-3 px-4 py-2 text-secondary hover:text-primary hover:bg-gray-50"
                          >
                            {item.icon}
                            <span>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href="/courses"
                          className="block text-center px-4 py-2 mt-2 text-orange font-semibold hover:underline"
                        >
                          View All Categories
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex-grow mx-6 hidden lg:block">
                <form onSubmit={handleSearchSubmit} className="relative">
                  <input
                    type="text"
                    placeholder="What do you want to learn?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-5 pr-14 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 button orange-btn !rounded-full !p-2.5"
                  >
                    <Search size={20} />
                  </button>
                </form>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <Link href="/wishlist" className="relative p-2 hidden sm:block">
                  <Heart
                    size={24}
                    className="text-secondary hover:text-primary"
                  />
                </Link>
                <Link href="/cart" className="relative p-2">
                  <ShoppingCart
                    size={24}
                    className="text-secondary hover:text-primary"
                  />
                  <span className="absolute top-0 right-0 block w-4 h-4 text-xs text-white bg-orange rounded-full text-center">
                    3
                  </span>
                </Link>
                <div className="lg:hidden flex items-center gap-2">
                  <button onClick={() => setIsSearchOpen(true)} className="p-2">
                    <Search size={24} />
                  </button>
                  <button onClick={toggleMenu} className="p-2">
                    <Menu size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom border-t hidden lg:block">
          <div className="container mx-auto px-4">
            <nav className="main-menu flex justify-center">
              <ul className="flex items-center">
                <NavLink href="/" text="Home" />
                <NavLink href="/courses" text="Courses" />
                <NavLink href="#" text="Pages" submenu={pagesSubmenu} />
                <NavLink href="/instructor" text="Instructor" />
                <NavLink href="/about" text="About" />
                <NavLink href="/contact" text="Contact" />
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <div
        className={`offcanvas-overlay fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`offcanves-menu fixed top-0 left-0 h-full w-72 bg-white z-50 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="offcanves-menu-wrap p-4">
          <div className="offcanves-menu-head flex justify-between items-center mb-6">
            <Link href="/" className="text-2xl font-bold">
              E-Tutor
            </Link>
            <button onClick={toggleMenu} className="close-btn p-2">
              <X size={24} />
            </button>
          </div>
          <nav>
            <ul className="space-y-2"> {/*Mobile links*/} </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
