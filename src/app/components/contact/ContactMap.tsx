import Image from "next/image";

const ContactMap = () => {
  return (
    <div className="contact-map-section mt-10 md:mt-20">
      <div className="w-full h-96">
        <Image
          src="/assets/images/map.png"
          alt="Location Map"
          width={1920}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactMap;
