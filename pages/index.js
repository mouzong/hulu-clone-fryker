import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu | Fryker 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/**Header section */}
      <Header />
    </div>
  );
}
