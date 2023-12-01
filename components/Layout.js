import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
import { themeChange } from "theme-change";

export default function Layout({ children, title = "Default title" }) {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <div className="navbar bg-base-100">
          <div className="navbar-start ml-4">
            <div className="dropdown"></div>
            <a className="btn btn-ghost text-xl">Icy & Hang's HoMe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="link-hover link" href="/">
                  Home
                </a>
              </li>
              <li className="px-8">
                <a className="link-hover link" href="/articles">
                  Articles
                </a>
              </li>
              <li>
                <a className="link-hover link" href="/timeline">
                  Timeline
                </a>
              </li>
              <li className="px-8">
                <a className="link-hover link" href="/about">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end mr-6">
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="synthwave"
                data-toggle-theme="dark,light"
                data-act-class="ACTIVECLASS"
                className="theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content"
              />
              <svg
                className="col-start-1 row-start-1 fill-base-100 stroke-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 fill-base-100 stroke-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
        {/* <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/articles">
            <a>Articles</a>
          </Link>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </nav> */}
      </header>

      {children}

      <footer className="footer flex h-24 w-full items-center justify-center border-t-black bg-base-100 text-center">
        :)))
      </footer>

      <style jsx>{`
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
}
