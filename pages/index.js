import Layout from "../components/Layout";
import testImg from "../assets/test.jpg";

export default function Home() {
  console.log(testImg.src);
  return (
    <Layout title="icy&hang homeee">
      <main>
        <h1 className="text-3xl italic font-bold">Hello Dr. hang!</h1>
        <p className="description py-10 leading-10"><code>welcome to our pages</code></p>
        <img src={testImg.src} style={{ width: "20rem" }}></img>
      </main>
    </Layout>
  );
}
