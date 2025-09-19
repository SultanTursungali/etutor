import Image from "next/image";

interface TestimonialCardProps {
  imgSrc: string;
  name: string;
  title: string;
  text: string;
}

const TestimonialCard = ({
  imgSrc,
  name,
  title,
  text,
}: TestimonialCardProps) => {
  return (
    <div className="testimonial-item text-center p-8 bg-white rounded-lg mx-3">
      <div className="testimonial-thumb mb-4">
        <Image
          src={imgSrc}
          alt={name}
          width={80}
          height={80}
          className="rounded-full mx-auto"
        />
      </div>
      <div className="testimonial-content">
        <p className="text-secondary">{text}</p>
        <div className="testimonial-info mt-4">
          <h4 className="text-lg font-bold">{name}</h4>
          <p className="text-secondary text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
