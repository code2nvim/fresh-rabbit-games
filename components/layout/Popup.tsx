import { JSX } from "preact";

function Anchor(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      class="h-12 w-52 rounded-md border-2 border-black bg-green-600"
    />
  );
}

export function Popup() {
  return (
    <ul class="flex flex-col gap-4 rounded-xl border-2 border-white bg-green-900 p-8 text-black">
      <Anchor href="/">Home</Anchor>
      <Anchor href="/whack">Whack</Anchor>
    </ul>
  );
}
