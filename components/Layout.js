import Link from "next/link";
import Head from "next/head";
import styles from "./Footer.module.css";

export default ({ children, title = "Default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/articles">
          <a>Articles</a>
        </Link>
        <Link href="/meals">
          <a>Meals</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </nav>
    </header>

    {children}

    <footer className={styles.footer}>:)))</footer>

    <style jsx>{`
      nav {
        width: 100%;
        border-bottom: 1px solid #ccc;
        line-height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      nav a {
        margin: 0 10px;
        color: #666;
        text-decoration: none;
      }
      nav a:hover {
        color: #000;
        text-decoration: underline;
      }
      nav a:focus {
        color: #000;
        text-decoration: underline;
      }
      footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #ccc;
        line-height: 40px;
      }
    `}</style>
  </div>
);
