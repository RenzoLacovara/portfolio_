import React from 'react'
import Tools from './Stacks/Tools'
import OtherTools from './Stacks/OtherTools'
import { backendData, frontendData, otherData } from '../../utility/data/data'

export default function Stack() {
  return (
    <div>
      <div id="tools" className=" mt-12 w-full overflow-hidden">
        <p className="inline-block font-caveat text-detalled text-base md:ml-10">
          &#60;h2&#62;
        </p>
        <h2 className="ext-2xl drop-shadow-subtitle inline-block ml-1 md:text-3xl">
          My favourite stack
        </h2>
        <p className="inline-block font-caveat text-detalled text-base ml-1">
          &#60;/h2&#62;
        </p>
        <p className="block font-caveat text-detalled text-base ml-4 md:ml-14">
          &#60;section&#62;
        </p>
        <div className="stack-div flex justify-center items-center flex-col gap-12">
          <div className="div-stack flex flex-col xl:flex-row gap-10">
            <Tools tools={frontendData} name="Front-End" reverse={false} />
            <Tools tools={backendData} name="Back-End" reverse={true} />
          </div>
          <OtherTools tools={otherData} />
        </div>
        <p className="block font-caveat text-detalled text-base ml-4 md:ml-14">
          &#60;/section&#62;
        </p>
      </div>
      <p className="font-caveat text-detalled ml-1 md:ml-6 text-base">
        &#60;/body&#62;
      </p>
      <p className="font-caveat text-detalled md:ml-2 text-base">
        &#60;/html&#62;
      </p>
    </div>
  )
}
