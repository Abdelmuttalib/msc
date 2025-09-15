import { Section, SectionTag } from "@/components/common";
import { PageContainer } from "@/components/page-container";
import { Typography } from "@/components/ui/typography";
import { pageNavLinks } from "@/lib/site-config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <About />
    </>
  );
}

function About() {
  return (
    <div className="font-sans">
      <div>
        <div className="relative">
          <div className="z-30 w-full top-0 h-16 flex items-center justify-center bg-transparent backdrop-blur-xl sticky">
            <PageContainer className="flex items-center justify-between">
              <div className="flex items-center gap-x-6">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-black">
                  MSC
                  <span className="ml-2 font-normal text-gray-700 text-base sm:text-xl">
                    Moroccan Solar Cells
                    {/* Securico */}
                  </span>
                </h3>
                {/* <span className="text-gray-400">
                  POS
                </span> */}
              </div>
              <div className="text-black hidden sm:flex sm:items-center">
                <nav className="flex items-center gap-6">
                  {pageNavLinks.map((link) => (
                    <Link key={link.label} href={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </nav>
                {/* <Button className="rounded-none text-base py-4 px-6">
                  Get Started
                </Button> */}
              </div>
            </PageContainer>
          </div>
          {/* hero */}
          <div className="h-full w-full flex flex-col size-full justify-end py-24 items-end">
            <PageContainer className="flex items-center justify-center">
              <div className="text-white flex flex-col gap-6 max-w-2xl items-center">
                <SectionTag>About</SectionTag>
                <Typography
                  variant="7xl/medium"
                  className="text-darkgreen tracking-tighter"
                >
                  Driven by innovation,
                  <br />
                  inspired by nature.
                </Typography>
              </div>
            </PageContainer>
          </div>
        </div>
        {/* image */}
        <Section className="relative h-[90vh] bg-black">
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        </Section>
        {/* About */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid gap-20">
              <div className="text-center">
                <Typography variant="4xl/medium" className="tracking-tighter">
                  MSC (Moroccan Solar Cells) is developing Morocco’s first fully
                  integrated photovoltaic manufacturing hub. From silicon ingots
                  to finished solar modules, our mission is to bring
                  next-generation HJT technology to Africa, Europe, and beyond.
                  With international expertise and strong partnerships, MSC is
                  positioned to make Morocco a leader in clean energy
                  manufacturing.
                </Typography>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    value: "1.2 GW",
                    title: "Phase 1 Manufacturing Capacity",
                    description:
                      "Launching with 1.2 GW of integrated production — from ingots to modules — with plans to scale to over 10 GW.",
                  },
                  {
                    value: "76%",
                    title: "Made in Morocco",
                    description:
                      "A majority of our value chain is locally produced, strengthening Morocco’s role in the global energy transition.",
                  },
                  {
                    value: "$240M",
                    title: "Initial Investment",
                    description:
                      "Backed by international technology and financing partners to establish the first-of-its-kind facility in Africa and the Middle East.",
                  },
                  {
                    value: "4,000+",
                    title: "Jobs Created",
                    description:
                      "Phase 1 will create thousands of direct and indirect jobs, empowering local communities and building skilled expertise.",
                  },
                ].map(({ value, title, description }) => (
                  <div key={title} className="bg-darkgreen p-6 grid gap-10">
                    <div className="">
                      <Typography
                        variant="4xl/semibold"
                        className="tracking-tight text-lightgreen"
                      >
                        {value}
                      </Typography>
                    </div>
                    <div className="grid gap-2">
                      <Typography
                        variant="2xl/semibold"
                        className="text-white tracking-tighter"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="base/normal"
                        className="text-white tracking-tight"
                      >
                        {description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-7 py-20">
              <div className="col-span-5 lg:col-span-3">
                <div className="grid gap-2">
                  <SectionTag>Process</SectionTag>
                  <Typography
                    variant="5xl/medium"
                    className="tracking-tighter text-black mt-2"
                  >
                    Process in MSC
                  </Typography>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />

                <div className="grid gap-4">
                  {[
                    {
                      step: "01",
                      title: "Crystallization",
                      description:
                        "High-purity silicon ingots are grown in Morocco, forming the foundation of our photovoltaic value chain.",
                      img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/add613f9-445e-4924-a817-e93fc34d4aa0-scaled-e1708698047702.jpg",
                    },
                    {
                      step: "02",
                      title: "Wafering",
                      description:
                        "The silicon is cut into thin wafers with advanced wire-saw technology for maximum efficiency.",
                      img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/312da068-5e78-4ef9-a923-562e8045cb60-e1708697943670.jpg",
                    },
                    {
                      step: "03",
                      title: "Cell Manufacturing",
                      description:
                        "Using HJT technology, wafers are transformed into high-performance solar cells with >24.8% efficiency.",
                      img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/d15c0954-1aff-4081-a8cf-633c4b510dca-e1708697904572.jpg",
                    },
                    {
                      step: "04",
                      title: "Module Assembly",
                      description:
                        "Cells are laminated into robust, durable, and powerful solar modules ready for global markets.",
                      img: "https://moroccan-solar-cells.com/wp-content/uploads/2024/02/3kxpy-2prl0-e1708698106933.jpg",
                    },
                  ].map(({ step, title, description }) => (
                    <div key={step} className="">
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <Typography
                            variant="3xl/semibold"
                            className="tracking-tight text-darkgreen"
                          >
                            {step}
                          </Typography>
                          <Typography
                            variant="2xl/medium"
                            className="text-darkgreen tracking-tighter"
                          >
                            {title}
                          </Typography>
                        </div>

                        <Typography
                          variant="lg/normal"
                          className="text-darkgreen tracking-tight"
                        >
                          {description}
                        </Typography>
                      </div>

                      <hr className="my-4 border-gray-200" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-5 lg:col-span-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 bg-darkgreen p-1">
                  <div className="relative border border-lightgreen">
                    <div className="absolute top-0 left-0 size-10 bg-lightgreen inline-flex items-center justify-center">
                      <Typography
                        variant="2xl/semibold"
                        className="text-darkgreen"
                      >
                        01
                      </Typography>
                    </div>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      src="https://moroccan-solar-cells.com/wp-content/uploads/2024/02/add613f9-445e-4924-a817-e93fc34d4aa0-scaled-e1708698047702.jpg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="relative border border-lightgreen">
                    <div className="absolute top-0 left-0 size-10 bg-lightgreen inline-flex items-center justify-center">
                      <Typography
                        variant="2xl/semibold"
                        className="text-darkgreen"
                      >
                        02
                      </Typography>
                    </div>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      src="https://moroccan-solar-cells.com/wp-content/uploads/2024/02/312da068-5e78-4ef9-a923-562e8045cb60-e1708697943670.jpg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="relative border border-lightgreen">
                    <div className="absolute top-0 left-0 size-10 bg-lightgreen inline-flex items-center justify-center">
                      <Typography
                        variant="2xl/semibold"
                        className="text-darkgreen"
                      >
                        03
                      </Typography>
                    </div>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      src="https://moroccan-solar-cells.com/wp-content/uploads/2024/02/d15c0954-1aff-4081-a8cf-633c4b510dca-e1708697904572.jpg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                  <div className="relative border border-lightgreen">
                    <div className="absolute top-0 left-0 size-10 bg-lightgreen inline-flex items-center justify-center">
                      <Typography
                        variant="2xl/semibold"
                        className="text-darkgreen"
                      >
                        04
                      </Typography>
                    </div>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img
                      src="https://moroccan-solar-cells.com/wp-content/uploads/2024/02/3kxpy-2prl0-e1708698106933.jpg"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>
      </div>
    </div>
  );
}
