// OneDrive\Рабочий стол\etutordiplom\src\app\cart\page.tsx

import Breadcrumb from "@/app/components/ui/Breadcrumb";
import CartItemsList from "@/app/components/cart/CartItemsList";
import OrderSummary from "@/app/components/cart/OrderSummary";

export default function CartPage() {
  const breadcrumbPath = [
    { name: "Home", href: "/" },
    { name: "Shopping Cart" },
  ];

  return (
    <>
      <Breadcrumb title="Shopping Cart" path={breadcrumbPath} />
      <div className="public-shopping-cart-section section-padding">
        <div className="container mx-auto px-4">
          <div className="student-title">
            <h2 className="text-3xl font-bold mb-8">Shopping Cart (3)</h2>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <CartItemsList />
            </div>
            <div className="lg:col-span-4">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
