import React from 'react'
import dynamic from 'next/dynamic'

const Content = () => {
  const Greet = dynamic(() => import('../Greet'))
  const Projects = dynamic(() =>
    import('../Projects').then((mod) => mod.default)
  )
  const Certification = dynamic(() =>
    import('../Certification').then((mod) => mod.default)
  )
  const Stack = dynamic(() => import('../Stack').then((mod) => mod.default))
  const Contact = dynamic(() => import('../Contact').then((mod) => mod.default))
  const Goup = dynamic(() => import('../Utils/Goup').then((mod) => mod.default))

  return (
    <div
      id="content"
      className="w-full col-start-2 col-end-3 row-span-3 m-auto overflow-hidden text-3xl"
    >
      <Greet />
      <Projects />
      <Certification />
      <Stack />
      <Contact />
      <Goup />
    </div>
  )
}

export default Content
