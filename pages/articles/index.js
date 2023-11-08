import React from "react";
import Layout from "../../components/Layout";
import styles from "./Articles.module.css";

export default function index() {
  return (
    <Layout title="articles">
      <h1 className="prose via-turquoise-500 flex justify-center bg-gradient-to-t from-pink-400 to-purple-400 bg-clip-text py-8 text-center font-mono text-4xl font-bold text-transparent antialiased">
        Hang's publications
      </h1>
      <div className="flex justify-center">
        <div className="my-8 max-w-3xl rounded-2xl border-2 border-dotted border-violet-300">
          <ul className="list-outside list-disc px-12 py-12 leading-7 underline decoration-fuchsia-500/30 underline-offset-4">
            <li className="font-mono text-base duration-300 hover:scale-105 hover:ease-in-out">
              <a href="https://www.sciencedirect.com/science/article/pii/S0166516223001180">
                Tertiary oil recovery and CO2 storage from laboratory injection
                of CO2 or water-saturated CO2 into a sandstone core Author links
                open overlay panel
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <button className={styles.btn}>write first article</button> */}
    </Layout>
  );
}
