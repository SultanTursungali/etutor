"use client"; 

import { useState } from "react";
import Image from "next/image";

const NewCardForm = () => (
  <div className="contact-wrap mt-6 border-t pt-6">
    <form action="#" className="space-y-4">
      <div className="form-field">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name on Card
        </label>
        <input
          type="text"
          placeholder="Enter name on card"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
        />
      </div>
      <div className="form-field">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <div className="relative">
          <span className="icon absolute left-3 top-1/2 -translate-y-1/2">
            <Image
              src="/assets/images/svg-icon/CreditCard3.svg"
              alt="card icon"
              width={24}
              height={24}
            />
          </span>
          <input
            type="text"
            placeholder="**** **** **** ****"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            MM / YY
          </label>
          <input
            type="text"
            placeholder="MM / YY"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
        <div className="form-field">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVC
          </label>
          <input
            type="text"
            placeholder="Security Code"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
        </div>
      </div>
      <div className="form-check pt-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox rounded text-orange focus:ring-orange/50"
            defaultChecked
          />
          <span className="text-sm text-secondary">
            Remember this card, save it on my card list
          </span>
        </label>
      </div>
    </form>
  </div>
);

const PaymentMethods = () => {
  const [selectedMethod, setSelectedMethod] = useState("new_card");

  return (
    <div className="contact-wrap mb-0 mt-6">
      <div className="plans space-y-4">
        <label className="block">
          <input
            type="radio"
            name="payment_method"
            value="visa"
            checked={selectedMethod === "visa"}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="hidden"
          />
          <div
            className={`plan-content p-4 border rounded-lg cursor-pointer ${
              selectedMethod === "visa"
                ? "border-orange ring-2 ring-orange"
                : "border-gray-300"
            }`}
          >
            <Image
              src="/assets/images/svg-icon/visa.svg"
              alt="Visa"
              width={84}
              height={28}
            />
          </div>
        </label>

        <label className="block">
          <input
            type="radio"
            name="payment_method"
            value="mastercard"
            checked={selectedMethod === "mastercard"}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="hidden"
          />
          <div
            className={`plan-content p-4 border rounded-lg cursor-pointer ${
              selectedMethod === "mastercard"
                ? "border-orange ring-2 ring-orange"
                : "border-gray-300"
            }`}
          >
            <Image
              src="/assets/images/svg-icon/mastercard.svg"
              alt="Mastercard"
              width={48}
              height={32}
            />
          </div>
        </label>

        <label className="block">
          <input
            type="radio"
            name="payment_method"
            value="paypal"
            checked={selectedMethod === "paypal"}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="hidden"
          />
          <div
            className={`plan-content p-4 border rounded-lg cursor-pointer ${
              selectedMethod === "paypal"
                ? "border-orange ring-2 ring-orange"
                : "border-gray-300"
            }`}
          >
            <Image
              src="/assets/images/svg-icon/paypal.svg"
              alt="PayPal"
              width={48}
              height={32}
            />
            <p className="text-secondary text-sm">
              You will be redirected to the PayPal site after reviewing your
              order.
            </p>
          </div>
        </label>

        <label className="block">
          <input
            type="radio"
            name="payment_method"
            value="new_card"
            checked={selectedMethod === "new_card"}
            onChange={(e) => setSelectedMethod(e.target.value)}
            className="hidden"
          />
          <div
            className={`plan-content p-4 border rounded-lg cursor-pointer ${
              selectedMethod === "new_card"
                ? "border-orange ring-2 ring-orange"
                : "border-gray-300"
            }`}
          >
            New Payment Card
          </div>
        </label>
      </div>

      {selectedMethod === "new_card" && <NewCardForm />}
    </div>
  );
};

export default PaymentMethods;
