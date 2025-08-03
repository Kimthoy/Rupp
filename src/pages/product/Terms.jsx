import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#006699]">
        Terms & Conditions
      </h1>
      <p className="mb-4 text-sm text-gray-500">
        Effective Date: August 1, 2025
      </p>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            1. General
          </h2>
          <p>
            These Terms & Conditions govern your use of our website and
            services. By accessing or placing an order, you agree to these
            terms. We may update them at any time, and your continued use
            indicates your acceptance.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            2. Products & Availability
          </h2>
          <p>
            We make every effort to display accurate product details and prices.
            However, we do not guarantee that descriptions or pricing are
            error-free. Products may be changed or discontinued at any time
            without notice.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            3. Orders & Payments
          </h2>
          <p>
            All orders must be paid in full before shipping. We accept Visa,
            Mastercard, PayPal, and other secure payment methods. You will
            receive confirmation once your order is placed.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            4. Shipping & Delivery
          </h2>
          <p>
            We ship orders within 1–3 business days. Delivery timelines and
            shipping fees are shown at checkout. We are not liable for delays
            once the package is with the courier.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            5. Returns & Refunds
          </h2>
          <p>
            Returns must be requested within 14 days of delivery. Items must be
            unused and in original packaging. Some products (e.g. final sale or
            hygiene items) may not be eligible for return. Refunds will be
            issued once the return is received and inspected.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            6. Privacy & Data Use
          </h2>
          <p>
            We value your privacy. Please read our{" "}
            <a href="/privacy" className="underline text-blue-600">
              Privacy Policy
            </a>{" "}
            to learn how your data is collected and used.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            7. Limitation of Liability
          </h2>
          <p>
            We are not responsible for indirect damages or loss from use of our
            services. Our liability is limited to the amount paid for your
            order.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            8. Governing Law
          </h2>
          <p>
            These terms are governed by the laws of your local jurisdiction,
            without regard to its conflict of law provisions.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-2 text-[#006699]">
            9. Contact Us
          </h2>
          <p>
            Have questions? Contact us at:
            <br />
            📧{" "}
            <a
              href="mailto:pheangtiger03@gmail.com"
              className="text-blue-600 underline"
            >
              pheangtiger03@gmail.com
            </a>
            <br />
            📞 +855 016 95 92 42
          </p>
        </div>

        <div className="mt-8 italic text-sm text-[#006699]">
          By using this site or placing an order, you agree to abide by these
          Terms & Conditions.
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
