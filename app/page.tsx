import { LogoText, Section, SectionTag } from "@/components/common";
import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { CheckCircle2Icon, CheckIcon } from "lucide-react";
import Link from "next/link";

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
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1674168481499-983f0968a68f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              // src="https://images.unsplash.com/photo-1491677533189-49af044391ed?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="size-full object-cover"
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
                  <span className="text-lightgreen">Solar Innovation.</span>
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
            <div className="grid gap-10">
              <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-6">
                <div className="col-span-5 lg:col-span-3">
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6">
                      <SectionTag id="about" className="">
                        About
                      </SectionTag>
                      <Typography
                        variant="5xl/medium"
                        className="tracking-tighter"
                      >
                        Pioneering Morocco’s Photovoltaic Industry
                      </Typography>
                      <Typography variant="lg/normal">
                        MSC (Moroccan Solar Cells) is developing Morocco’s first
                        large-scale solar PV manufacturing facilities, covering
                        the full value chain: ingots, wafers, cells, and
                        modules.
                      </Typography>

                      <div>
                        <Button
                          className="rounded-none text-base py-5 px-6 bg-lightgreen text-darkgreen hover:bg-lightgreen/90"
                          asChild
                        >
                          <Link href="/about-us">About MSC</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-5 lg:col-span-3 pt-2 lg:pt-14">
                  <div>
                    <div>
                      <div className="flex flex-col gap-6">
                        <Typography
                          variant="4xl/medium"
                          className="tracking-tighter"
                        >
                          Technology Partner: H2GEMINI
                        </Typography>

                        <Typography variant="lg/normal" className="">
                          In partnership with H2GEMINI (Germany), MSC is
                          bringing advanced Heterojunction Technology (HJT) to
                          Morocco, enabling local production integration of over
                          76%. With an initial capacity of 1.2 GW, our goal is
                          to scale up to 10 GW, creating thousands of jobs and
                          positioning Morocco among the world’s top solar
                          producers.
                        </Typography>

                        <div className="flex gap-4 items-center relative bg-darkgreen">
                          <div className="absolute w-full h-0.5 bg-lightgreen"></div>
                          <div className="z-10">
                            <img
                              src="/images/H2GEMINI-ppt.webp"
                              alt=""
                              className="w-full max-w-xs"
                            />
                          </div>
                          <div className="relative size-12 bg-darkgreen inline-flex items-center justify-center text-white">
                            <div className="absolute w-full h-0.5 bg-lightgreen"></div>
                            <div className="absolute w-full h-0.5 bg-lightgreen rotate-90"></div>
                            <div className="absolute w-full h-0.5 bg-lightgreen rotate-45"></div>
                            <div className="absolute w-full h-0.5 bg-lightgreen -rotate-45"></div>
                          </div>
                          <div className="z-10 bg-darkgreen">
                            <Typography
                              variant="7xl/medium"
                              className="tracking-tight text-lightgreen"
                            >
                              MSC
                            </Typography>
                          </div>
                        </div>

                        <div>
                          <Button
                            className="rounded-none text-base py-5 px-6 bg-lightgreen text-darkgreen hover:bg-lightgreen/90"
                            asChild
                          >
                            <a
                              href="https://www.h2gemini.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              Visit H2GEMINI
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    className="relative col-span-1 bg-darkgreen items-center justify-center"
                  >

                    <div className="absolute top-0 left-0 w-8 h-8 bg-lightgreen grid grid-cols-3 grid-rows-3 gap-[0.5px] p-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="bg-emerald-800"></div>
                      ))}
                    </div>
                    <img src={j.img} alt="" className="w-full" />
                    <div className="p-4 xl:p-6 flex flex-col gap-2 text-white">
                      <Typography
                        variant="2xl/medium"
                        className="text-lightgreen tracking-tight"
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
              <div>
                <div className="col-span-5 lg:col-span-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 flex-wrap">
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
                        description:
                          "Local manufacturing integration in Morocco",
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
                      <div key={s.heading} className="bg-darkgreen p-4">
                        <Typography
                          variant="3xl/semibold"
                          className="text-lightgreen tracking-tight"
                        >
                          {s.heading}
                        </Typography>
                        <Typography variant="lg/normal" className="text-white">
                          {s.description}
                        </Typography>
                      </div>
                    ))}
                  </div>
                  {/* <div className="bg-lightgreen">
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
              </div>
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
                <div className="bg-lightgreen">
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
                    className="relative col-span-1 bg-darkgreen items-center justify-center"
                  >
                    {/* <div className="w-10 h-10 bg-lightgreen absolute top-0 left-0 items-center justify-center grid grid-cols-3">
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                      <div className="bg-emerald-800 size-3"></div>
                    </div> */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-lightgreen grid grid-cols-3 grid-rows-3 gap-[0.5px] p-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="bg-emerald-800"></div>
                      ))}
                    </div>
                    <img src={j.img} alt="" className="w-full" />
                    <div className="p-4 xl:p-6 flex flex-col gap-2 text-white">
                      <Typography
                        variant="2xl/medium"
                        className="text-lightgreen tracking-tight"
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
                            <span className="size-6 bg-darkgreen inline-flex items-center justify-center text-white">
                              <CheckIcon className="w-5 h-5 text-lightgreen" />
                            </span>
                            <div>
                              <Typography
                                variant="xl/medium"
                                className="bg-darkgreen text-white p-2"
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
                    <div className="aspect-square overflow-hidden bg-darkgreen p-2 outline-1 -outline-offset-1 outline-black/10">
                      <img
                        src="https://images.unsplash.com/photo-1689561799161-7d5852ee10a5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="block size-full object-cover border-2 border-lightgreen"
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
                      className="bg-darkgreen border relative grid grid-cols-3"
                    >
                      {/* <span className="size-6 bg-darkgreen inline-flex items-center justify-center text-white">
                              <CheckIcon className="w-5 h-5 text-lightgreen" />
                            </span> */}
                      <div
                        className={cn(
                          "flex items-center justify-center bg-lightgreen",
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
                          className="text-darkgreen p-1"
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
        {/* <Section className="bg-darkgreen text-white">
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
                      "p-6 border-b-2 border-lightgreen bg-[#2b5254] flex flex-col gap-2",
                      {
                        "border-b-0": i > 1,
                        "border-t-2": i > 1,
                      }
                    )}
                  >
                    <div>
                      <Typography
                        className="text-lightgreen tracking-tight"
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
                className="text-darkgreen tracking-tighter"
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
                        "relative p-4 bg-white border-b-2 border-lightgreen flex flex-col gap-2"
                      )}
                    >
                      <div className="size-6 bg-lightgreen absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                        <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                      </div>

                      <div>
                        <Typography
                          className="text-darkgreen tracking-tight"
                          variant="2xl/medium"
                        >
                          {i + 1}. {j.title}
                        </Typography>
                        <Typography
                          className="text-darkgreen/70 tracking-tight"
                          variant="xl/medium"
                        >
                          {j.subtitle}
                        </Typography>
                      </div>
                      <Typography
                        variant="base/normal"
                        className="text-darkgreen"
                      >
                        {j.description}
                      </Typography>
                    </div>
                    // <div
                    //   key={j.title}
                    //   className={cn(
                    //     "relative p-6 border-b-2 border-lightgreen bg-darkgreen flex flex-col gap-2",
                    //     {
                    //       "border-b-0": i > 1,
                    //       "border-t-2": i > 1,
                    //     }
                    //   )}
                    // >
                    //   <div className="size-6 bg-lightgreen absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                    //     <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                    //     <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                    //     <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                    //     <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                    //   </div>

                    //   <div>
                    //     <Typography
                    //       className="text-lightgreen tracking-tight"
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
                <div className="bg-darkgreen order-first xl:order-last">
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
        {/* <Section className="text-darkgreen">
          <PageContainer
            size="sm"
            className="flex flex-col gap-12 items-center"
          >
            <div className="text-center flex flex-col gap-20">
              <SectionTag id="team" className="bg-darkgreen">
                Team
              </SectionTag>
              <Typography
                variant="6xl/medium"
                className="text-darkgreen tracking-tighter"
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
                    className="relative border-2 border-darkgreen"
                  >
                    <img
                      src={team.image}
                      alt=""
                      className="w-full h-96 object-cover"
                    />
                    <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 right-0 bg-darkgreen/50 backdrop-blur-xl text-left">
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
        <Section id={"team"} className="bg-darkgreen">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-16">
              <div className="text-center flex flex-col items-center gap-4">
                <SectionTag id="team" className="bg-darkgreen text-white">
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
                    <span className="text-lightgreen">Solar </span>Future
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
                        className="relative border-lightgreen flex gap-2 items-center"
                      >
                        <div>
                          <CheckCircle2Icon className="w-5 h-5 fill-current text-darkgreen stroke-lightgreen" />
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
                      bio: "Ahmed Jaafar co-founded Moroccan Solar Cells (MSC) with the ambition of transforming Morocco into a photovoltaic manufacturing leader. With a deep-rooted vision for sustainable industry, he oversees MSC's strategic direction, investor outreach, and operational launch.",
                      image: "/images/ahmed-jaafar.webp",
                    },
                    {
                      name: "Dr. Dirk Habermann",
                      title: "CTO",
                      description: "Founder / CTO",
                      bio: "Dr. Dirk Habermann brings over 25 years of experience in semiconductors and photovoltaics. Before co-founding MSC, he held CTO positions at Meyer Burger AG and the Schmid Group. He is also co-founder of H2GEMINI, a leader in advanced PV technologies, and holds more than 45 international patents. At MSC, Dr. Habermann leads technology development, ensuring innovation and efficiency across the entire solar value chain.",
                      image: "/images/dr-dirk.webp",
                    },
                  ].map((team) => (
                    <div
                      key={team.name}
                      className="relative border-2 border-darkgreen"
                    >
                      <div className="size-6 bg-white absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white z-10">
                        <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                      </div>

                      <img
                        src={team.image}
                        alt=""
                        className="w-full h-96 object-cover"
                      />
                      <div className="px-4 py-3 flex flex-col gap-1 absolute bottom-0 left-0 right-0 bg-darkgreen/50 backdrop-blur-xl text-left">
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
                <span className="text-lightgreen">MSC</span>.
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
                    {/* <div className="size-2.5 bg-lightgreen absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white">
                      <div className="absolute w-full h-px bg-darkgreen"></div>
                      <div className="absolute w-full h-px bg-darkgreen rotate-90"></div>
                      <div className="absolute w-full h-px bg-darkgreen rotate-45"></div>
                      <div className="absolute w-full h-px bg-darkgreen -rotate-45"></div>
                    </div> */}
                    {j}
                  </span>
                ))}
              </div>
            </PageContainer>
          </div>
        </Section>
      </div>
    </div>
  );
}
