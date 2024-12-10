import type { PageProps } from "$fresh/server.ts";
import { Footer } from "../components/layout/Footer.tsx";
import { Header } from "../components/layout/Header.tsx";
import { PopupScreen } from "../islands/layout/Popup.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="flex bg-black">
      <div class="flex min-h-screen w-full flex-col justify-between bg-green-300">
        <Header />
        <Component />
        <Footer />
      </div>
      <PopupScreen />
    </div>
  );
}
