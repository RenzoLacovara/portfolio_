import dynamic from 'next/dynamic'
import Content from '../Content'
export default function Layout() {
  const SideBar = dynamic(() => import('../Sidebar').then((mod) => mod.default))

  return (
    <main
      id="main"
      className={`grid grid-cols-[2.8rem_1fr] grid-rows-[1fr_1fr_1fr] text-principal bg-dots bg-repeat bg-secundario`}
    >
      <SideBar />
      <Content />
    </main>
  )
}
