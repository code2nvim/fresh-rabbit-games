import { JSX } from "preact";

function Anchor(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      class="h-10 w-52 flex justify-center items-center rounded-md border border-black bg-green-600"
    />
  );
}

export function Popup() {
  return (
    <ul class="flex flex-col gap-4 rounded-xl border-2 border-white bg-green-900 p-6 text-black">
      <Anchor href="/">Home</Anchor>
      <Anchor href="/whack">Whack</Anchor>
    </ul>
  );
}
