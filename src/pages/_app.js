import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { CartProvider } from "../lib/cartContext";
import { FormProvider } from "../lib/formContext";
import '../aboutUs.css';
import '../article.css';
import '../global.css';
export default function App({ Component, pageProps }) {
  return (
    <FormProvider>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </FormProvider>
  );
}
