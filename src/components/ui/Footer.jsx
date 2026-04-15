import { LogoPlaceholder } from "@/assets/svg"
import { navigations } from "@/data/navigation"
import { RiLinkedinFill, RiInstagramLine } from "react-icons/ri"

const Footer = ({ handleScroll }) => {
  return (
    <footer className="bg-[#edf4f3] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#002d2e]/10">
          <div className="md:col-span-1">
            <LogoPlaceholder className="h-8 w-auto mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              iste!
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002d2e]/10 text-[#002d2e] hover:bg-[#002d2e] hover:text-white transition-colors cursor-pointer">
                <RiLinkedinFill className="text-sm" />
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#002d2e]/10 text-[#002d2e] hover:bg-[#002d2e] hover:text-white transition-colors cursor-pointer">
                <RiInstagramLine className="text-sm" />
              </div>
            </div>
          </div>
          <div className="">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#002d2e] mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="text-sm text-gray-500 hover:text-[#002d2e] transition-colors cursor-pointer">
                Technology
              </li>
              <li className="text-sm text-gray-500 hover:text-[#002d2e] transition-colors cursor-pointer">
                Accounting & Bookkeeping
              </li>
              <li className="text-sm text-gray-500 hover:text-[#002d2e] transition-colors cursor-pointer">
                Customer & Business Services
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#002d2e] mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navigations.map((item) => (
                <li
                  className="text-sm text-gray-500 hover:text-[#002d2e] transition-colors cursor-pointer"
                  onClick={() => handleScroll(item.link)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#002d2e] mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li className="text-sm text-gray-500 hover:text-[#002d2e] transition-colors cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-sm text-gray-500 hover:text-[#002d2e] transition-colors cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p
            className="text-xs text-gray-400"
            // contenteditable="false"
          >
            © 2026 lorem. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
