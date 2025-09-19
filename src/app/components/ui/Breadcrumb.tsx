import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  path: {
    name: string;
    href?: string;
  }[];
}

const Breadcrumb = ({ title, path }: BreadcrumbProps) => {
  return (
    <div className="bredadcrumb-section bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="breadcrumb-menu text-center py-12 md:py-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
            {title}
          </h3>
          <ul className="flex justify-center items-center space-x-2 text-secondary">
            {path.map((item, index) => (
              <li key={index} className="flex items-center">
                {item.href ? (
                  <Link href={item.href} className="hover:text-orange">
                    {item.name}
                  </Link>
                ) : (
                  <span>{item.name}</span>
                )}
                {index < path.length - 1 && <span className="mx-2">/</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
