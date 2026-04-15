import { employees } from "@/pages/our-experts/employees.mock"
import { RiDoubleQuotesL } from "react-icons/ri"
import { RiUserLine } from "react-icons/ri"

const OurExperts = () => {
  return (
    <section id="our-experts" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#002d2e]/50 mb-3">
              The Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002d2e] leading-tight">
              Our people are
              <br />
              <span className="text-[rgb(223,190,166)]">what makes us</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs md:text-right">
            A team of 20+ wonderful people with a wide breadth of skill and
            specialisation, based in <br /> Cebu I.T. Park.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {employees.map((employee) => {
            return (
              <div key={employee.id} className="group cursor-default">
                <div className="rounded-2xl overflow-hidden aspect-3/4 mb-4 bg-[#edf4f3]">
                  <img
                    src={employee.img_url}
                    alt={employee.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div className="">
                    <h3 className="text-sm font-bold text-[#002d2e]">
                      {employee.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {employee.role}
                    </p>
                  </div>
                  <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-medium bg-[#dfbea6]/30 text-[#7a4f35]">
                    {employee.field}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <div className="mt-20 bg-[#edf4f3] rounded-3xl p-10 md:p-14">
          <div className="max-w-3xl mx-auto text-center">
            <RiDoubleQuotesL className="text-4xl text-[#dfbea6] mb-6 mx-auto block" />
            <p className="text-[#002d2e] text-lg md:text-xl leading-relaxed font-medium mb-8">
              We're thrilled with the additional staff that Apteum provided to
              assist our local team. For us, the real power has been how quickly
              and efficiently we've been able to increase our capacity for
              change and growth.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#dfbea6]">
                <RiUserLine className="text-[#002d2e]" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-[#002d2e]">
                  Alexis Parker
                </p>
                <p className="text-xs text-gray-400">
                  Chief Financial & Innovation Officer, GrandLine Co.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurExperts
