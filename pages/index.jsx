import Head from "next/head";
import Content from "@/components/content.component";
import { useRender } from "hooks/useRender";

export default function Home() {
  const { isRendered } = useRender();

  if (!isRendered)
    return (
      <div className="min-h-screen flex justify-center items-center">
        Load...
      </div>
    );

  return (
    <>
      <Head>
        <title>Muhammad Hasbi</title>
        <meta name="description" content="Muhammad Hasbi Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content />
      </main>
    </>
  );
}
