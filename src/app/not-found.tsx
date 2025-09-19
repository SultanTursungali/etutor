import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <main className="flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="lg:order-2">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-orange">Error 404</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
                  Oops! page not found
                </h2>
                <p className="text-secondary mt-4">
                  Something went wrong. It’s look that your requested could not
                  be found. It&apos;s look like the link is broken or the page
                  is removed.
                </p>
                <Link href="/" className="button orange-btn mt-8">
                  Go Back Home
                </Link>
              </div>
            </div>
            <div className="lg:order-1">
              <Image
                src="/assets/images/thumb4042.png"
                alt="404 Not Found"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
