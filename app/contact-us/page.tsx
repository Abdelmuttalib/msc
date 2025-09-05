import { Section, SectionTag } from "@/components/common";
import { PageContainer } from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "@/components/ui/typography";
import { MailIcon, MapPin, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ContactUs />
    </>
  );
}

function ContactUs() {
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
          <div className="h-full w-full flex flex-col size-full justify-end py-24 pb-8 items-end">
            <PageContainer className="flex items-center justify-center">
              <div className="text-white flex flex-col gap-6 max-w-2xl items-center">
                <SectionTag>Contact</SectionTag>
                <Typography
                  variant="7xl/medium"
                  className="text-darkgreen tracking-tighter"
                >
                  Contact us.
                </Typography>
              </div>
            </PageContainer>
          </div>
        </div>
        {/* About */}
        <Section>
          <PageContainer className="flex flex-col gap-12 items-center">
            <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-7">
              <div className="col-span-5 lg:col-span-3">
                <div className="grid gap-6">
                  <SectionTag>Get in touch</SectionTag>
                  <Typography
                    variant="5xl/medium"
                    className="tracking-tighter text-black"
                  >
                    Connect with us to drive green success.
                  </Typography>
                  <Typography variant="lg/normal" className="text-black">
                    Our team is here to support your sustainable goals. Whether
                    you have questions, need assistance, or want to collaborate,
                    we&apos;re ready to help you take the next step toward a
                    greener future Icon
                  </Typography>
                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />

                <div className="grid gap-6 tracking-tight">
                  <div className="flex items-center gap-4">
                    <MapPin className="size-5 text-black" />
                    <Typography variant="lg/medium" className="text-black">
                      43. Rue Aguelmane Sidi Ali Agdal 10090, RABAT, Morocco
                    </Typography>
                  </div>
                  <div className="flex items-center gap-4">
                    <PhoneIcon className="size-5 text-black" />

                    <Typography variant="lg/medium" className="text-black">
                      +212 653 660 720 / + 41 764 750 234
                    </Typography>
                  </div>
                  <div className="flex items-center gap-4">
                    <MailIcon className="size-5 text-black" />

                    <Typography variant="lg/medium" className="text-black">
                      jaafar@moroccan-solar-cells.com
                    </Typography>
                  </div>
                </div>
              </div>

              <div className="col-span-5 lg:col-span-4">
                <div className="flex flex-col gap-10 bg-darkgreen p-6 sm:p-10">
                  <div className="flex flex-col gap-10">
                    <div className="text-center">
                      <Typography
                        variant="4xl/medium"
                        className="tracking-tighter text-white"
                      >
                        Send us a message
                      </Typography>
                    </div>

                    <div className="grid gap-6">
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label className="text-gray-200 uppercase text-xs">
                            First Name*
                          </Label>
                          <Input
                            placeholder="First name"
                            className="w-full rounded-none h-14 text-white placeholder:text-white sm:text-lg border-transparent text-lg border-b border-b-lightgreen bg-[#2b5254]"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label className="text-gray-200 uppercase text-xs">
                            Last Name*
                          </Label>
                          <Input
                            placeholder="Last name"
                            className="w-full rounded-none h-14 text-white placeholder:text-white sm:text-lg border-transparent text-lg border-b border-b-lightgreen bg-[#2b5254]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label className="text-gray-200 uppercase text-xs">
                            Email*
                          </Label>
                          <Input
                            placeholder="Email"
                            className="w-full rounded-none h-14 text-white placeholder:text-white sm:text-lg border-transparent text-lg border-b border-b-lightgreen bg-[#2b5254]"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label className="text-gray-200 uppercase text-xs">
                            Phone
                          </Label>
                          <Input
                            placeholder="Phone"
                            className="w-full rounded-none h-14 text-white placeholder:text-white sm:text-lg border-transparent text-lg border-b border-b-lightgreen bg-[#2b5254]"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-5">
                        <div className="grid gap-2">
                          <Label className="text-gray-200 uppercase text-xs">
                            Message*
                          </Label>
                          <Textarea
                            placeholder="Message"
                            className="w-full rounded-none text-white placeholder:text-white sm:text-lg border-transparent text-lg border-b border-b-lightgreen bg-[#2b5254] min-h-40"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4">
                        <Button className="rounded-none text-base py-5 px-6 bg-lightgreen text-darkgreen hover:bg-lightgreen/90">
                          Submit
                        </Button>
                      </div>
                    </div>
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
