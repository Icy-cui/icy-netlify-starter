import Layout from "../components/Layout";

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
        <p className="description py-4 leading-10"></p>
        <div className="h-auto w-96">
          <div className="chat chat-start">
            <div className="chat-bubble">
              You are the best! <br />
              Stay Hungry. Stay Foolish.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">You underestimate my power!</div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
