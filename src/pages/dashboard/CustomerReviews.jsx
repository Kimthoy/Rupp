import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sybil Sharp",
    comment:
      "Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!",
    image:
      "https://images.pexels.com/photos/1695738/pexels-photo-1695738.jpeg?auto=compress&cs=tinysrgb&w=600",
    productImage:
      "https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&w=100",
    product: "Contrasting sheepskin sweatshirt",
    price: "$60.00",
  },
  {
    name: "Mark G.",
    comment:
      "I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face.",
    image:
      "https://images.pexels.com/photos/3755703/pexels-photo-3755703.jpeg?auto=compress&cs=tinysrgb&w=600",
    productImage:
      "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100",
    product: "Contrasting sheepskin sweatshirt",
    price: "$60.00",
  },
];

const CustomerReviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">Customer Say!</h2>
      <p className="text-gray-600 mb-10">
        Our customers adore our products, and we constantly aim to delight them.
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow overflow-hidden w-full md:w-1/2"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <div className="p-6 text-left flex-1 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-800 mb-4">{t.comment}</p>
                <p className="font-semibold">
                  {t.name}{" "}
                  <FaCheckCircle className="inline text-green-500 ml-1" />
                </p>
              </div>
              <div className="flex items-center gap-3 border-t pt-4 mt-4">
                <img
                  src={t.productImage}
                  alt={t.product}
                  className="w-10 h-10 object-cover rounded-full"
                />
                <div>
                  <p className="font-medium">{t.product}</p>
                  <p className="text-sm text-gray-600">{t.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional carousel dots if needed */}
      <div className="flex justify-center mt-8 gap-2">
        <div className="w-3 h-3 rounded-full bg-black"></div>
        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        <div className="w-3 h-3 rounded-full bg-gray-400"></div>
      </div>
    </section>
  );
};

export default CustomerReviews;
