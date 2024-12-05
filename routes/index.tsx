import { useSignal } from "@preact/signals";
import { Fresh } from "../components/Fresh.tsx";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);

  return (
    <div class="flex min-h-screen flex-col items-center bg-green-300 py-8">
      <Fresh />
      <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
      <p class="my-4">
        Try updating this message in the
        <code class="mx-2">./routes/index.tsx</code> file, and refresh.
      </p>
      <Counter count={count} />
    </div>
  );
}
