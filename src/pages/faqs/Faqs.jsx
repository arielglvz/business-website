import { faqs } from "@/pages/faqs/faq.mock"
import { cn } from "@/lib/cn"
import { useState } from "react"
import { FaArrowRight } from "react-icons/fa"
import { MdAdd } from "react-icons/md"
import { MdRemove } from "react-icons/md"

const Faqs = ({ handleScroll }) => {
  const [openId, setOpenId] = useState(null)
  return (
    <section id="faqs" className="py-24 md:py-32 bg-[#edf4f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:sticky lg:top-28 self-start">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#002d2e]/50 mb-3">
              Got Questions?
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002d2e] leading-tight mb-6">
              Frequently <br /> asked questions
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-sm">
              Can't find the answer you're looking for? Reach out to our team
              and we'll be happy to help.
            </p>
            <div
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#002d2e] text-white text-sm font-semibold hover:bg-[#004040] transition-colors cursor-pointer whitespace-nowrap"
              onClick={() => handleScroll("contact")}
            >
              Contact Us
              <FaArrowRight className="text-xs" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 bg-white"
                >
                  {/* HEADER */}
                  <div
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-[#002d2e]">
                      {faq.title}
                    </span>
                    <div className="w-7 h-7 flex items-center justify-center rounded-full shrink-0 transition-colors bg-[#002d2e] text-white">
                      <span className="text-sm transition-transform duration-300">
                        {isOpen ? <MdRemove /> : <MdAdd />}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className={cn(
                      "px-6 overflow-hidden transition-all duration-300",
                      isOpen ? "max-h-40 pb-6" : "max-h-0",
                    )}
                  >
                    <div className="text-sm text-gray-500 leading-relaxed">
                      {faq.content}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faqs
