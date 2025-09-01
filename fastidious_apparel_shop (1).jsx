import { useState } from "react";
import { Search, ShoppingCart, User, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function FastidiousApparel() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
          Fastidious Apparel
        </motion.h1>
        <nav className="flex gap-6 text-gray-700">
          <a href="#" className="hover:text-black transition">Home</a>
          <a href="#" className="hover:text-black transition">Categories</a>
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <Search className="cursor-pointer hover:text-black" />
          <User className="cursor-pointer hover:text-black" />
          <ShoppingCart
            onClick={() => setCartOpen(!cartOpen)}
            className="cursor-pointer hover:text-black"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-4xl font-semibold mb-4">Limited Edition Tees</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Discover minimalistic yet bold apparel designed for those who seek exclusivity.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-black text-white rounded-2xl shadow hover:bg-gray-800 transition"
        >
          Shop Now
        </motion.button>
      </section>

      {/* Product Articles */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Our Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Artikel 1 */}
          <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
            <div className="h-60 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
              <img src="/mockup-model-over.png" alt="Oversize Graphic Tee" className="max-h-full" />
            </div>
            <h3 className="font-medium mb-2">Oversize Graphic Tee</h3>
            <p className="text-gray-600 text-sm mb-2">Kaos oversize dengan desain artistik yang unik dan berani.</p>
            <p className="font-semibold mb-4">Rp 180.000</p>
            <motion.button whileHover={{ scale: 1.05 }} className="w-full px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800">
              Add to Cart
            </motion.button>
          </motion.div>

          {/* Artikel 2 */}
          <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
            <div className="h-60 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
              <img src="/vapor-skull-black-B.png" alt="Vapor Skull Black" className="max-h-full" />
            </div>
            <h3 className="font-medium mb-2">Vapor Skull Black</h3>
            <p className="text-gray-600 text-sm mb-2">T-shirt hitam dengan desain skull vapor eksklusif di bagian belakang.</p>
            <p className="font-semibold mb-4">Rp 200.000</p>
            <motion.button whileHover={{ scale: 1.05 }} className="w-full px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800">
              Add to Cart
            </motion.button>
          </motion.div>

          {/* Artikel 3 */}
          <motion.div whileHover={{ scale: 1.02 }} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition">
            <div className="h-60 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
              <img src="/vapor-skull-white-B.png" alt="Vapor Skull White" className="max-h-full" />
            </div>
            <h3 className="font-medium mb-2">Vapor Skull White</h3>
            <p className="text-gray-600 text-sm mb-2">Kaos putih limited edition dengan ilustrasi skull vapor artistik.</p>
            <p className="font-semibold mb-4">Rp 200.000</p>
            <motion.button whileHover={{ scale: 1.05 }} className="w-full px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800">
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        © 2025 Fastidious Apparel. All rights reserved.
      </footer>

      {/* Cart Sidebar */}
      {cartOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 z-50 border-l border-gray-200"
        >
          <h3 className="font-semibold text-lg mb-4">Your Cart</h3>
          <p className="text-gray-500">No items in cart.</p>
        </motion.div>
      )}
    </div>
  );
}
