import React from "react";
import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../components/ProductCard";
import { toast } from "react-hot-toast";
const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6 text-[#006699]">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-[#006699]">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {wishlist.map((product, index) => (
            <div key={index} className="relative">
              <ProductCard product={product} />
              <button
                onClick={() => {
                  toast((t) => (
                    <span className="flex flex-col gap-2">
                      <span>
                        Remove <b>{product.name}</b> from wishlist?
                      </span>
                      <span>
                        This will delete from your wishlist then you can added
                        it more from shop.
                      </span>
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => {
                            removeFromWishlist(product.name);
                            toast.dismiss(t.id);
                            toast.success(
                              `${product.name} removed from wishlist!`
                            );
                          }}
                          className="bg-red-500 text-white px-3 py-1 text-sm rounded"
                        >
                          Yes
                        </button>
                        <button
                          onClick={() => toast.dismiss(t.id)}
                          className="bg-gray-200 px-3 py-1 text-sm rounded"
                        >
                          No
                        </button>
                      </div>
                    </span>
                  ));
                }}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
