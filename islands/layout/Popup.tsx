import { signal } from "@preact/signals";
import { Popup } from "../../components/layout/Popup.tsx";

const showSidebar = signal(false);

export function PopupScreen() {
  const turnOff = () => (showSidebar.value = false);

  return (
    <>
      {showSidebar.value && (
        <div
          onClick={turnOff}
          class="absolute flex size-full items-center justify-center bg-black text-white opacity-90"
        >
          <Popup />
        </div>
      )}
    </>
  );
}

export function PopupButton() {
  const toggle = () => (showSidebar.value = !showSidebar.value);

  return (
    <div>
      <button
        onClick={toggle}
        class="flex justify-start rounded border-gray-600 bg-white p-1"
      >
        Toggle
      </button>
    </div>
  );
}
