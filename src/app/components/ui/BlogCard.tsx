import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  href: string;
  imgSrc: string;
  category: string;
  title: string;
  authorImg: string;
  authorName: string;
  date: string;
}

const BlogCard = ({
  href,
  imgSrc,
  category,
  title,
  authorImg,
  authorName,
  date,
}: BlogCardProps) => {
  return (
    <div className="blog-item bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Link href={href} className="blog-thumb block">
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={250}
          className="w-full object-cover"
        />
      </Link>
      <div className="blog-content p-5">
        <span className="blog-meta text-orange font-semibold">{category}</span>
        <h3 className="text-xl font-bold mt-2 hover:text-orange transition-colors">
          <Link href={href}>{title}</Link>
        </h3>
        <div className="blog-bottom-meta flex items-center justify-between mt-4 pt-4 border-t">
          <div className="flex items-center">
            <Image
              src={authorImg}
              alt={authorName}
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 text-secondary">{authorName}</span>
          </div>
          <span className="text-secondary text-sm">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
