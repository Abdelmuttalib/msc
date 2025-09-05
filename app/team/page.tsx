import { SectionTag } from "@/components/common";
import { PageContainer } from "@/components/page-container";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Team />
    </>
  );
}

function Team() {
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
                  {[
                    {
                      href: "/about-us",
                      label: "About",
                    },
                    {
                      href: "/team",
                      label: "Team",
                    },
                    {
                      href: "/contact-us",
                      label: "Contact",
                    },
                  ].map((link) => (
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
                <SectionTag>Team</SectionTag>
                <Typography
                  variant="7xl/medium"
                  className="text-darkgreen tracking-[-0.3rem]"
                >
                  Our Team
                </Typography>
              </div>
            </PageContainer>

            <PageContainer className="flex flex-col gap-12 items-center mt-10">
              <div className="flex flex-col gap-16">
                <div className="text-center flex flex-col items-center gap-4"></div>
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-1">
                  <div className="flex flex-col gap-6 order-last">
                    <Typography
                      variant="5xl/medium"
                      className="text-black tracking-tighter"
                    >
                      Leadership Driving Morocco’s{" "}
                      <span className="text-lightgreen">Solar </span>Future
                    </Typography>

                    <Typography
                      variant="xl/normal"
                      className="text-black tracking-tight max-w-lg"
                    >
                      Our leadership combines international expertise in
                      photovoltaics with a deep commitment to Morocco’s
                      renewable future.
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
                  <div className="grid grid-cols-1 gap-36 mb-10">
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
                    ]
                      .reverse()
                      .map((team) => (
                        <div
                          key={team.name}
                          className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
                        >
                          <div className="relative">
                            <div className="size-6 bg-white absolute bottom-0 right-0 inline-flex items-center justify-center text-xl text-white z-10">
                              <div className="absolute w-full h-0.5 bg-darkgreen"></div>
                              <div className="absolute w-full h-0.5 bg-darkgreen rotate-90"></div>
                              <div className="absolute w-full h-0.5 bg-darkgreen rotate-45"></div>
                              <div className="absolute w-full h-0.5 bg-darkgreen -rotate-45"></div>
                            </div>
                            {/* eslint-disable @next/next/no-img-element */}
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
                              <Typography
                                variant="base/normal"
                                className="text-white"
                              >
                                {team.description}
                              </Typography>
                            </div>
                          </div>

                          <div className="py-8">
                            <Typography
                              variant="2xl/semibold"
                              className="text-black tracking-tighter"
                            >
                              {team.title}
                            </Typography>
                            <Typography
                              variant="base/normal"
                              className="text-black"
                            >
                              {team.description}
                            </Typography>
                            <hr className="my-4 border-gray-200" />
                            <Typography
                              variant="xl/normal"
                              className="text-black"
                            >
                              {team.bio}
                            </Typography>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </PageContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
