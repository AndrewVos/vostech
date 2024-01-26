import Image from "next/image";
import Link from "next/link";

import { CompanyName, CompanyEmail } from "./config";

// language icons come from here
// https://icones.netlify.app/collection/mdi?s=

const Technologies = [
  {
    name: "Rails",
    icon: <svg className="w-full" viewBox="0 0 24 24"><path fill="currentColor" d="M19.8 16.7s1.8-.2 1.8-2.4c0-2.2-2.1-2.5-2.1-2.5h-3.8V19h1.9v-1.7l1.7 1.7H22zm-.8-1.4h-1.5v-1.6H19s.4.2.4.8c.1.6-.4.8-.4.8m2.3-7.1v.2C13.2 6.1 10 13.2 10.6 18.7H4.3c.7-5.4 7.5-16.1 17-10.5m-.8-1.3c-.7-.3-1.4-.6-2.1-.8l.1-1.3l2.1.8zm-2 1.8c.7 0 1.4.1 2.1.3l-.1 1.2l-1.8-.2zm-4.6-2.9l-.4-1.2l2.1-.2l.4 1.3c-.2 0-1.9.1-2.1.1m1.3 3.7c.4-.2 1.1-.5 2-.7l.4 1.2l-1.8.7zm-3.4-3c-.6.3-1.2.6-1.8 1l-.8-1.3l1.8-1zm2.5 3.6l.8 1.2l-1.1 1.3l-1.1-1c.3-.6.8-1.1 1.4-1.5M11.6 15c.1-.8.3-1.5.6-2.3l1.2 1l-.3 1.9zM7.9 9.3c-.5.5-1 1.1-1.4 1.6L5.2 9.8l1.5-1.6zm-3.1 4.4c-.4.8-.7 1.6-1 2.3L2 15.3l.9-2.3zm6.7 2.6l1.8.6l.3 2l-2-.5c0-.2-.1-.9-.1-2.1"></path></svg>
  },
  {
    name: "React", icon: <svg className="w-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 10.11c1.03 0 1.87.84 1.87 1.89c0 1-.84 1.85-1.87 1.85c-1.03 0-1.87-.85-1.87-1.85c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86c.27.06.57.11.88.16zm6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03c.6 0 1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16zm1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68c0 1.69-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.38 1.95c-1.46-.84-1.62-3.05-1-5.63c-2.54-.75-4.37-1.99-4.37-3.68c0-1.69 1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63c1.47-.84 3.46.12 5.38 1.95c1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26c2.1-.63 3.28-1.53 3.28-2.26c0-.73-1.18-1.63-3.28-2.26c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26c-2.1.63-3.28 1.53-3.28 2.26c0 .73 1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16c-.07-.28-.18-.57-.29-.86zm-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7c.64-.35.83-1.82.32-3.96c-.77.16-1.58.28-2.4.36c-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16c.07.28.18.57.29.86zm2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 0 1 2.4-.36c.48-.67.99-1.31 1.51-1.9"></path></svg>
  },
  {
    name: "Ruby", icon: <svg className="w-full" viewBox="0 0 24 24"><path fill="currentColor" d="M18.8 2.07c2.52.43 3.24 2.16 3.2 3.97V6l-1.14 14.93l-14.78 1.01h.01c-1.23-.05-3.96-.17-4.09-3.99l1.37-2.5l2.77 6.46l2.36-7.62l-.05.01l.02-.02l7.71 2.46l-1.99-7.78l7.35-.46l-5.79-4.74l3.05-1.7zM2 17.91v.02zM6.28 6.23c2.96-2.95 6.79-4.69 8.26-3.2c1.46 1.47-.08 5.09-3.04 8.03c-3 2.94-6.77 4.78-8.24 3.3c-1.47-1.49.04-5.19 3.01-8.13z"></path></svg>
  },
  {
    name: "TypeScript", icon: <svg className="w-full" viewBox="0 0 24 24"><path fill="currentColor" d="M18.8 2.07c2.52.43 3.24 2.16 3.2 3.97V6l-1.14 14.93l-14.78 1.01h.01c-1.23-.05-3.96-.17-4.09-3.99l1.37-2.5l2.77 6.46l2.36-7.62l-.05.01l.02-.02l7.71 2.46l-1.99-7.78l7.35-.46l-5.79-4.74l3.05-1.7zM2 17.91v.02zM6.28 6.23c2.96-2.95 6.79-4.69 8.26-3.2c1.46 1.47-.08 5.09-3.04 8.03c-3 2.94-6.77 4.78-8.24 3.3c-1.47-1.49.04-5.19 3.01-8.13z"></path></svg>
  },
  {
    name: "JavaScript", icon: <svg className="w-full" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18v18H3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55c1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08c-.58 0-.82-.4-1.09-.87zm5.98-.18c.5.98 1.51 1.73 3.09 1.73c1.6 0 2.8-.83 2.8-2.36c0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02c0-.41.31-.73.81-.73c.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33c-1.51 0-2.48.96-2.48 2.23c0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13c0 .48-.45.83-1.15.83c-.83 0-1.31-.43-1.67-1.03z" /></svg>
  },
  {
    name: "Postgresql", icon: <svg className="w-full" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4m6 14c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36zM12 9C8.13 9 6 7.5 6 7s2.13-2 6-2s6 1.5 6 2s-2.13 2-6 2"></path></svg>
  },
]

