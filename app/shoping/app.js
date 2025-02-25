
// _app.js to wrap the app with CartProvider
import { CartProvider } from "../components/Shop";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}