import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-light-gray py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Start your favourite course &{" "}
              <span className="text-orange">enjoy learning</span>
            </h1>
            <p className="mt-6 text-lg text-secondary">
              A new way to learn. Access to 25,000+ online courses and a
              selection of the world&apos;s best universities.
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <form action="#" className="flex-grow">
                <div className="form-searchbox relative">
                  <span className="icon absolute left-4 top-1/2 -translate-y-1/2">
                    <Image
                      src="/assets/images/svg-icon/search.svg"
                      alt="search"
                      width={20}
                      height={20}
                    />
                  </span>
                  <input
                    type="text"
                    placeholder="What do you want to learn"
                    className="w-full pl-12 pr-32 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 button orange-btn"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/assets/images/hero-thumb-1.jpg"
              alt="Hero Image"
              width={600}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
