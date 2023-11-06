import React from "react";
import Layout from "../../components/Layout";
import styles from'./Articles.module.css'

export default function index() {
  return (
    <Layout title="articles">
      <h1 className="text-3xl antialiased">hang's publications</h1>
      {/* <button className={styles.btn}>write first article</button> */}
    </Layout>
  );
}
