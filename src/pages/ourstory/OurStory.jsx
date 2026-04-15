import { bg3 } from "@/assets/images"

const OurStory = () => {
  return (
    <section
      id="our-story"
      className="py-24 md:py-32 bg-[#002d2e] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-4/5 max-w-md">
              <img
                src={bg3}
                className="w-full h-full object-cover object-top"
                alt="bg3"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-[#dfbea6] rounded-2xl p-5 max-w-50">
              <p className="text-[#002d2e] text-xs font-medium leading-relaxed">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem!”
              </p>
              <p className="text-[#002d2e]/60 text-xs mt-2 font-semibold">
                — Lorem, ipsum.
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#dfbea6]/60 mb-3">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A new way <br />
              <span className="color: rgb(223, 190, 166)">of working</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
              officiis sunt iusto veniam deserunt excepturi aspernatur minima
              esse quos necessitatibus voluptatum iure eum cupiditate similique,
              molestias voluptatibus debitis distinctio quod.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              illum consectetur voluptatum nemo ut odio perspiciatis a id
              molestias omnis!
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              voluptatem numquam minima dolores voluptate esse nostrum delectus,
              suscipit similique quae saepe consequuntur adipisci deserunt,
              nulla quis quisquam ea. Consectetur, sit.
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="border border-white/10 rounded-xl p-4">
                <p className="text-3xl font-bold text-[#dfbea6] mb-1">20+</p>
                <p className="text-white/50 text-xs">Team members</p>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="text-3xl font-bold text-[#dfbea6] mb-1">2023</p>
                <p className="text-white/50 text-xs">Office established</p>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="text-3xl font-bold text-[#dfbea6] mb-1">3</p>
                <p className="text-white/50 text-xs">Core service areas</p>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="text-3xl font-bold text-[#dfbea6] mb-1">100%</p>
                <p className="text-white/50 text-xs">Ethical outsourcing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory
