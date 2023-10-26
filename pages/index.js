import Layout from '../components/Layout'
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="icy&hang homeee">
      <main>
        <h1 className="title">Welcome Dr hang!</h1>
        <p className="description">Get started sooooon...</p>
        <ul className="menu">
          <li>
            <Link href="/about" passHref>
              <a>about us</a>
            </Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
