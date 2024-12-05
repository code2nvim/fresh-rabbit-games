import type { PageProps } from "$fresh/server.ts";
import { Footer } from "../components/layout/Footer.tsx";
import { Header } from "../components/layout/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}
