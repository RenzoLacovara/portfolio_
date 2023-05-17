import dynamic from 'next/dynamic'
export default function Layout() {
  const SideBar = dynamic(() => import('../Layout/Sidebar'))
  const Content = dynamic(() => import('../Layout/Content'))

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
