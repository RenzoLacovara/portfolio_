import dynamic from 'next/dynamic'
export default function Layout() {
  const SideBar = dynamic(() => import('../Sidebar'))
  const Content = dynamic(() => import('../Content'))

  return (
    <main
      id="main"
      className={`grid grid-cols-[auto_1fr] grid-rows-[1fr 1fr 1fr] text-principal bg-dots bg-repeat bg-secundario`}
    >
      <SideBar />
      <Content />
    </main>
  )
}
