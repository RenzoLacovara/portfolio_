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
        <h3>
          <span className="inline-block font-caveat text-detalled text-base">
            &#60;h3&#62;
          </span>
          Other Tools
          <span className="inline-block font-caveat text-detalled text-base">
            &#60;/h3&#62;
          </span>
        </h3>
      </div>
      <div className="stack flex justify-center items-center flex-wrap">
        {tools.map((tool) => (
          <div className="group">
            <Image
              alt={tool.titulo}
              src={tool.imagen}
              width={500}
              height={500}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              className=" m-3 w-16 h-16 object-contain transition-all duration-300 ease small:w-20 small:h-20 hover:scale-125 hover:animate-shake"
            />
            <p className="opacity-0 text-center transition-all duration-300 ease mt-5 text-base group-hover:opacity-100">
              {tool.titulo}
            </p>
          </div>
        ))}
      </div>
    </RevealWrapper>
  )
}
