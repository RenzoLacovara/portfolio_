import React from 'react'
import dynamic from 'next/dynamic'

const Content = () => {
  const Greet = dynamic(() => import('../Greet'))
  const Projects = dynamic(() => import('../Projects'))
  const Certification = dynamic(() => import('../Certification'))
  const Stack = dynamic(() => import('../Stack'))
  const Contact = dynamic(() => import('../Contact'))
  const Goup = dynamic(() => import('../Goup'))

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
