// OneDrive\Рабочий стол\etutordiplom\src\app\checkout\page.tsx

import Breadcrumb from "@/app/components/ui/Breadcrumb";
import PaymentMethods from "@/app/components/checkout/PaymentMethods";
import OrderSummary from "@/app/components/cart/OrderSummary"; // Reusing from cart

export default function CheckoutPage() {
  const breadcrumbPath = [
    { name: "Home", href: "/" },
    { name: "Shopping Cart", href: "/cart" },
    { name: "Checkout" },
  ];

  return (
    <>
      <Breadcrumb title="Checkout" path={breadcrumbPath} />
      <div className="course-gift-section section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7">
              <div className="course-gift-wrap">
                <div className="section-title">
                  <h2 className="text-3xl font-bold">Payment Method</h2>
                </div>
                <PaymentMethods />
              </div>
            </div>

            <div className="lg:col-span-5">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
