import { SidebarButton } from "../../islands/layout/Sidebar.tsx";

export function Header() {
  return (
    <header class="grid grid-cols-3 bg-green-600 p-1">
      <SidebarButton />
      <span class="flex items-center justify-center">Header</span>
      {/* ... */}
    </header>
  );
}
