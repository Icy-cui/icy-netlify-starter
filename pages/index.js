import Layout from "../components/Layout";
import testImg from "../assets/test.jpg";

export default function Home() {
  console.log(testImg.src);
  return (
    <Layout title="icy&hang homeee">
      <main>
        <h1 className="text-3xl font-bold italic">Hello Dr. hang!</h1>
        <p className="description py-10 leading-10">
          <code>Stay Hungry. Stay Foolish.</code>
        </p>
        <img src={testImg.src} style={{ width: "20rem" }}></img>
      </main>
    </Layout>
  );
}