const Clients = [
  { name: "BBC", image: "/images/logos/bbc.png" },
  { name: "BBC News", image: "/images/logos/bbc-news.png" },
  { name: "Featurist", image: "/images/logos/featurist.png" },
  { name: "Florence", image: "/images/logos/florence.png" },
  { name: "Fullsix", image: "/images/logos/fullsix.png" },
  { name: "GAIN Capital", image: "/images/logos/gain-capital.png" },
  { name: "GDS", image: "/images/logos/gds.png" },
  { name: "Honeycomb", image: "/images/logos/honeycomb-tv.png" },
  { name: "ITV", image: "/images/logos/itv.png" },
  { name: "PensionWise", image: "/images/logos/pension-wise.png" },
  { name: "Shopa", image: "/images/logos/shopa.png" },
  { name: "Sky", image: "/images/logos/sky.png" },
  { name: "ChangeLab", image: "/images/logos/changelab.png" },
  { name: "MoneyHelper", image: "/images/logos/moneyhelper.png" },
  { name: "Quidco", image: "/images/logos/quidco.png" }
]

const Team = [
  {
    name: "Andrew Vos",
    image: "/images/team/andrew-vos.jpg",
    role: "Senior Full Stack Software Engineer",
    bio: "Andrew is a software engineer with over 15 years of experience. He has worked with a wide range of clients, from startups to large corporations, and has a passion for building great products."

  },
  {
    name: "Andrew Vos2",
    image: "/images/team/andrew-vos.jpg",
    role: "Senior Full Stack Software Engineer",
    bio: "Andrew is a software engineer with over 15 years of experience. He has worked with a wide range of clients, from startups to large corporations, and has a passion for building great products."

  },
]

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto px-4">
      {children}
    </div>
  )
}


