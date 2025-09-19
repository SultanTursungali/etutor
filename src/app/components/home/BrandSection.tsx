import Image from "next/image";

const brands = [
  { src: "/assets/images/brand/brand-1.png", alt: "Brand 1" },
  { src: "/assets/images/brand/brand-2.png", alt: "Brand 2" },
  { src: "/assets/images/brand/brand-3.png", alt: "Brand 3" },
  { src: "/assets/images/brand/brand-4.png", alt: "Brand 4" },
  { src: "/assets/images/brand/brand.png", alt: "Brand 5" },
];

const BrandSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <Image src={brand.src} alt={brand.alt} width={130} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
