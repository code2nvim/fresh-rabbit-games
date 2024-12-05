import { JSX } from "preact";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="aspect-square w-10 rounded border-2 border-gray-600 bg-white hover:bg-gray-300"
    />
  );
}
