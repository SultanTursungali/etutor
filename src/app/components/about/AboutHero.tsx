import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="bredadcrumb-section">
      <div className="container mx-auto px-4">
        <div className="breadcrumb-menu text-center py-12">
          <h3 className="text-4xl font-bold text-primary mb-2">About Us</h3>
          <ul className="flex justify-center items-center space-x-2 text-secondary">
            <li>
              <Link href="/" className="hover:text-orange">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
