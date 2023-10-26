import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>icy&hang homeee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome Dr. hang!" />
        <p className="description">Get started sooooon...</p>
        <ul className="menu">
          <li>
            <Link href="/about" passHref>
              <a>about us</a>
            </Link>
          </li>
        </ul>
      </main>

      <Footer></Footer>
    </div>
  );
}
