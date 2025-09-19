import Link from "next/link";

const CareerCTA = () => {
  return (
    <section className="cta-section section-padding bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Can&apos;t find a suitable position?
          </h2>
          <p className="text-secondary mt-2">
            Send your resume at{" "}
            <Link
              href="mailto:career@etutor.com"
              className="text-orange hover:underline"
            >
              career@etutor.com
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerCTA;
