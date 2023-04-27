import dynamic from 'next/dynamic'

import { Josefin_Sans } from 'next/font/google'
import { Caveat } from 'next/font/google'
import Head from 'next/head'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
})
export default function Home() {
  const Layout = dynamic(() => import('../components/Layout'))
  return (
    <>
      <Head>
        <title>&#60;Renzo/&#62;</title>
        <meta
          name="description"
          content="If you are reading this: Hi! im Renzo, and this is my personal portfolio, hope you have a great day!"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Images/icon.webp" />
      </Head>

      <div
        className={`${josefin.variable} ${caveat.variable} font-josefin h-full w-full`}
      >
        <Layout />
      </div>
    </>
  )
}
