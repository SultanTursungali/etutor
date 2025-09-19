import Link from "next/link";
import Image from "next/image";

const SocialButton = ({
  provider,
  children,
}: {
  provider: string;
  children: React.ReactNode;
}) => (
  <Link
    href="#"
    className="flex-1 social-medaia-box-btn flex items-center justify-center gap-2 py-3 border rounded-md hover:bg-gray-100 transition-colors"
  >
    {children}
    {provider}
  </Link>
);

const SocialAuthButtons = () => {
  return (
    <div className="form-signup text-center">
      <h6 className="text-secondary mb-4 relative before:content-[''] before:absolute before:left-0 before:top-1/2 before:w-[40%] before:h-[1px] before:bg-gray-300 after:content-[''] after:absolute after:right-0 after:top-1/2 after:w-[40%] after:h-[1px] after:bg-gray-300">
        Sign in with
      </h6>
      <div className="flex gap-4">
        <SocialButton provider="Google">
          <Image
            src="/assets/images/svg-icon/google.svg"
            alt="Google"
            width={20}
            height={20}
          />
        </SocialButton>
        <SocialButton provider="Facebook">
          <Image
            src="/assets/images/svg-icon/facebook.svg"
            alt="Facebook"
            width={20}
            height={20}
          />
        </SocialButton>
        <SocialButton provider="Apple">
          <Image
            src="/assets/images/svg-icon/apple.svg"
            alt="Apple"
            width={20}
            height={20}
          />
        </SocialButton>
      </div>
    </div>
  );
};

export default SocialAuthButtons;
