import React from 'react'
import Tools from './Stacks/Tools'
import OtherTools from './Stacks/OtherTools'
import {
  backendData,
  frontendData,
  otherData,
} from '../../../../utility/data/data'

export default function Stack() {
  return (
    <div>
      <div id="tools" className="w-full mt-12 overflow-hidden ">
        <p className="inline-block text-base font-caveat text-detalled md:ml-10">
          &#60;h2&#62;
        </p>
        <h3 className="inline-block ml-1 ext-2xl drop-shadow-subtitle md:text-3xl">
          My favourite stack
        </h3>
        <p className="inline-block ml-1 text-base font-caveat text-detalled">
          &#60;/h2&#62;
        </p>
        <p className="block ml-4 text-base font-caveat text-detalled md:ml-14">
          &#60;section&#62;
        </p>
        <div className="flex flex-col items-center justify-center gap-12 stack-div">
          <div className="flex flex-col gap-10 div-stack xl:flex-row">
            <Tools tools={frontendData} name="Front-End" reverse={false} />
            <Tools tools={backendData} name="Back-End" reverse={true} />
          </div>
          <OtherTools tools={otherData} />
        </div>
        <p className="block ml-4 text-base font-caveat text-detalled md:ml-14">
          &#60;/section&#62;
        </p>
      </div>
      <p className="ml-1 text-base font-caveat text-detalled md:ml-6">
        &#60;/body&#62;
      </p>
      <p className="text-base font-caveat text-detalled md:ml-2">
        &#60;/html&#62;
      </p>
    </div>
  )
}
