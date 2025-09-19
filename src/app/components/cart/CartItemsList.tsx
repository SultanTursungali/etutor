import CartItem from "./CartItem";

const cartItems = [
  {
    imgSrc: "/assets/images/team12.jpg",
    title: "The Python Mega Course: Build 10 Real World Applications",
    author: "Marvin McKinney",
    rating: 4.7,
    reviewCount: "451,444",
    price: "13.99",
    oldPrice: "49.00",
  },
  {
    imgSrc: "/assets/images/team11.jpg",
    title: "The Complete 2021 Web Development Bootcamp",
    author: "Courtney Henry",
    rating: 4.8,
    reviewCount: "321,987",
    price: "89.00",
  },
  {
    imgSrc: "/assets/images/faq-thumb1.png",
    title: "Instagram Marketing 2021: Complete Guide To Instagram",
    author: "Jacob Jones",
    rating: 4.9,
    reviewCount: "199,543",
    price: "32.00",
    oldPrice: "62.00",
  },
];

const CartItemsList = () => {
  return (
    <div className="shopping-body-text">
      <div className="student-wishist-header hidden md:grid grid-cols-12 mb-4 text-secondary font-semibold">
        <p className="col-span-6">Course</p>
        <p className="col-span-3 text-center">Prices</p>
        <p className="col-span-3 text-center">Action</p>
      </div>
      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartItemsList;
