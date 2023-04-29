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
    <div className="row-span-3 col-start-2 col-end-3 text-3xl overflow-hidden w-full m-auto">
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
