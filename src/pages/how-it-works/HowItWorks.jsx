import React from "react"
import { RiBuilding2Line } from "react-icons/ri"
import { RiHeartLine } from "react-icons/ri"
import { RiFlowChart } from "react-icons/ri"
import { RiBarChartGroupedLine } from "react-icons/ri"

const HowItWorks = ({ handleScroll }) => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#002d2e]/50 mb-3">
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002d2e] leading-tight mb-6">
              How it works
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-md">
              When you partner with Apteum, our team in the Philippines becomes
              an extension of your business. You hand-select the people who are
              right for you—or leave recruitment to us.
            </p>
            <div
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#002d2e] text-white text-sm font-semibold hover:bg-[#004040] transition-colors cursor-pointer whitespace-nowrap"
              onClick={() => handleScroll("our-story")}
            >
              Our Story
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#edf4f3] rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#002d2e]/40 uppercase">
                  01
                </span>
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                  <RiBuilding2Line className="text-lg text-[#002d2e]" />
                </div>
              </div>
              <div className="text-base font-bold text-[#002d2e]">Clients</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our services are tailored for small-to-medium size businesses
                looking to grow the right way. We focus on developing
                relationships with like-minded clients who align with our
                values.
              </p>
            </div>
            <div className="bg-[#edf4f3] rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#002d2e]/40 uppercase">
                  02
                </span>
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                  <RiHeartLine className="text-lg text-[#002d2e]" />
                </div>
              </div>
              <div className="text-base font-bold text-[#002d2e]">Culture</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                At Apteum, we cultivate a working environment grounded in
                kindness, compassion and understanding. We treat all
                collaborators with dignity and respect.
              </p>
            </div>
            <div className="bg-[#edf4f3] rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#002d2e]/40 uppercase">
                  03
                </span>
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                  <RiFlowChart className="text-lg text-[#002d2e]" />
                </div>
              </div>
              <div className="text-base font-bold text-[#002d2e]">Workflow</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                You'll have complete oversight of day-to-day operations. Our
                team members in Cebu City will report directly to you, ensuring
                your workflow is never staggered.
              </p>
            </div>
            <div className="bg-[#edf4f3] rounded-2xl p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-widest text-[#002d2e]/40 uppercase">
                  04
                </span>
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white">
                  <RiBarChartGroupedLine className=" text-lg text-[#002d2e]" />
                </div>
              </div>
              <div className="text-base font-bold text-[#002d2e]">Results</div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our services are underpinned by the most advanced technologies
                and methodologies available. Our team members are warmly
                encouraged to innovate to deliver the best possible outcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
