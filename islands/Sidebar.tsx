import { signal } from "@preact/signals";
import { Sidebar } from "../components/Sidebar.tsx";

const showSidebar = signal(false);

export function SidebarButton() {
  const toggle = () => showSidebar.value = !showSidebar.value;
  return <button onClick={toggle} class="bg-black">SidebarButton</button>;
}

export function SidebarArea() {
  return <>{showSidebar.value && <Sidebar />}</>;
}
