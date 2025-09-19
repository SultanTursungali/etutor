import Link from "next/link";

const JoinSection = () => {
  return (
    <section
      className="join-our-team-section bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/assets/images/become-instructor.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <div className="join-our-team-content text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">Join Our Team</h2>
          <p className="max-w-2xl mx-auto mt-4">
            Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
            mattis odio at.
          </p>
          <Link href="/create-account" className="button orange-btn mt-8">
            Join as a Teacher
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
