import Image from "next/image";
import Link from "next/link";

const AboutStory = () => {
  return (
    <section className="about-section section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="about-image-wrap relative">
            <div className="about-image-one">
              <Image
                src="/assets/images/about-1.png"
                alt="About us"
                width={445}
                height={545}
                className="rounded-lg"
              />
            </div>
            <div className="about-image-two absolute bottom-[-50px] right-[-30px] hidden md:block">
              <Image
                src="/assets/images/about-2.png"
                alt="About us"
                width={335}
                height={405}
                className="rounded-lg border-8 border-white"
              />
            </div>
          </div>

          <div className="about-content">
            <div className="section-title">
              <h2 className="text-3xl md:text-4xl font-bold">
                The story behind how our company was founded
              </h2>
            </div>
            <p className="text-secondary mt-4 leading-relaxed">
              It gives you a huge self-satisfaction when you look at your work
              and say, &quot;I made this!&quot;. I love that feeling after
              I&apos;m done working on something. When I lean back in my chair,
              look at the final result with a smile, and have this little
              &quot;spark joy&quot; moment. It&apos;s especially satisfying when
              I know I just made $5,000.
            </p>
            <p className="text-secondary mt-4 leading-relaxed">
              I do! And that&apos;s why I got into this field. Not for the love
              of Web Design, which I do now. But for the LIFESTYLE!
            </p>
            <Link href="/courses" className="button orange-btn mt-8">
              Browse Our Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
