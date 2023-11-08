import React from "react";
import Layout from "../../components/Layout";

export default function index() {
  return (
    <Layout title="About us">
      <div className="min-h-screen bg-gray-50">
        <div className="py-auto mx-auto my-10 max-w-2xl bg-cover sm:py-3 sm:px-2">
          <div className="group relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
            <div className="items-top relative flex justify-start space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5">
              <div className="space-y-1z">
                <h2 className="py-6 text-3xl font-bold underline decoration-indigo-500/30 underline-offset-4">
                  Who are we:
                </h2>
                <p className="pr-4 leading-7 text-slate-800">
                  Welcome to our blog, I'm Icy and my bf is Hang. <br></br>We
                  enjoy our life, making coffee, cooking, coding, and also proud
                  to be an amateur in photography after we get our new FUJI
                  camera.
                </p>
                <h2 className="py-6 text-3xl font-bold underline decoration-sky-500/30 underline-offset-4">
                  Dev Gears Hardware:
                </h2>
                <div>
                  <ul className="list-inside list-disc pr-4 leading-7">
                    <li>MacBook 14" 2023</li>
                    <li>KeyBoard: Niz</li>
                    <li>Mouse: Logitech MX master3s black</li>
                    <li>OS: macOS 13.3</li>
                    <li>Editor: VS Code + Android Studio +XCode </li>
                    <li>Terminal: ohmyzsh </li>
                    <li>Browser: Chrome</li>
                    <li>KeyMap: Vim</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
