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
        className={`grid grid-cols-[44px_1fr] md:grid-cols-[140px_1fr] grid-rows-[1fr 1fr 1fr] text-principal`}
      >
        <SideBar />
        <Content />
      </main>
    )
  );
}
