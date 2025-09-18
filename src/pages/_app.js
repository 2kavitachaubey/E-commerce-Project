import "@/styles/globals.css";
import Layout from "@/components/Layout";
import { CartProvider } from "../lib/cartContext";
import { FormProvider } from "../lib/formContext";
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
