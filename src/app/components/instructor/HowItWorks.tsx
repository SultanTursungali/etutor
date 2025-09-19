import Image from "next/image";

const StepCard = ({
  iconSrc,
  title,
  description,
}: {
  iconSrc: string;
  title: string;
  description: string;
}) => (
  <div className="how-it-work-item text-center p-6">
    <div className="icon-main w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
      <Image src={iconSrc} alt={title} width={48} height={48} />
    </div>
    <h4 className="text-xl font-bold mt-6 mb-2">{title}</h4>
    <p className="text-secondary">{description}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="how-it-work-section section-padding">
      <div className="container mx-auto px-4">
        <div className="section-title mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">How it Works</h2>
          <p className="text-secondary mt-2">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StepCard
            iconSrc="/assets/images/svg-icon/work-1.svg"
            title="Sign Up"
            description="Aliquam rhoncus ligula est, non pulvinar elit convallis nec."
          />
          <StepCard
            iconSrc="/assets/images/svg-icon/work-2.svg"
            title="Create a Course"
            description="Aliquam rhoncus ligula est, non pulvinar elit convallis nec."
          />
          <StepCard
            iconSrc="/assets/images/svg-icon/work-3.svg"
            title="Start Teaching"
            description="Aliquam rhoncus ligula est, non pulvinar elit convallis nec."
          />
          <StepCard
            iconSrc="/assets/images/svg-icon/work-4.svg"
            title="Get Paid"
            description="Aliquam rhoncus ligula est, non pulvinar elit convallis nec."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
