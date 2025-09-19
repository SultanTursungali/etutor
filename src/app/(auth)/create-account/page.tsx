// OneDrive\Рабочий стол\etutordiplom\src\app\(auth)\sign-in\page.tsx

import Image from "next/image";
import SignUpForm from "@/app/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <main className="register">
      <div className="register__content min-h-[calc(100vh-80px)] grid lg:grid-cols-2">
        <div className="register-left hidden lg:flex items-center justify-center bg-light-gray p-8">
          <div className="register-imgWrapper">
            <Image
              src="/assets/images/banner/computer-desk.png"
              alt="Computer Desk"
              width={600}
              height={600}
              objectFit="contain"
            />
          </div>
        </div>

        <div className="register-right flex items-center justify-center p-8">
          <div className="register-formWrapper w-full max-w-md">
            <h2 className="register-title text-3xl font-bold text-center mb-6">
              Create your free account
            </h2>
            <SignUpForm />
          </div>
        </div>
      </div>
    </main>
  );
}
