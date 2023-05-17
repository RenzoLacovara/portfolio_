import Image from 'next/image'
import React from 'react'
import { RevealWrapper } from 'next-reveal'
import { base } from '../../../../../utility/data/data'
type Props<C extends React.ElementType> = {
  tools: base
  as?: C
  name: string
  reverse: boolean
} & React.ComponentPropsWithoutRef<C>

export default function Tools<C extends React.ElementType>({
  tools,
  as,
  name,
  reverse,
  ...rest
}: Props<C>) {
  return (
    <RevealWrapper
      origin={reverse ? 'right' : 'left'}
      delay={reverse ? 400 : 200}
      duration={1000}
      easing="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      distance="500px"
      reset={false}
      mobile={false}
      className="circle-container u-grid-center grid place-items-center h-[calc(var(--orbit-radius)*2.55)] w-[calc(var(--orbit-radius)*2.55)]"
    >
      <div className="header-stack contents">
        <h4 className="text-xl small:text-3xl">
          <span className="inline-block text-base font-caveat text-detalled">
            &#60;h3&#62;
          </span>
          {name}
          <span className="inline-block text-base font-caveat text-detalled">
            &#60;/h3&#62;
          </span>
        </h4>
      </div>
      <ul className="list-none circle-list contents ">
        {tools.map((tool) => (
          <li
            key={tool.titulo}
            className={`circle-item text-center ${
              reverse ? 'animate-orbitReverse' : 'animate-orbit'
            } animate-orbit group`}
          >
            <div className="w-16 h-16 small:w-20 small:h-20">
              <Image
                alt={tool.titulo}
                src={tool.imagen}
                width={100}
                height={100}
                className="object-contain w-16 h-16 transition-all duration-300 icon ease small:w-20 small:h-20 hover:scale-125 hover:animate-shake "
              />
              <p className="mt-5 text-xs text-center transition-all duration-300 opacity-0 sm:text-base ease group-hover:opacity-100">
                {tool.titulo}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </RevealWrapper>
  )
}
