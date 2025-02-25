import { useCart } from "../components/cart.js";

export default function Shop() {
    const { addToCart } = useCart();
    const products = [
      { id: 1, name: "Product A", price: 20 },
      { id: 2, name: "Product B", price: 30 },
      { id: 3, name: "Product C", price: 40 },
    ];
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Shop</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <h2 className="text-xl">{product.name}</h2>
              <p>${product.price}</p>
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <Link href="/checkout" className="block mt-4 text-blue-500">
          Go to Checkout
        </Link>
      </div>
    );
  }
  