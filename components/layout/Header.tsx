import { PopupButton } from "../../islands/layout/Popup.tsx";

export function Header() {
  return (
    <header class="grid grid-cols-3 bg-green-600 p-1">
      <PopupButton />
      <span class="flex items-center justify-center">Header</span>
      {/* ... */}
    </header>
  );
}
