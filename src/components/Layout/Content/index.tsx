import React from 'react'
import dynamic from 'next/dynamic'

const Content = () => {
  const Greet = dynamic(() => import('../Content/Greet'))
  const Projects = dynamic(() => import('../Content/Projects'))
  const Certification = dynamic(() => import('../Content/Certification'))
  const Stack = dynamic(() => import('../Content/Stack'))
  const Contact = dynamic(() => import('../Content/Contact'))
  const Goup = dynamic(() => import('../../Utils/Goup'))

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
