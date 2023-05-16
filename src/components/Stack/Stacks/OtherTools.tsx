import { RevealWrapper } from 'next-reveal'
import Image from 'next/image'
import React from 'react'
import { base } from '../../../utility/data/data'

type Props<C extends React.ElementType> = {
  tools: base
  as?: C
} & React.ComponentPropsWithoutRef<C>

export default function OtherTools<C extends React.ElementType>({
  tools,
  as,
  ...rest
}: Props<C>) {
  return (
    <RevealWrapper
      origin="bottom"
      delay={200}
      duration={1000}
      distance="500px"
      reset={false}
      mobile={false}
      className="tools flex flex-col justify-center items-center w-[90%] mx-[5%]"
    >
      <div className="stack-title">
        <h4 className="text-xl small:text-3xl">
          <span className="inline-block text-base font-caveat text-detalled">
            &#60;h3&#62;
          </span>
          Other Tools
          <span className="inline-block text-base font-caveat text-detalled">
            &#60;/h3&#62;
          </span>
        </h4>
      </div>
      <div className="flex flex-wrap items-center justify-center stack">
        {tools.map((tool) => (
          <div key={tool.titulo} className="group">
            <Image
              alt={tool.titulo}
              src={tool.imagen}
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className="object-contain w-16 h-16 m-3 transition-all duration-300 ease small:w-20 small:h-20 hover:scale-125 hover:animate-shake"
            />
            <p className="mt-5 text-xs text-center transition-all duration-300 opacity-0 sm:text-base ease group-hover:opacity-100">
              {tool.titulo}
            </p>
          </div>
        ))}
      </div>
    </RevealWrapper>
  )
}
