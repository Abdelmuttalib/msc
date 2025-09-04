import { PageContainer } from "@/components/page-container";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, CheckIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <MSC />
    </>
  );
}

function MSC() {
  return (
    <div className="font-sans">
      <div>
        <div className="h-screen w-screen relative">
          <div className="z-30 w-full top-0 h-16 flex items-center justify-center bg-transparent backdrop-blur-xl sticky">
            <PageContainer className="flex items-center justify-between">
              <div className="flex items-center gap-x-6">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  MSC
                  <span className="ml-2 font-normal text-gray-300 text-base sm:text-xl">
                    Moroccan Solar Cells
                    {/* Securico */}
                  </span>
                </h3>
                {/* <span className="text-gray-400">
                  POS
                </span> */}
              </div>
              <div className="text-white hidden sm:flex sm:items-center">
                {/* <nav className="flex items-center gap-6">
                  {[
                    {
                      href: "#about",
                      label: "About",
                    },
                    {
                      href: "#team",
                      label: "Team",
                    },
                  ].map((link, i) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </nav> */}
                {/* <Button className="rounded-none text-base py-4 px-6">
                  Get Started
                </Button> */}
              </div>
            </PageContainer>
          </div>
          <div className="bg-black absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-full object-cover opacity-80"
            />
          </div>
          {/* nav */}
          {/* <div className="bg-red-400"></div> */}
          {/* hero */}
          <div className="absolute h-full w-full flex flex-col size-full justify-end py-32 items-end">
            <PageContainer className="flex items-end">
              <div className="text-white flex flex-col gap-6 max-w-2xl">
                <Typography
                  variant="7xl/medium"
                  className="text-white tracking-tighter"
                >
                  Powering Morocco’s Future with
                  <br />
                  <span className="text-[#a6ff79]">Solar Innovation.</span>
                  {/* Embrace the
                  sun, <br />
                  <span className="text-lime-500">embrace your power.</span> */}
                </Typography>
                <Typography variant="lg/normal" className="text-white">
                  Moroccan Solar Cells (MSC) is building the nation’s first
                  large-scale photovoltaic module production — from silicon to
                  solar panels. Our mission: deliver clean, sustainable, and
                  locally made energy solutions for Morocco and the world.
                </Typography>
                {/* <div>
                  <Button className="rounded-none text-base py-4 px-6">
                    Get Started
                  </Button>
                </div> */}
              </div>
            </PageContainer>
          </div>
        </div>
        {/* About */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-6">
              <div className="col-span-5 lg:col-span-3">
                <div className="flex flex-col gap-10">
                  <SectionTag id="about" className="">
                    About
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Pioneering Morocco’s Photovoltaic Industry
                    </Typography>
                    <Typography variant="lg/normal">
                      MSC (Moroccan Solar Cells) is developing Morocco’s first
                      large-scale solar PV manufacturing facilities, covering
                      the full value chain: ingots, wafers, cells, and modules.
                    </Typography>
                    <div>
                      <div className="flex gap-4 items-center relative bg-[#1d3d3e] max-w-lg">
                        <div className="absolute w-full h-0.5 bg-[#a6ff79]"></div>
                        <div className="z-10">
                          <img
                            src="/images/H2GEMINI-ppt.webp"
                            alt=""
                            className="w-full max-w-xs"
                          />
                        </div>
                        <div className="relative size-12 bg-[#1d3d3e] inline-flex items-center justify-center text-white">
                          <div className="absolute w-full h-0.5 bg-[#a6ff79]"></div>
                          <div className="absolute w-full h-0.5 bg-[#a6ff79] rotate-90"></div>
                          <div className="absolute w-full h-0.5 bg-[#a6ff79] rotate-45"></div>
                          <div className="absolute w-full h-0.5 bg-[#a6ff79] -rotate-45"></div>
                        </div>
                        <div className="z-10 bg-[#1d3d3e]">
                          <Typography
                            variant="7xl/medium"
                            className="tracking-tight text-[#a6ff79]"
                          >
                            MSC
                          </Typography>
                        </div>
                      </div>
                      <br />
                      <Typography
                        variant="2xl/medium"
                        className="tracking-tight"
                      >
                        <span className="bg-[#1d3d3e] text-[#a6ff79]">
                          In partnership with H2GEMINI (Germany)
                        </span>
                        , MSC is bringing advanced Heterojunction Technology
                        (HJT) to Morocco,
                      </Typography>
                      <Typography variant="lg/normal" className="">
                        enabling local production integration of over 76%. With
                        an initial capacity of 1.2 GW, our goal is to scale up
                        to 10 GW, creating thousands of jobs and positioning
                        Morocco among the world’s top solar producers.
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-5 lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-10 gap-6 flex-wrap">
                  {[
                    // {
                    //   heading: "$240M",
                    //   description: "Phase 1 investment by 2027",
                    // },
                    {
                      heading: "$1.7B",
                      description: "Total planned investment by 2035",
                    },
                    {
                      heading: "1.2 GW",
                      description: "Initial annual production capacity",
                    },
                    // {
                    //   heading: "10 GW",
                    //   description: "Target capacity in medium term",
                    // },
                    {
                      heading: ">24.8%",
                      description: "HJT cell efficiency achieved",
                    },
                    {
                      heading: "76%+",
                      description: "Local manufacturing integration in Morocco",
                    },
                    // {
                    //   heading: "4,000+",
                    //   description: "Jobs created in Phase 1",
                    // },
                    // {
                    //   heading: "17,600+",
                    //   description: "Jobs created by Phase 2 & 3 expansion",
                    // },
                    {
                      heading: "1st in Africa, EU & MENA",
                      description: "Fully integrated PV production",
                    },
                    // {
                    //   heading: "300 mm / 230 mm",
                    //   description: "Next-gen ingots and wafers sizes",
                    // },
                    {
                      heading: "Global Exports",
                      description: "Serving EU, USA, India, Africa",
                    },
                  ].map((s) => (
                    <div key={s.heading}>
                      <Typography
                        variant="3xl/semibold"
                        className="text-[#1d3d3e] tracking-tight"
                      >
                        {s.heading}
                      </Typography>
                      <Typography
                        variant="lg/normal"
                        className="text-[#1d3d3e]"
                      >
                        {s.description}
                      </Typography>
                    </div>
                  ))}
                </div>
                {/* <div className="bg-[#a6ff79]">
                  <img
                    src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full"
                  />
                  <div className="p-6 flex flex-col gap-4">
                    <LogoText />

                    <p>
                      At MSC, we are creating Morocco’s renewable future with
                      world-class photovoltaic technology. Our production line
                      delivers next-generation solar modules that are efficient,
                      durable, and locally manufactured — supporting energy
                      independence and sustainability.
                    </p>
                  </div>
                </div> */}
              </div>
              {/* <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 sm:gap-4 lg:gap-2 xl:gap-4">
                {[
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/add613f9-445e-4924-a817-e93fc34d4aa0-scaled-e1708698047702.jpg",
                    process: "Cristalisation",
                    description:
                      "With christalisation pullers high-purity silicon is grown to produce wafers.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/312da068-5e78-4ef9-a923-562e8045cb60-e1708697943670.jpg",
                    process: "Wafering",
                    description:
                      "The high-purity silicon is cut into thin wafers using wire saws.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/d15c0954-1aff-4081-a8cf-633c4b510dca-e1708697904572.jpg",
                    process: "Cell manufacturing",
                    description:
                      "By applying different thin layers, the wafer becomes a photovoltaic cell that can generate electricity from light.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/3kxpy-2prl0-e1708698106933.jpg",
                    process: "Module Manufacturing",
                    description:
                      "BThe cells are laminated in strings to form a module, creating a resistant and powerful end product.",
                  },
                ].map((j, i) => (
                  <div
                    key={j.process}
                    className="relative col-span-1 bg-[#1d3d3e] items-center justify-center"
                  >

                    <div className="absolute top-0 left-0 w-8 h-8 bg-[#a6ff79] grid grid-cols-3 grid-rows-3 gap-[0.5px] p-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="bg-emerald-800"></div>
                      ))}
                    </div>
                    <img src={j.img} alt="" className="w-full" />
                    <div className="p-4 xl:p-6 flex flex-col gap-2 text-white">
                      <Typography
                        variant="2xl/medium"
                        className="text-[#a6ff79] tracking-tight"
                      >
                        {j.process}
                      </Typography>
                      <Typography variant="lg/normal" className="text-white">
                        {j.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </PageContainer>
        </Section>
        {/* What we do */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-5">
              <div className="col-span-5 lg:col-span-3">
                <div className="flex flex-col gap-10">
                  {/* <SectionTag id="what-we-do" className="bg-lime-100">
                    What we do
                  </SectionTag> */}

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      From Silicon to Solar: Morocco’s First PV Manufacturing
                      Hub
                    </Typography>
                    <Typography variant="lg/normal">
                      MSC brings the full solar value chain to Morocco — from
                      crystallization and wafering to module production. With
                      cutting-edge technology and a global team of experts, we
                      aim to produce up to 10 GW annually, making Morocco a
                      leader in renewable energy.
                      {/* MSC is a Moroccan company that
                      develops projects for the production of the latest
                      generation of photovoltaic modules in Morocco. With an
                      international team with years of experience and a large
                      network in the PV industry, the entire value chain from
                      silicon to the finished photovoltaic module is to be
                      brought to Morocco.
                      <br />
                      We have set ourselves the goal of starting with an annual
                      production of 1 GW and then expanding production to 10
                      GW/a. */}
                    </Typography>
                  </div>

                  {/* <div>
                    <Button className="rounded-none text-base py-4 px-6">
                      Get Started
                    </Button>
                  </div> */}
                </div>
              </div>
              <div className="col-span-5 lg:col-span-2">
                <div className="bg-[#a6ff79]">
                  <img
                    src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    // src="https://framerusercontent.com/images/axh6uBVzfcWemJ09UA0Xht6Wv8.jpg?scale-down-to=1024"
                    alt=""
                    className="w-full"
                  />
                  <div className="p-6 flex flex-col gap-4">
                    <LogoText />

                    <p>
                      At MSC, we are creating Morocco’s renewable future with
                      world-class photovoltaic technology. Our production line
                      delivers next-generation solar modules that are efficient,
                      durable, and locally manufactured — supporting energy
                      independence and sustainability.
                      {/* MSC was founded with a
                      vision to drive sustainable energy solutions that empower
                      individuals, businesses, and communities. */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-4 sm:gap-4 lg:gap-2 xl:gap-4">
                {[
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/add613f9-445e-4924-a817-e93fc34d4aa0-scaled-e1708698047702.jpg",
                    process: "Cristalisation",
                    description:
                      "With christalisation pullers high-purity silicon is grown to produce wafers.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/312da068-5e78-4ef9-a923-562e8045cb60-e1708697943670.jpg",
                    process: "Wafering",
                    description:
                      "The high-purity silicon is cut into thin wafers using wire saws.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/d15c0954-1aff-4081-a8cf-633c4b510dca-e1708697904572.jpg",
                    process: "Cell manufacturing",
                    description:
                      "By applying different thin layers, the wafer becomes a photovoltaic cell that can generate electricity from light.",
                  },
                  {
                    img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/3kxpy-2prl0-e1708698106933.jpg",
                    process: "Module Manufacturing",
                    description:
                      "BThe cells are laminated in strings to form a module, creating a resistant and powerful end product.",
                  },
                ].map((j, i) => (
                  <div
                    key={j.process}
                    className="relative col-span-1 bg-[#1d3d3e] items-center justify-center"
                  >
                    {/* <div className="w-10 h-10 bg-[#a6ff79] absolute top-0 left-0 items-center justify-center grid grid-cols-3">
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                    </div> */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-[#a6ff79] grid grid-cols-3 grid-rows-3 gap-[0.5px] p-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="bg-emerald-800"></div>
                      ))}
                    </div>
                    <img src={j.img} alt="" className="w-full" />
                    <div className="p-4 xl:p-6 flex flex-col gap-2 text-white">
                      <Typography
                        variant="2xl/medium"
                        className="text-[#a6ff79] tracking-tight"
                      >
                        {j.process}
                      </Typography>
                      <Typography variant="lg/normal" className="text-white">
                        {j.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* Technology */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-5">
              <div className="col-span-5 lg:col-span-3">
                <div className="flex flex-col gap-10">
                  <SectionTag id="technology" className="">
                    Technology
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Next-Generation HJT Solar Technology
                    </Typography>
                    <Typography variant="lg/normal">
                      MSC’s production is based on Heterojunction Technology
                      (HJT), one of the most efficient photovoltaic cell
                      technologies available today.
                    </Typography>
                    <div>
                      <div className="grid grid-cols-1 gap-2 md:gap-10 bg-white md:grid-cols-2 w-full text-left py-4">
                        {[
                          "Cell efficiency above 24.8%",
                          "High bifaciality and long lifespan",
                          "Lower levelised cost of energy (LCOE) compared to P-type cells",
                          "Competitive beyond Asia’s economies of scale",
                        ].map((j, i) => (
                          <div key={j} className="bg-white flex flex-col">
                            <span className="size-6 bg-[#1d3d3e] inline-flex items-center justify-center text-white">
                              <CheckIcon className="w-5 h-5 text-[#a6ff79]" />
                            </span>
                            <div>
                              <Typography
                                variant="xl/medium"
                                className="bg-[#1d3d3e] text-white p-2"
                              >
                                {j}
                              </Typography>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* <div>
                    <Button className="rounded-none text-base py-4 px-6">
                      Get Started
                    </Button>
                  </div> */}
                </div>
              </div>
              <div className="col-span-5 lg:col-span-2">
                <div className="pt-8">
                  <div className="flex items-end justify-end">
                    <div className="aspect-square overflow-hidden bg-[#1d3d3e] p-2 outline-1 -outline-offset-1 outline-black/10">
                      <img
                        src="https://images.unsplash.com/photo-1689561799161-7d5852ee10a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="block size-full object-cover border-2 border-[#a6ff79]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* Technology */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="value" className="">
                    Value
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Made in Morocco,
                      <br /> For the World
                    </Typography>
                    <Typography variant="2xl/normal">
                      By localizing every step of production, MSC strengthens
                      Morocco’s energy independence, creates local jobs, and
                      offers high-quality solar technology to international
                      markets.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-span-5 lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-1 w-full text-left py-4">
                  {[
                    {
                      percentage: "100%",
                      title: "Ingots",
                      description: "made in Morocco.",
                    },
                    {
                      percentage: "100%",
                      title: "Wafers",
                      description: "made in Morocco.",
                    },
                    {
                      percentage: "100%",
                      title: "Cells",
                      description: "made in Morocco.",
                    },
                    {
                      percentage: "76.7%",
                      title: "Modules",
                      description: "produced locally.",
                    },
                    // "Ingots: 100% made in Morocco",
                    // "Wafers: 100% made in Morocco",
                    // "Cells: 100% made in Morocco",
                    // "Modules: 76.7% produced locally",
                  ].map((j, i) => (
                    <div
                      key={j.title}
                      className="bg-[#1d3d3e] border relative grid grid-cols-3"
                    >
                      {/* <span className="size-6 bg-[#1d3d3e] inline-flex items-center justify-center text-white">
                              <CheckIcon className="w-5 h-5 text-[#a6ff79]" />
                            </span> */}
                      <div
                        className={cn(
                          "flex items-center justify-center bg-[#a6ff79]",
                          {
                            // "bottom-0": i < 2,
                            // "top-0": i > 1,
                            "order-last": i % 2 === 0,
                            "left-0": i % 2 === 1,
                          }
                        )}
                      >
                        <Typography
                          variant="4xl/semibold"
                          className="text-[#1d3d3e] p-1"
                        >
                          {j.percentage}
                        </Typography>
                      </div>
                      <div
                        className={cn("col-span-2 p-6", {
                          "": i % 2 === 1,
                        })}
                      >
                        <Typography
                          variant="3xl/semibold"
                          className="text-white tracking-tight"
                        >
                          {j.title}
                        </Typography>
                        <Typography
                          variant="2xl/medium"
                          className="text-white tracking-tight"
                        >
                          {j.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* <Section className="bg-[#1d3d3e] text-white">
          <PageContainer
            size="md"
            className="flex flex-col gap-y-12 items-center"
          >
            <div className="text-center flex flex-col gap-12">
              <Typography
                variant="5xl/medium"
                className="text-white tracking-tighter"
              >
                The MSC Advantage
              </Typography>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-3xl mx-auto w-full text-left">
                {[
                  {
                    title: "Local Manufacturing Power",
                    subtitle: "1 GW Annual Production",
                    description:
                      "MSC is launching Morocco’s first photovoltaic module factory, starting with 1 GW capacity and scaling to 10 GW to meet global demand.",
                  },
                  {
                    title: "Full Solar Value Chain",
                    subtitle: "From Silicon to Module",
                    description:
                      "We bring every step of solar manufacturing — crystallization, wafering, cell, and module production — directly to Morocco.",
                  },
                  {
                    title: "Global Expertise",
                    subtitle: "International Team, Local Impact",
                    description:
                      "Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.",
                  },
                  {
                    title: "Sustainable Growth",
                    subtitle: "Driving Energy Independence",
                    description:
                      "By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.",
                  },
                ].map((j, i) => (
                  <div
                    key={j.title}
                    className={cn(
                      "p-6 border-b-2 border-[#a6ff79] bg-[#2b5254] flex flex-col gap-2",
                      {
                        "border-b-0": i > 1,
                        "border-t-2": i > 1,
                      }
                    )}
                  >
                    <div>
                      <Typography
                        className="text-[#a6ff79] tracking-tight"
                        variant="2xl/medium"
                      >
                        {j.title}
                      </Typography>
                      <Typography
                        className="text-white tracking-tight"
                        variant="xl/medium"
                      >
                        {j.subtitle}
                      </Typography>
                    </div>
                    <Typography variant="base/normal" className="text-white">
                      {j.description}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </Section> */}
        <Section className="relative bg-gray-100/70">
          <PageContainer
            size="xl"
            className="flex flex-col gap-y-12 items-center"
          >
            <div className="text-center flex flex-col gap-16">
              {/* <SectionTag id="what-we-do" className="bg-transparent">
                What we do
              </SectionTag> */}
              <Typography
                variant="5xl/medium"
                className="text-[#1d3d3e] tracking-tighter"
              >
                The MSC Advantage
                {/* We’re proud to advance renewable innovation, making a real
                impact on communities and the environment. */}
              </Typography>

              <div className="grid grid-cols-1 gap-8 xl:grid-cols-2 text-left">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full text-left">
                  {[
                    {
                      title: "Local Manufacturing Power",
                      subtitle: "1 GW Annual Production",
                      description:
                        "MSC is launching Morocco’s first photovoltaic module factory, starting with 1 GW capacity and scaling to 10 GW to meet global demand.",
                    },
                    {
                      title: "Full Solar Value Chain",
                      subtitle: "From Silicon to Module",
                      description:
                        "We bring every step of solar manufacturing — crystallization, wafering, cell, and module production — directly to Morocco.",
                    },
                    //                   3. Global Expertise
                    // International Team, Local Impact
                    // Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.

                    // 4. Sustainable Growth
                    // Driving Energy Independence
                    // By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.
                    {
                      title: "Global Expertise",
                      subtitle: "International Team, Local Impact",
                      description:
                        "Our experienced international network in the PV industry is building Morocco’s place in the global renewable energy market.",
                    },
                    {
                      title: "Sustainable Growth",
                      subtitle: "Driving Energy Independence",
                      description:
                        "By producing high-efficiency solar technology locally, we reduce imports, strengthen Morocco’s economy, and cut carbon emissions.",
                    },
                  ].map((j, i) => (
                    <div
                      key={j.title}
                      className={cn(
                        "relative p-4 bg-white border-b-2 border-[#a6ff79] flex flex-col gap-2"
                      )}
                    >
                      <div className="size-6 bg-[#a6ff79] absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e]"></div>
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e] rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e] rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e] -rotate-45"></div>
                      </div>

                      <div>
                        <Typography
                          className="text-[#1d3d3e] tracking-tight"
                          variant="2xl/medium"
                        >
                          {i + 1}. {j.title}
                        </Typography>
                        <Typography
                          className="text-[#1d3d3e]/70 tracking-tight"
                          variant="xl/medium"
                        >
                          {j.subtitle}
                        </Typography>
                      </div>
                      <Typography
                        variant="base/normal"
                        className="text-[#1d3d3e]"
                      >
                        {j.description}
                      </Typography>
                    </div>
                    // <div
                    //   key={j.title}
                    //   className={cn(
                    //     "relative p-6 border-b-2 border-[#a6ff79] bg-[#1d3d3e] flex flex-col gap-2",
                    //     {
                    //       "border-b-0": i > 1,
                    //       "border-t-2": i > 1,
                    //     }
                    //   )}
                    // >
                    //   <div className="size-6 bg-[#a6ff79] absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                    //     <div className="absolute w-full h-0.5 bg-[#1d3d3e]"></div>
                    //     <div className="absolute w-full h-0.5 bg-[#1d3d3e] rotate-90"></div>
                    //     <div className="absolute w-full h-0.5 bg-[#1d3d3e] rotate-45"></div>
                    //     <div className="absolute w-full h-0.5 bg-[#1d3d3e] -rotate-45"></div>
                    //   </div>

                    //   <div>
                    //     <Typography
                    //       className="text-[#a6ff79] tracking-tight"
                    //       variant="2xl/medium"
                    //     >
                    //       {j.title}
                    //     </Typography>
                    //     <Typography
                    //       className="text-white tracking-tight"
                    //       variant="xl/medium"
                    //     >
                    //       {j.subtitle}
                    //     </Typography>
                    //   </div>
                    //   <Typography variant="base/normal" className="text-white">
                    //     {j.description}
                    //   </Typography>
                    // </div>
                  ))}
                </div>
                <div className="bg-[#1d3d3e] order-first xl:order-last">
                  <img
                    src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                    // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full opacity-90"
                  />
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* <Section className="text-[#1d3d3e]">
          <PageContainer
            size="sm"
            className="flex flex-col gap-12 items-center"
          >
            <div className="text-center flex flex-col gap-20">
              <SectionTag id="team" className="bg-[#1d3d3e]">
                Team
              </SectionTag>
              <Typography
                variant="6xl/medium"
                className="text-[#1d3d3e] tracking-tighter"
              >
                Our Team - Leadership Driving Morocco’s Solar Future
              </Typography>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {[
                  {
                    name: "Ahmed Jaafar",
                    title: "CEO",
                    description: "Founder / CEO",
                    image: "/images/ahmed-jaafar.webp",
                  },
                  {
                    name: "Dr. Dirk Habermann",
                    title: "CTO",
                    description: "Founder / CTO",
                    image: "/images/dr-dirk.webp",
                  },
                ].map((team) => (
                  <div
                    key={team.name}
                    className="relative border-2 border-[#1d3d3e]"
                  >
                    <img
                      src={team.image}
                      alt=""
                      className="w-full h-96 object-cover"
                    />
                    <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 right-0 bg-[#1d3d3e]/50 backdrop-blur-xl text-left">
                      <Typography
                        variant="xl/medium"
                        className="text-white tracking-tight"
                      >
                        {team.name}
                      </Typography>

                      <Typography variant="base/normal" className="text-white">
                        {team.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        </Section> */}
        <Section id={"team"} className="bg-[#1d3d3e]">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-16">
              <div className="text-center flex flex-col items-center gap-4">
                <SectionTag id="team" className="bg-[#1d3d3e] text-white">
                  Team
                </SectionTag>
                <Typography
                  variant="6xl/medium"
                  className="text-white tracking-tighter"
                >
                  Our Team
                </Typography>
                {/* - Leadership Driving Morocco’s Solar Future */}
              </div>
              {/* <Typography variant="lg/normal" className="">
                Discover sustainable solutions that reduce costs and
                environmental impact. Take the first step today!
              </Typography> */}
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="flex flex-col gap-6">
                  <Typography
                    variant="5xl/medium"
                    className="text-white tracking-tighter"
                  >
                    Leadership Driving Morocco’s{" "}
                    <span className="text-[#a6ff79]">Solar </span>Future
                  </Typography>

                  <Typography
                    variant="xl/normal"
                    className="text-white tracking-tight max-w-lg"
                  >
                    Our leadership combines international expertise in
                    photovoltaics with a deep commitment to Morocco’s renewable
                    future.
                    <br />
                    <br />
                    Together, they guide MSC in shaping a solar industry with
                    both local impact and global reach.
                  </Typography>

                  {/* <div className="grid gap-4 py-4">
                    {[
                      "Proven international expertise in photovoltaics",
                      "Commitment to Morocco’s renewable future",
                      "Pioneering the nation’s first integrated solar value chain",
                      "Driving innovation from silicon to solar modules",
                    ].map((j, i) => (
                      <div
                        key={j}
                        className="relative border-[#a6ff79] flex gap-2 items-center"
                      >
                        <div>
                          <CheckCircle2Icon className="w-5 h-5 fill-current text-[#1d3d3e] stroke-[#a6ff79]" />
                        </div>
                        <div className="text-white">
                          <p>{j}</p>
                        </div>
                      </div>
                    ))}
                  </div> */}
                  {/* - Leadership Driving Morocco’s Solar Future */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 order-first lg:order-last">
                  {[
                    {
                      name: "Ahmed Jaafar",
                      title: "CEO",
                      description: "Founder / CEO",
                      image: "/images/ahmed-jaafar.webp",
                    },
                    {
                      name: "Dr. Dirk Habermann",
                      title: "CTO",
                      description: "Founder / CTO",
                      image: "/images/dr-dirk.webp",
                    },
                  ].map((team) => (
                    <div
                      key={team.name}
                      className="relative border-2 border-[#1d3d3e]"
                    >
                      <div className="size-6 bg-white absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white z-10">
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e]"></div>
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e] rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e] rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-[#1d3d3e] -rotate-45"></div>
                      </div>

                      <img
                        src={team.image}
                        alt=""
                        className="w-full h-96 object-cover"
                      />
                      <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 right-0 bg-[#1d3d3e]/50 backdrop-blur-xl text-left">
                        <Typography
                          variant="xl/medium"
                          className="text-white tracking-tight"
                        >
                          {team.name}
                        </Typography>
                        {/* <Typography variant="lg/normal" className="text-white">
                        {team.title}
                      </Typography> */}
                        <Typography
                          variant="base/normal"
                          className="text-white"
                        >
                          {team.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
        <Section className="relative text-white bg-black py-72 sm:py-72 md:py-64 lg:py-72 xl:py-80">
          <div className="absolute top-0 left-0 w-full h-full bg-white/50 grid grid-cols-10 grid-rows-8 gap-[0.5px]">
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="bg-black"></div>
            ))}
          </div>
          <img
            // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="https://images.unsplash.com/photo-1474398777522-cabeb42e8132?q=80&w=2130&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://images.unsplash.com/photo-1694327671697-730cc4c5b9e8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="https://framerusercontent.com/images/I63aDOGkxJKmUUtuNtByyqTZAHU.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top opacity-70"
          />
          <div className="size-full absolute inset-0 flex items-center justify-center">
            <PageContainer size="sm" className="flex flex-col gap-4">
              <Typography
                variant="6xl/medium"
                className="text-white tracking-tighter"
              >
                Join the renewable energy innovation with{" "}
                <span className="text-[#a6ff79]">MSC</span>.
              </Typography>
              <Typography variant="lg/normal" className="text-white">
                Discover sustainable solutions that reduce costs and
                environmental impact. Take the first step today!
              </Typography>

              <div className="flex gap-2 text-white flex-wrap">
                {[
                  "Solar Energy",
                  "Photovoltaics (PV)",
                  "Renewable Innovation",
                  "Sustainability",
                  "Made in Morocco",
                  "Future of Energy",
                  "Crystallization & Wafering",
                  "Global Expertise",
                  "Local Impact",
                ].map((j, i) => (
                  <span
                    key={`${j}${i}`}
                    className="relative text-white px-2.5 py-1.5 backdrop-blur-xl border border-white/15"
                  >
                    {/* <div className="size-2.5 bg-[#a6ff79] absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white">
                      <div className="absolute w-full h-px bg-[#1d3d3e]"></div>
                      <div className="absolute w-full h-px bg-[#1d3d3e] rotate-90"></div>
                      <div className="absolute w-full h-px bg-[#1d3d3e] rotate-45"></div>
                      <div className="absolute w-full h-px bg-[#1d3d3e] -rotate-45"></div>
                    </div> */}
                    {j}
                  </span>
                ))}
              </div>
            </PageContainer>
          </div>
        </Section>
        <footer className="relative overflow-hidden bg-white">
          <PageContainer className="py-10 lg:py-28 pb-10 lg:pb-16 relative">
            <h5 className="absolute bottom-0 right-0 text-[#a6ff79]/30 via-[#a6ff79]/40 w-full h-full z-10 text-[20rem] md:text-[26rem]">
              MSC
            </h5>
            <div className="md:flex md:justify-between">
              <div className="mb-6 md:mb-0">
                <p className="flex items-center text-3xl uppercase font-semibold tracking-tighter">
                  MSC
                  <span className="ml-2 text-xl font-medium tracking-tighter text-[#1d3d3e]/70">
                    Moroccan Solar Cells
                  </span>
                </p>
              </div>
              <div className="relative grid">
                {/* <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Resources
                  </h2>
                  <ul className="text-gray-500  font-medium">
                    <li className="mb-4">
                      <a
                        href="https://flowbite.com/"
                        className="hover:underline"
                      >
                        Flowbite
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://tailwindcss.com/"
                        className="hover:underline"
                      >
                        Tailwind CSS
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Follow us
                  </h2>
                  <ul className="text-gray-500  font-medium">
                    <li className="mb-4">
                      <a
                        href="https://github.com/themesberg/flowbite"
                        className="hover:underline "
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://discord.gg/4eeurUVvTy"
                        className="hover:underline"
                      >
                        Discord
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                    Legal
                  </h2>
                  <ul className="text-gray-500  font-medium">
                    <li className="mb-4">
                      <a href="#" className="hover:underline">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500 sm:text-center ">
                © 2025{" "}
                <span className="hover:underline">
                  {/* Flowbite™ */}
                  MOROCCAN SOLAR CELLS
                  {/* MOROCCAN SOLAR CELLS™ */}
                </span>
                . All Rights Reserved.
              </p>
              <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 ">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 8 19"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook page</span>
                </a>
                {/* <a href="#" className="text-gray-500 hover:text-gray-900  ms-5">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 21 16"
                  >
                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                  </svg>
                  <span className="sr-only">Discord community</span>
                </a> */}
                <a href="#" className="text-gray-500 hover:text-gray-900  ms-5">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 17"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Twitter page</span>
                </a>
              </div>
            </div>
          </PageContainer>
        </footer>
      </div>
    </div>
  );
}

function LogoText({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xl font-semibold tracking-tighter font-sans",
        className
      )}
      {...props}
    >
      MSC
    </p>
  );
}

function SectionTag({ id, className, ...props }: SectionProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="size-3 bg-[#a6ff79]"></div>
      <Typography
        variant="sm/normal"
        className={cn("uppercase", className)}
        id={id}
        {...props}
      />
    </div>
  );
}

type SectionProps = {
  id?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

function Section({ id, className, ...props }: SectionProps) {
  return (
    <section
      id={id || ""}
      className={cn("bg-white py-20 sm:py-28 lg:py-36", className)}
      {...props}
    />
  );
}
