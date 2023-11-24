import Layout from "../components/Layout";
// import testImg from "../assets/test.jpg";
import bgImg from "../assets/bg-img.jpeg";

export default function Home() {
  return (
    <Layout title="icy&hang homeee">
      <main>
        <div style={{ width: "20rem", height: "5rem" }}>
          <div className="diff aspect-[14/3]">
            <div className="diff-item-1">
              <div className="grid place-content-center bg-accent text-2xl font-black text-secondary-content">
                Hello, Dr Hangggg!
              </div>
            </div>
            <div className="diff-item-2">
              <div className="grid place-content-center bg-base-200 text-2xl font-black">
                Hello, Hang!
              </div>
            </div>
            <div className="diff-resizer"></div>
          </div>
        </div>
        <p className="description py-10 leading-10">
          <code>Stay Hungry. Stay Foolish.</code>
        </p>
        <img src={bgImg.src} style={{ width: "30rem" }}></img>
      </main>
    </Layout>
  );
}
