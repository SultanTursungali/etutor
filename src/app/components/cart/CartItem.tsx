import Image from "next/image";
import Link from "next/link";
import { Star, X } from "lucide-react";

interface CartItemProps {
  imgSrc: string;
  title: string;
  author: string;
  rating: number;
  reviewCount: string;
  price: string;
  oldPrice?: string;
}

const CartItem = ({
  imgSrc,
  title,
  author,
  rating,
  reviewCount,
  price,
  oldPrice,
}: CartItemProps) => {
  return (
    <div className="faq-review-item grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-lg shadow-sm border">
      {/* Course Info */}
      <div className="faq-review-item-content col-span-12 md:col-span-6 flex items-start gap-4">
        <Link href="/single-course" className="faq-review-thumb flex-shrink-0">
          <Image
            src={imgSrc}
            alt={title}
            width={120}
            height={80}
            className="rounded-md object-cover"
          />
        </Link>
        <div className="faq-review-data">
          <h5 className="font-bold text-primary hover:text-orange transition-colors">
            <Link href="/single-course">{title}</Link>
          </h5>
          <p className="text-sm text-secondary mt-1">Course by: {author}</p>
          <div className="flex items-center gap-1 text-sm mt-1">
            <span className="font-bold text-amber-500">
              {rating.toFixed(1)}
            </span>
            <Star className="w-4 h-4 text-orange fill-orange" />
            <span className="text-secondary">({reviewCount} Review)</span>
          </div>
        </div>
      </div>

      <div className="amount col-span-6 md:col-span-3 text-center">
        <span className="text-lg font-bold text-orange">${price}</span>
        {oldPrice && <del className="text-secondary ml-2">${oldPrice}</del>}
      </div>

      <div className="move-to-wishlist col-span-6 md:col-span-3 text-center flex flex-col items-center gap-2">
        <button className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-semibold">
          <X size={16} /> Remove
        </button>
        <Link
          href="#"
          className="text-sm text-secondary hover:text-orange font-semibold"
        >
          Move to Wishlist
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
