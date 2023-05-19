import Content from '../Content'
import SideBar from '../Sidebar'

export default function Layout() {
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
