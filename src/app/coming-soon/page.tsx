"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const ComingSoonHeader = () => (
  <header className="header-section header-four bg-transparent absolute w-full top-0 left-0 pt-4">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="main-logo">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary"
          >
            <Image
              src="/assets/images/logo-cap.png"
              alt="brand-logo"
              width={40}
              height={40}
            />
            E-Tutor
          </Link>
        </div>
        <div className="header-btn-wrap">
          <Link href="/contact" className="button div-orange-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </header>
);

const ComingSoonFooter = () => (
  <footer className="footer-bottom footer-three py-4">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center text-center">
        <div className="copywright-text">
          <p className="text-secondary">
            &copy; 2021 - Etutor. Designed by Templatecookie. All rights
            reserved
          </p>
        </div>
        <div className="footer-bottom-menu mt-4 md:mt-0">
          <ul className="flex justify-center space-x-4 text-secondary">
            <li>
              <Link href="#" className="hover:text-orange">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-orange">
                Terms & Condition
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

const CountdownTimer = () => {
  const targetDate = new Date();
  targetDate.setFullYear(targetDate.getFullYear() + 1);

  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="countdown my-12 flex flex-wrap justify-center gap-4 md:gap-8">
      <div className="countdown-item text-center">
        <div className="number text-4xl md:text-5xl font-bold text-orange">
          {timeLeft.days}
        </div>
        <span className="time_content text-secondary">Days</span>
      </div>
      <div className="countdown-item text-center">
        <div className="number text-4xl md:text-5xl font-bold text-orange">
          {formatNumber(timeLeft.hours)}
        </div>
        <span className="time_content text-secondary">Hours</span>
      </div>
      <div className="countdown-item text-center">
        <div className="number text-4xl md:text-5xl font-bold text-orange">
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className="time_content text-secondary">Mins</span>
      </div>
      <div className="countdown-item text-center">
        <div className="number text-4xl md:text-5xl font-bold text-orange">
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className="time_content text-secondary">Sec</span>
      </div>
    </div>
  );
};

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ComingSoonHeader />
      <main className="flex-grow flex items-center justify-center">
        <div className="coming-soon-content text-center container mx-auto px-4 py-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            We are coming soon
          </h2>
          <p className="text-secondary max-w-2xl mx-auto mt-4">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at. Aliquam rhoncus ligula est, non pulvinar elit
            convallis nec.
          </p>

          <CountdownTimer />

          <div className="max-w-xl mx-auto">
            <h4 className="text-xl font-semibold mb-4">
              Notify me when it&apos;s ready
            </h4>
            <form action="#" className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-6 pr-36 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <button
                type="submit"
                className="button orange-btn absolute right-2 top-1/2 -translate-y-1/2 !rounded-full"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </main>
      <ComingSoonFooter />
    </div>
  );
}
