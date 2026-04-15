import { HomeHero } from "@/assets/images/home"
import { FaArrowRight } from "react-icons/fa"

const Home = ({ handleScroll }) => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center flex items-end pb-20 md:pb-28"
      style={{ backgroundImage: `url(${HomeHero})` }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#002d2e]/80 via-[#002d2e]/50 to-transparent"></div>
      <div className="absolute inset-0 bg-linear-to-t from-[#002d2e]/60 via-transparent to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-xl">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full border border-white/40 text-white/80 text-xs font-medium tracking-widest uppercase">
            lorem ipsum dolor sit amet
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            You can
            <br />
            <span className="text-[rgb(223,190,166)]">count on us.</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur, ducimus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#dfbea6] text-[#002d2e] text-sm font-bold hover:bg-[#d4ae94] transition-colors cursor-pointer whitespace-nowrap"
              onClick={() => handleScroll("services")}
            >
              Our Services
              <FaArrowRight className="text-xs" />
            </div>
            <div className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/50 text-white text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer whitespace-nowrap">
              Our Story
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
