import React from "react"
import { FaCode } from "react-icons/fa6"
import { FaArrowRight } from "react-icons/fa"
import { BiCalculator } from "react-icons/bi"
import { RiCustomerService2Line } from "react-icons/ri"

const Services = ({ handleScroll }) => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#edf4f3]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#002d2e]/50 mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#002d2e] leading-tight max-w-lg">
            How can we <br /> help you?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#edf4f3]">
              <FaCode className="text-2xl text-[#002d2e]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#002d2e] mb-2">
                Technology
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Software and data engineers familiar with various coding
                languages, methodologies and programs. Skilled UX/UI designers,
                quality assurance and testing specialists.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                Software Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                Data Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                UX/UI Design
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                QA & Testing
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#edf4f3]">
              <BiCalculator className="text-2xl text-[#002d2e]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#002d2e] mb-2">
                Accounting & Bookkeeping
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Chartered accountants and CPAs expert in Australian law and
                compliance. Highly proficient with Xero and MYOB, assisting with
                taxes, financial statements, and account management.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                Xero
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                MYOB
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                Tax Compliance
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                Financial Statements
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-8 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300 cursor-default">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#edf4f3]">
              <RiCustomerService2Line className="text-2xl text-[#002d2e]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#002d2e] mb-2">
                Technology
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Software and data engineers familiar with various coding
                languages, methodologies and programs. Skilled UX/UI designers,
                quality assurance and testing specialists.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                Software Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                Data Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                UX/UI Design
              </span>
              <span className="px-3 py-1 rounded-full bg-[#edf4f3] text-[#002d2e] text-xs font-medium">
                QA & Testing
              </span>
            </div>
          </div>
        </div>
        <div className="mt-14 flex items-center gap-6">
          <span
            className="inline-flex items-center gap-2 text-[#002d2e] font-semibold text-sm hover:gap-3 transition-all cursor-pointer whitespace-nowrap"
            onClick={() => handleScroll("contact")}
          >
            Start a conversation
            <FaArrowRight className="text-xs" />
          </span>
          <div className="flex-1 h-px bg-[#002d2e]/10"></div>
        </div>
      </div>
    </section>
  )
}

export default Services
