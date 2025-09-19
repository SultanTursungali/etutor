import BlogCard from "@/app/components/ui/BlogCard";

const posts = [
  {
    href: "#",
    imgSrc: "/assets/images/blog-1.png",
    category: "Tutorials",
    title: "How to Make a Professional Website For Your Business",
    authorImg: "/assets/images/team-member-1.jpg",
    authorName: "Dianne Russell",
    date: "Jan 21, 2021",
  },
  {
    href: "#",
    imgSrc: "/assets/images/blog3.png",
    category: "Developments",
    title: "The Most Underrated Programming Languages to Learn",
    authorImg: "/assets/images/eleanorpena.png",
    authorName: "Eleanor Pena",
    date: "Jan 21, 2021",
  },
  {
    href: "#",
    imgSrc: "/assets/images/blog-3.png",
    category: "Marketing",
    title:
      "2021 Social Media Marketing Guide to Take Your Social to Next Level",
    authorImg: "/assets/images/theressa.png",
    authorName: "Theresa Webb",
    date: "Jan 21, 2021",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section pb-20">
      <div className="container mx-auto px-4">
        <div className="section-title mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">News & Articles</h2>
          <p className="text-secondary mt-2">Explore our popular courses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
