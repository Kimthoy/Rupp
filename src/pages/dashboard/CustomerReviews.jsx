import React from "react";
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { customerReviews } from "../../data/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomerReviews = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2 text-[#006699]">Customer Say!</h2>
      <p className="text-gray-600 mb-10">
        Our customers adore our products, and we constantly aim to delight them.
      </p>

      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
        className="relative"
      >
        {customerReviews.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col md:flex-row bg-white rounded-xl shadow overflow-hidden h-full">
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
                  <p className="text-gray-800 mb-4 line-clamp-6">{t.comment}</p>
                  <p className="font-semibold">
                    {t.name}
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReviews;