const SectionHeader = ({ id, title }: { id?: string, title: string }) => {
  return (<div id={id} className="text-4xl lg:text-6xl font-bold mb-12">{title}</div>)
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="space-y-24 md:space-y-48 mb-24">
        <Container>
          <div className="header flex items-center pt-12">
            <h1 className="text-4xl font-bold">
              <Link href="/" className="hover:underline">
                {CompanyName}
              </Link>
            </h1>
            <div className="grow"></div>
            <div className="sm:flex">
              <div>
                <Link href="#our-team" className="text-gray-900 font-bold px-2 py-1 hover:underline">Team</Link>
              </div>
              <div>
                <Link href="#our-clients" className="text-gray-900 font-bold px-2 py-1 hover:underline">Clients</Link>
              </div>
              <div>
                <Link href="#contact" className="text-gray-900 font-bold px-2 py-1 hover:underline">Contact</Link>
              </div>
            </div>
          </div>
        </Container>

        <div className="bg-gray-100">
          <Container>
            <div className="space-y-5 py-24">
              <div className="text-4xl md:text-6xl lg:text-8xl">
                Your <span className="font-bold">Vision</span>
              </div>
              <div className="text-4xl md:text-6xl lg:text-8xl">
                Our <span className="font-bold">Expertise</span>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <SectionHeader title="We do" />

          <div className="space-y-12">
            <div className="space-y-3 ml-8">
              <div className="text-4xl lg:text-6xl"><span className="font-bold">&gt;</span> Product Engineering</div>
              <div className="prose lg:prose-xl">We build your product from the ground up, from ideation to launch, using the latest technologies and best practices.</div>
            </div>
            <div className="space-y-3 ml-8">
              <div className="text-4xl lg:text-6xl"><span className="font-bold">&gt;</span> Project Management</div>
              <div className="prose lg:prose-xl">Our teams come with a wealth of experience in managing projects of all sizes, ensuring seamless delivery and client satisfaction.</div>
            </div>
            <div className="space-y-3 ml-8">
              <div className="text-4xl lg:text-6xl"><span className="font-bold">&gt;</span> Product Maintenance</div>
              <div className="prose lg:prose-xl">We continuously improve your product, removing bugs and adding features along the way.</div>
            </div>
          </div>
        </Container>

        <Container>
          <SectionHeader title="Our Tech Stack" />
          <div className="flex gap-8 flex-wrap">
            {Technologies.map((tech) => (
              <div key={tech.name} className="flex items-center gap-5 rounded-full bg-gray-100">
                <div className="w-24 mx-auto text-white bg-gray-700 p-5 rounded-full">
                  {tech.icon}
                </div>
                <div className="text-3xl font-bold grow pr-8">{tech.name}</div>
              </div>
            ))}
          </div>
        </Container>

        <Container>
          <div>
            <SectionHeader id="our-team" title="Our Team" />
            <div className="space-y-12">
              {Team.map((member) => (
                <div key={member.name} className="flex flex-col md:flex-row px-8 py-8 gap-8">
                  <div className="flex items-center justify-center">
                    <Image className="rounded-full" src={member.image} alt="" width={200} height={200} />
                  </div>
                  <div className="text-center md:text-left" >
                    <div className="text-lg font-medium text-sky-500">
                      {member.name}
                    </div>
                    <div className="text-lg font-medium text-slate-700 mb-5">
                      {member.role}
                    </div>
                    <div className="prose lg:prose-xl">
                      {member.bio}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <Container>
          <SectionHeader id="our-clients" title="Our Clients" />
          <div className="flex flex-wrap">
            {Clients.map((client) => (
              <div key={client.name} className="logo w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
                <div className="border border-gray-900 shadow h-full flex items-center justify-center p-3 bg-white">
                  <Image className={"max-w-[200px]"} alt={`${client.name} logo`} src={client.image} width={500} height={500} />
                </div>
              </div>
            ))}
          </div>
        </Container>

        <Container>
          <div>
            <SectionHeader title="Our Practices" />
            <div className="text-4xl lg:text-6xl font-bold mb-12"></div>
            <ul className="list-disc ml-12">
              <li className="prose lg:prose-xl">Agile</li>
              <li className="prose lg:prose-xl">Continuous Delivery</li>
              <li className="prose lg:prose-xl">Continuous Integration</li>
              <li className="prose lg:prose-xl">Test-Driven Development</li>
              <li className="prose lg:prose-xl">Automated Testing</li>
              <li className="prose lg:prose-xl">Code Review</li>
            </ul>
          </div>
        </Container>

        <Container>
          <SectionHeader id="contact" title="Contact Us" />
          <div className="text-xl font-medium ml-12">
            Email us at <Link href={`mailto:{CompanyEmail}`} className="font-bold">{CompanyEmail}</Link>
          </div>
        </Container>

      </div>
    </main >
  );
}
