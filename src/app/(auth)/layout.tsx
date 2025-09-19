// OneDrive\Рабочий стол\etutordiplom\src\app\(auth)\layout.tsx

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-tutor Authentication",
  description: "Sign in or create an account",
};

const AuthHeader = () => {
  return (
    <header className="header-section header-four bg-white py-4 shadow-sm">
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
          <div className="header-btn-wrap flex items-center space-x-4">
            <p className="hidden sm:block">Don&apos;t have an Account?</p>
            <Link
              className="button button--md div-orange-btn"
              href="/create-account"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <AuthHeader />
      <main>{children}</main>
    </div>
  );
}
