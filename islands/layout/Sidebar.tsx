import { signal } from "@preact/signals";

const showSidebar = signal(false);

export function SidebarArea() {
  return <>{showSidebar.value && "Sidebar"}</>;
}

export function SidebarButton() {
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
