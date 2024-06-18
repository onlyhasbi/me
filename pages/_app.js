/* eslint-disable @next/next/no-img-element */
import { useRender } from "@/hooks/useRender";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const { isRendered } = useRender();

  if (isRendered) {
    return <Component {...pageProps} />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <img
        className="block animate-spin w-8 h-8"
        src="loading.svg"
        alt="loading-icon"
      />
    </div>
  );
}
