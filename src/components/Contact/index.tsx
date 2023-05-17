import React from 'react'
import Social from '../Utils/Social'

export default function Contact(contact) {
  return (
    <div
      className="container_contacto w-[80%] mx-[10%] md:w-full md:mx-0 my-8 md:my-14 flex justify-center items-center text-center"
      id="contacto"
    >
      <div className="contacto_saludo p-5 rounded-2xl bg-peak bg-contain bg-repeat shadow-card flex flex-col gap-3">
        <p className="text-base">
          Interested in working with me? We can make an appointment to chat, I
          invite the coffee
        </p>
        <ul className="flex items-center justify-center gap-1">
          <Social contact={true} />
        </ul>
      </div>
    </div>
  )
}
