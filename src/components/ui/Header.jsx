import { CompanyLogo, LogoPlaceholder } from "@/assets/svg"
import { cn } from "../../lib/cn"
import { navigations } from "@/data/navigation"
import { FaArrowRight } from "react-icons/fa"
import { IoMenu } from "react-icons/io5"

const Header = ({ scrolled, handleScroll, activeSection }) => {
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20 gap-4">
        <LogoPlaceholder
          className={cn(
            "min-h-9 w-auto cursor-pointer transition-all",
            !scrolled ? "brightness-0 invert" : "brightness-100",
          )}
          onClick={() => handleScroll("home")}
        />
        <ul className="hidden md:flex items-center gap-8">
          {navigations.map((nav) => {
            const isActive = activeSection === nav.link
            return (
              <li
                key={nav.id}
                onClick={() => handleScroll(nav.link)}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors cursor-pointer",
                  scrolled ? "text-[#002d2e]" : "text-white",
                  isActive && "text-[#dfbea6]", // ACTIVE STYLE
                )}
              >
                {nav.name}
              </li>
            )
          })}
        </ul>
        <div
          className={cn(
            "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap  text-white border ",
            scrolled
              ? "bg-[#002d2e] hover:bg-[#002d2e]/95"
              : "bg-white/20 border-white/40 hover:bg-white/30",
          )}
          onClick={() => handleScroll("contact")}
        >
          <span>Get in Touch</span>
          <FaArrowRight className="text-sm" />
        </div>
        <button className="md:hidden w-9 h-9 flex items-center justify-center cursor-pointer text-white">
          <IoMenu className="text-9xl" />
        </button>
      </div>
    </nav>
  )
}

export default Header
