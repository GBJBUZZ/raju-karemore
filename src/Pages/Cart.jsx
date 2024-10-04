import { useState, useEffect, useCallback } from "react";
import { X, Minus, Plus } from "lucide-react";
import CartHero from "../CartCoponent/CartHero";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotals = useCallback(() => {
    const newSubtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setSubtotal(newSubtotal);
    setTotal(newSubtotal); // Apply discounts here if any
  }, [cartItems]);

  useEffect(() => {
    // Fetch cart items from backend
    fetchCartItems();
  }, []);

  useEffect(() => {
    calculateTotals();
  }, [calculateTotals]);

  const fetchCartItems = async () => {
    // Simulating API call with the provided data
    const items = [
      {
        id: 1,
        name: "Nordic Chair",
        price: 50.0,
        quantity: 1,
        image: one, // Replace with actual image path
        category: "pdf",
      },
      {
        id: 2,
        name: "Kruzo Aero Chair",
        price: 78.0,
        quantity: 1,
        image: two, // Replace with actual image path
        category: "audio book",
      },
      {
        id: 3,
        name: "Ergonomic Chair",
        price: 43.0,
        quantity: 1,
        image: three, // Replace with actual image path
        category: "ppt",
      },
      {
        id: 4,
        name: "Stylish Table",
        price: 100.0,
        quantity: 1,
        image: four, // Replace with actual image path
        category: "project",
      },
      {
        id: 5,
        name: "Office Desk",
        price: 150.0,
        quantity: 1,
        image: five, // Replace with actual image path
        category: "pdf",
      },
      {
        id: 6,
        name: "Gaming Chair",
        price: 200.0,
        quantity: 1,
        image: six, // Replace with actual image path
        category: "audio book",
      },
    ];
    setCartItems(items);
  };

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = async (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyCoupon = async () => {
    // Apply coupon logic
  };

  const proceedToCheckout = () => {
    // Proceed to checkout logic
  };

  return (
    <div>
      <CartHero />
      <div style={{ paddingLeft: "110px", paddingRight: "110px" }}>
        <div className="container mx-auto rounded-lgs px-20 bg-white py-20">
          <table className="w-full my-20">
            <thead>
              <tr className="border-b">
                <th className="text-left pb-4">Image</th>
                <th className="text-left pb-4">Product</th>
                <th className="text-left pb-4">Price</th>
                <th className="text-left pb-4">Quantity</th>
                <th className="text-left pb-4">Total</th>
                <th className="text-left pb-4">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td className="py-4">{item.name}</td>
                  <td className="py-4">${item.price.toFixed(2)}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      <X size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex justify-between">
            <div className="p-5">
              <button className="bg-gray-800 text-white px-7 py-3 rounded-full mr-5">
                Update Cart
              </button>
              <button className="bg-gray-800 text-white px-7 py-3 rounded-full">
                Continue Shopping
              </button>
            </div>
            <div className="w-1/3 px-10 mt-8">
              <h2 className="text-xl font-bold mb-4">CART TOTALS</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                onClick={proceedToCheckout}
                className="bg-gray-800 text-white px-4 py-2 rounded-full w-full"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold mb-2">Coupon</h3>
            <p className="mb-2">Enter your coupon code if you have one.</p>
            <div className="flex">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon Code"
                className="border p-2 mr-2 flex-grow"
              />
              <button
                onClick={applyCoupon}
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;