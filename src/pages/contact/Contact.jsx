import Form from "@/components/form/Form"
import React from "react"
import { FiMapPin } from "react-icons/fi"
import { RiMailLine, RiTimeLine } from "react-icons/ri"

const Contact = ({ handleScroll }) => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#002d2e]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="">
            <p
              className="text-xs font-semibold tracking-widest uppercase text-[#dfbea6]/60 mb-3"
              onClick={() => handleScroll("contact")}
            >
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to get <br />
              <span className="text-[rgb(223, 190, 166)]">started?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, porro.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                  <FiMapPin className="text-[#dfbea6]" />
                </div>
                <div className="">
                  <p className="text-white/40 text-xs mb-0.5">Offices</p>
                  <p className="text-white text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                  <RiMailLine className="text-[#dfbea6]" />
                </div>
                <div className="">
                  <p className="text-white/40 text-xs mb-0.5">Response Time</p>
                  <p className="text-white text-sm">Within 1 business day</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                  <RiTimeLine className="text-[#dfbea6]" />
                </div>
                <div className="">
                  <p className="text-white/40 text-xs mb-0.5">Offices</p>
                  <p className="text-white text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
