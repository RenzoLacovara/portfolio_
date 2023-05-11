import Image from 'next/image'
import React from 'react'
import { RevealWrapper } from 'next-reveal'
import { base } from '../../../utility/data/data'
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
        <h3 className="text-xl small:text-3xl ml-3">
          <span className="inline-block font-caveat text-detalled text-base">
            &#60;h3&#62;
          </span>
          {name}
          <span className="inline-block font-caveat text-detalled text-base">
            &#60;/h3&#62;
          </span>
        </h3>
      </div>
      <ul className="circle-list contents list-none ">
        {tools.map((tool) => (
          <li
            className={`circle-item text-center ${
              reverse ? 'animate-orbitReverse' : 'animate-orbit'
            } animate-orbit`}
          >
            <div className="group w-16 h-16 small:w-20 small:h-20">
              <Image
                alt={tool.titulo}
                src={tool.imagen}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                className="icon w-16 h-16 object-contain transition-all duration-300 ease small:w-20 small:h-20 hover:scale-125 hover:animate-shake"
              />
              <p className="opacity-0 text-center transition-all duration-300 ease mt-5 text-base group-hover:opacity-100">
                {tool.titulo}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </RevealWrapper>
  )
}
