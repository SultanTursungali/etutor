import Link from "next/link";
import { ArrowRight } from "lucide-react";

const OrderSummary = () => {
  return (
    <aside className="amount-sidebar sticky top-8">
      <div className="about-sidebar-wrap border rounded-lg shadow-sm p-6">
        <div className="amunt-detalis space-y-3">
          <h4 className="text-xl font-bold border-b pb-3 mb-3">
            Order Summery
          </h4>
          <div className="flex justify-between text-secondary">
            <span>Subtotal</span>
            <span>$61.97 USD</span>
          </div>
          <div className="flex justify-between text-secondary">
            <span>Coupon Discount</span>
            <span>8%</span>
          </div>
          <div className="flex justify-between text-secondary">
            <span>Taxs</span>
            <span>$17.99 USD</span>
          </div>
          <div className="flex justify-between text-primary font-bold text-lg border-t pt-3 mt-3">
            <h3>Total:</h3>
            <h3>$75.00 USD</h3>
          </div>
        </div>
        <div className="amaunt-confirm-button mt-6">
          <Link
            className="button orange-btn w-full justify-center"
            href="/checkout"
          >
            Proceed to checkout
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
        <div className="coupon-code mt-6">
          <h4 className="font-semibold mb-2">Apply coupon code</h4>
          <form action="#">
            <div className="form-field relative">
              <input
                type="text"
                placeholder="Coupon code"
                className="w-full pl-4 pr-24 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 button orange-btn !py-2 !px-4">
                Apply
              </button>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
