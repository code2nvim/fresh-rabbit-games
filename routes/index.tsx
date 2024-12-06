import { useSignal } from "@preact/signals";
import { Fresh } from "../components/Fresh.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);

  return (
    <main class="flex flex-grow flex-col items-center">
      <Fresh />
      <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
      <p class="my-4">
        Try updating this message in the
        <code class="mx-2">./routes/index.tsx</code> file, and refresh.
      </p>
      <Counter count={count} />
    </main>
  );
}
