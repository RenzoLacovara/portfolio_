import React from 'react'
import dynamic from 'next/dynamic'
import Greet from '../Greet'

const Content = () => {
  const Projects = dynamic(() => import('../Projects'), {
    loading: () => <p>Loading...</p>,
  })
  const Certification = dynamic(() => import('../Certification'), {
    loading: () => <p>Loading...</p>,
  })
  const Stack = dynamic(() => import('../Stack'), {
    loading: () => <p>Loading...</p>,
  })
  const Contact = dynamic(() => import('../Contact'), {
    loading: () => <p>Loading...</p>,
  })
  const Goup = dynamic(() => import('../Utils/Goup'), {
    loading: () => <p>Loading...</p>,
  })

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
