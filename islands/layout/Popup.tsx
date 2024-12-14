import { signal } from "@preact/signals";
import { Popup } from "../../components/layout/Popup.tsx";

// TODO: true -> false after testing
const showSidebar = signal(true);

export function PopupScreen() {
  const turnOff = () => (showSidebar.value = false);

  return (
    <>
      {showSidebar.value && (
        <div
          onClick={turnOff}
          class="absolute flex size-full flex-col items-center bg-black bg-opacity-90 p-52"
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
