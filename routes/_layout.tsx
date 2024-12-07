import type { PageProps } from "$fresh/server.ts";
import { Footer } from "../components/layout/Footer.tsx";
import { Header } from "../components/layout/Header.tsx";
import { SidebarArea } from "../islands/layout/Sidebar.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="flex bg-black">
      <SidebarArea />
      <div class="flex min-h-screen w-full flex-col justify-between bg-green-300">
        <Header />
        <Component />
        <Footer />
      </div>
    </div>
  );
}
