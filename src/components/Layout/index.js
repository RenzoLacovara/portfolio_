import Content from "../Content";
import { useState, useEffect } from "react";
import SideBar from "../Sidebar";

export default function Layout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <main
        id="main"
        className={`grid grid-cols-[auto_1fr] grid-rows-[1fr 1fr 1fr] bg-secundario text-principal bg-dots bg-contain bg-repeat`}
      >
        <SideBar />
        <Content />
      </main>
    )
  );
}
