import { Section, SectionTag } from "@/components/common";
import { PageContainer } from "@/components/page-container";
import { Typography } from "@/components/ui/typography";
import { pageNavLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Link from "next/link";

// export const moduleVariants = [
//   {
//     model: "MSCGEMINI-710",
//     stc: {
//       maxPower: "710 W",
//       outputTolerance: "0 ~ +5 W",
//       voltageAtMpp: "41.57 V",
//       currentAtMpp: "17.10 A",
//       openCircuitVoltage: "49.37 V",
//       shortCircuitCurrent: "17.71 A",
//       efficiency: "22.87%",
//     },
//     nmot: {
//       maxPower: "792 W",
//       voltageAtMpp: "41.73 V",
//       currentAtMpp: "18.99 A",
//       openCircuitVoltage: "49.55 V",
//       shortCircuitCurrent: "19.67 A",
//     },
//   },
//   {
//     model: "MSCGEMINI-715",
//     stc: {
//       maxPower: "715 W",
//       outputTolerance: "0 ~ +5 W",
//       voltageAtMpp: "41.63 V",
//       currentAtMpp: "17.18 A",
//       openCircuitVoltage: "49.41 V",
//       shortCircuitCurrent: "17.73 A",
//       efficiency: "23.01%",
//     },
//     nmot: {
//       maxPower: "798 W",
//       voltageAtMpp: "41.78 V",
//       currentAtMpp: "19.09 A",
//       openCircuitVoltage: "49.59 V",
//       shortCircuitCurrent: "19.69 A",
//     },
//   },
//   {
//     model: "MSCGEMINI-720",
//     stc: {
//       maxPower: "720 W",
//       outputTolerance: "0 ~ +5 W",
//       voltageAtMpp: "41.67 V",
//       currentAtMpp: "17.29 A",
//       openCircuitVoltage: "49.43 V",
//       shortCircuitCurrent: "17.79 A",
//       efficiency: "23.17%",
//     },
//     nmot: {
//       maxPower: "803 W",
//       voltageAtMpp: "41.82 V",
//       currentAtMpp: "19.20 A",
//       openCircuitVoltage: "49.61 V",
//       shortCircuitCurrent: "19.75 A",
//     },
//   },
//   {
//     model: "MSCGEMINI-725",
//     stc: {
//       maxPower: "725 W",
//       outputTolerance: "0 ~ +5 W",
//       voltageAtMpp: "41.75 V",
//       currentAtMpp: "17.38 A",
//       openCircuitVoltage: "49.50 V",
//       shortCircuitCurrent: "17.82 A",
//       efficiency: "23.36%",
//     },
//     nmot: {
//       maxPower: "809 W",
//       voltageAtMpp: "41.91 V",
//       currentAtMpp: "19.31 A",
//       openCircuitVoltage: "49.68 V",
//       shortCircuitCurrent: "19.79 A",
//     },
//   },
//   {
//     model: "MSCGEMINI-730",
//     stc: {
//       maxPower: "730 W",
//       outputTolerance: "0 ~ +5 W",
//       voltageAtMpp: "41.82 V",
//       currentAtMpp: "17.46 A",
//       openCircuitVoltage: "49.54 V",
//       shortCircuitCurrent: "17.84 A",
//       efficiency: "23.50%",
//     },
//     nmot: {
//       maxPower: "814 W",
//       voltageAtMpp: "41.97 V",
//       currentAtMpp: "19.39 A",
//       openCircuitVoltage: "49.73 V",
//       shortCircuitCurrent: "19.82 A",
//     },
//   },
// ];

// function SpecsTable() {
//   return (
//     <div className="overflow-x-auto rounded-lg shadow-md">
//       <table className="min-w-full text-sm text-left border-collapse">
//         <thead className="bg-gray-100 text-gray-700">
//           <tr>
//             <th className="p-3">Model</th>
//             <th className="p-3">Max Power (STC)</th>
//             <th className="p-3">Efficiency</th>
//             <th className="p-3">Voltage @ MPP</th>
//             <th className="p-3">Current @ MPP</th>
//             <th className="p-3">Voc</th>
//             <th className="p-3">Isc</th>
//             <th className="p-3">Max Power (NMOT)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {moduleVariants.map((variant, idx) => (
//             <tr
//               key={variant.model}
//               className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//             >
//               <td className="p-3 font-medium">{variant.model}</td>
//               <td className="p-3">{variant.stc.maxPower}</td>
//               <td className="p-3">{variant.stc.efficiency}</td>
//               <td className="p-3">{variant.stc.voltageAtMpp}</td>
//               <td className="p-3">{variant.stc.currentAtMpp}</td>
//               <td className="p-3">{variant.stc.openCircuitVoltage}</td>
//               <td className="p-3">{variant.stc.shortCircuitCurrent}</td>
//               <td className="p-3">{variant.nmot.maxPower}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// shadcn data table
// export const columns: ColumnDef<any>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "amount",
//     header: "Amount",
//   },
// ];

export default function ProductPage() {
  return (
    <div className="font-sans">
      <div>
        <div className="relative">
          <div className="z-30 w-full top-0 h-16 flex items-center justify-center bg-transparent backdrop-blur-xl sticky">
            <PageContainer className="flex items-center justify-between">
              <div className="flex items-center gap-x-6">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-black">
                  <Link href="/">
                    MSC
                    <span className="ml-2 font-normal text-gray-700 text-base sm:text-xl">
                      Moroccan Solar Cells
                      {/* Securico */}
                    </span>
                  </Link>
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
          <div className="h-full w-full flex flex-col size-full justify-end py-24 pb-8 items-end">
            <PageContainer className="flex items-center justify-center">
              <div className="text-white flex flex-col gap-6 max-w-2xl items-center">
                <SectionTag>Product</SectionTag>
                <Typography
                  variant="7xl/medium"
                  className="text-darkgreen tracking-tighter"
                >
                  Product
                </Typography>
              </div>
            </PageContainer>
          </div>
        </div>
        {/* Technology */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-8">
              <div className="col-span-5 lg:col-span-4">
                <div className="flex flex-col gap-10 pt-8">
                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      MSC GEMINI 710–730W Bifacial HJT Solar Modules
                    </Typography>
                    <Typography variant="lg/normal">
                      Designed for maximum performance in the harshest
                      environments, the MSC GEMINI series delivers up to 730W of
                      power with industry-leading efficiency of 23.5%. Featuring
                      HJT bifacial technology, dual-glass construction, and
                      desert-proven durability, GEMINI is built to power the
                      clean energy future.
                      <br />
                      <br />
                      Ultra-high efficiency. Proven durability. Designed for
                      Morocco & the world.
                    </Typography>
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full text-left py-2 lg:grid-cols-1">
                        {[
                          "710–730W Power Range",
                          "23.5% Efficiency",
                          "40-Year Guarantee",
                          "Desert-Proven Reliability",
                        ].map((j, i) => (
                          <div
                            key={j}
                            className="bg-darkgreen border relative grid grid-cols-8"
                          >
                            <div
                              className={cn(
                                "col-span-8 p-2 lg:p-3 bg-darkgreen",
                                {
                                  "": i % 2 === 1,
                                }
                              )}
                            >
                              <Typography
                                variant="xl/semibold"
                                className="text-white tracking-tight"
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
              <div className="col-span-5 lg:col-span-4 order-first lg:order-last">
                <div className="">
                  <div className="flex items-end justify-end">
                    <div className="overflow-hidden">
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src="/images/PVModuleHJT.png"
                        alt=""
                        className="block size-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>

        <Section id="advantages" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="" className="">
                    Advantages
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Key Advantages
                    </Typography>
                    <Typography variant="lg/normal">
                      The MSC GEMINI module combines cutting-edge HJT technology
                      with superior mechanical strength and long-term
                      reliability, making it one of the most advanced solar
                      modules available.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 flex-wrap">
                  {[
                    {
                      heading: "N-Type Bifacial Technology",
                      description: "Higher energy yield from both sides",
                    },
                    {
                      heading: "HJT Glass/Glass Construction",
                      description: "Enhanced durability and lower degradation",
                    },
                    {
                      heading: "High Efficiency",
                      description: "Module efficiency up to 23.5%",
                    },
                    {
                      heading: "Strengthened Load Capacity",
                      description:
                        "Withstands 5400 Pa snow load, 2400 Pa wind load",
                    },
                    {
                      heading: "Ultra-Low Temperature Coefficient (-0.26%/°C)",
                      description: "Stable output in hot climates",
                    },
                    {
                      heading: "40-Year Guarantee",
                      description:
                        "Long-term confidence backed by proven performance",
                    },
                    {
                      heading: "Desert Proven",
                      description:
                        "Designed to operate under extreme conditions",
                    },
                  ].map((s) => (
                    <div key={s.heading} className="bg-darkgreen p-4">
                      <Typography
                        variant="2xl/semibold"
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

                {/* <img
                  src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                  alt=""
                  className="w-full"
                /> */}
              </div>
            </div>
          </PageContainer>
        </Section>
        {/* technical specifications */}
        <Section id="specifications" className="bg-accent/40">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="" className="">
                    Specifications
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Technical Specifications
                    </Typography>
                    <Typography variant="lg/normal">
                      Comprehensive specifications for the MSC GEMINI 710–730
                      series, ensuring full transparency for engineers,
                      developers, and procurement teams.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 w-full text-left">
                  {[
                    {
                      title: "Mechanical Parameters",
                      items: [
                        { label: "Dimensions", value: "2384 × 1303 × 32 mm" },
                        { label: "Weight", value: "38.4 kg" },
                        {
                          label: "Glass Thickness",
                          value: "2.0 mm Dual Glass",
                        },
                        { label: "Frame", value: "Anodized Aluminum Alloy" },
                        {
                          label: "Cell",
                          value: "132 × HJT Half-Cut (210 × 105 mm)",
                        },
                        { label: "Junction Box & Connector", value: "IP68" },
                      ],
                    },
                    {
                      title: "Electrical Performance (at STC)",
                      range: "",
                      efficiency: "",
                      items: [
                        { label: "Range", value: "710–730 W" },
                        { label: "Efficiency", value: "22.87% – 23.50%" },
                        { label: "Voc", value: "49.37–49.54 V" },
                        { label: "Isc", value: "17.71–17.84 A" },
                        { label: "Current at MPP", value: "17.10–17.46 A" },
                        { label: "Output Tolerance", value: "0 to +5 W" },
                      ],
                    },
                    //                     Operating Conditions

                    // Temperature Range: -40°C to +85°C

                    // Max Series Fuse Rating: 30 A

                    // Fire Rating: Class C

                    // Nominal Operating Temp (NOCT): 43±2 °C

                    {
                      title: "Operating Conditions",
                      items: [
                        { label: "Temperature Range", value: "-40°C to +85°C" },
                        { label: "Max Series Fuse Rating", value: "30 A" },
                        { label: "Fire Rating", value: "Class C" },
                        {
                          label: "Nominal Operating Temp (NOCT)",
                          value: "43±2 °C",
                        },
                      ],
                    },
                  ].map((j) => (
                    <div
                      key={j.title}
                      className={cn(
                        "relative p-4 bg-white border-b-2 border border-darkgreen/15 border-b-darkgreen flex flex-col gap-2"
                      )}
                    >
                      <div className="size-6 bg-lightgreen/70 absolute top-0 right-0 inline-flex items-center justify-center text-xl text-white">
                        <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                        <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Typography
                          className="text-darkgreen tracking-tight"
                          variant="2xl/medium"
                        >
                          {/* {i + 1}.  */}
                          {j.title}
                        </Typography>
                        <div>
                          <ul className="list-disc flex flex-col gap-1">
                            {j.items.map((item) => (
                              <li key={item.label} className="ml-4">
                                <Typography
                                  className="text-darkgreen/80 tracking-tight"
                                  variant="lg/medium"
                                >
                                  {item.label}: {item.value}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* <img
                  src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                  alt=""
                  className="w-full"
                /> */}
              </div>
            </div>
          </PageContainer>
        </Section>
        {/*  */}
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
                      Advanced Technology
                    </Typography>
                    <Typography variant="lg/normal">
                      The MSC GEMINI is powered by patented HJT and H2GEMINI
                      technology, ensuring maximum performance, reliability, and
                      longevity in every environment.
                    </Typography>
                    <div>
                      <div className="grid grid-cols-1 gap-2 md:gap-4 bg-white md:grid-cols-2 w-full text-left py-4">
                        {[
                          {
                            title: "High Flexibility",
                            text: "Unique HJT structure reduces microcracks during transport, installation, and operation.",
                          },
                          {
                            title: "Optimized Super-Grid",
                            text: "Improved current transfer with reduced shading and higher tolerance to busbar breaks.",
                          },
                          {
                            title: "Low-Temperature Process",
                            text: "Manufactured under <250°C soldering, reducing thermal stress and enhancing durability.",
                          },
                          {
                            title: "Ultra-Low Temperature Coefficient",
                            text: "Lower losses at high operating temperatures compared to PERC and TOPCon modules.",
                          },
                        ].map((j) => (
                          <div key={j.title} className="bg-white flex flex-col">
                            {/* <span className="size-6 bg-darkgreen inline-flex items-center justify-center text-white">
                              <CheckIcon className="w-5 h-5 text-lightgreen" />
                            </span> */}
                            <div className="p-3 bg-darkgreen">
                              <div className="flex gap-2 items-center">
                                <span className="size-6 bg-darkgreen inline-flex items-center justify-center text-white">
                                  <CheckIcon className="w-5 h-5 text-lightgreen" />
                                </span>
                                <Typography
                                  variant="xl/medium"
                                  className="bg-darkgreen text-white"
                                >
                                  {j.title}
                                </Typography>
                              </div>
                              <Typography
                                variant="lg/normal"
                                className="bg-darkgreen text-white/80 ml-8"
                              >
                                {j.text}
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
                    <div>
                      {/* eslint-disable @next/next/no-img-element */}
                      <img
                        src="/images/PVModuleHJT-white.webp"
                        alt=""
                        className="block size-full object-contain bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>

        {/* Technology */}
        <Section id="environment" className="bg-accent/60">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-5">
                <div className="flex flex-col gap-10">
                  <SectionTag id="value" className="">
                    Environment
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Built for Every Environment
                    </Typography>
                    <Typography variant="2xl/normal">
                      From large-scale solar farms to high-demand industrial
                      applications, MSC GEMINI modules are engineered to perform
                      where reliability and efficiency matter most.
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-span-5 lg:col-span-5">
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-1 w-full text-left">
                    {[
                      "Utility-scale solar power plants",
                      "Desert and extreme climate installations",
                      "Commercial rooftops and industrial systems",
                      "Hybrid renewable energy projects",
                    ].map((j) => (
                      <div
                        key={j}
                        className={cn(
                          "relative p-3 bg-white border-b-2 border-lightgreen flex flex-col gap-2 h-fit"
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
                            {j}
                          </Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-darkgreen order-first xl:order-last">
                    {/* eslint-disable @next/next/no-img-element */}
                    {/* <img
                      src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                      // src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full opacity-90"
                    /> */}
                    <img
                      src="https://images.unsplash.com/photo-1643826884444-7cf7fd46c69f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      // src="https://framerusercontent.com/images/axh6uBVzfcWemJ09UA0Xht6Wv8.jpg?scale-down-to=1024"
                      alt=""
                      className="w-full opacity-90"
                    />
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </Section>

        {/* video */}

        {/* Video */}
        <Section id="video" className="">
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-4">
              <div className="col-span-5 lg:col-span-2">
                <div className="flex flex-col gap-10">
                  <SectionTag id="video" className="">
                    Video
                  </SectionTag>

                  <div className="flex flex-col gap-6">
                    <Typography
                      variant="5xl/medium"
                      className="tracking-tighter"
                    >
                      Inside the Technology
                    </Typography>
                    <Typography variant="lg/normal">
                      See how MSC, in partnership with H2GEMINI, brings advanced
                      solar technology to Morocco.
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="col-span-5 lg:col-span-5">
                <div className="relative w-full h-full p-1 md:p-2.5 border border-black/10 rounded-lg overflow-hidden shadow-xl bg-white/20 backdrop-blur-xl">
                  {/* <div className="absolute -inset-[var(--padding)] rounded-[calc(var(--radius)+var(--padding))] shadow-sm ring-1 ring-black/5 [--padding:theme(spacing.2)] bg-gray-100 -z-10"></div> */}
                  {/* <img
                    src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                    className="h-full rounded-md ring-1 ring-black/10 w-full"
                  /> */}
                  <video
                    controls
                    playsInline
                    // poster="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg" // optional thumbnail image
                    className="w-full h-auto rounded-md ring-1 ring-black/10"
                  >
                    <source
                      src="/videos/msc-h2gemini-video.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                {/* <img
                  src="https://moroccan-solar-cells.com/wp-content/uploads/2025/01/13627641.jpeg"
                  alt=""
                  className="w-full"
                /> */}
              </div>
            </div>
          </PageContainer>
        </Section>
      </div>
    </div>
  );
}
