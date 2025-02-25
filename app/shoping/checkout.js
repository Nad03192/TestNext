// Checkout Page (pages/checkout.js)
export function Checkout() {
    const { cart, removeFromCart } = useCart();
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Checkout</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                {item.name} - ${item.price}
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Place Order
        </button>
      </div>
    );
  }
  