import AppSection from '@/components/custom/app-section'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import ServiceCard from '@/components/custom/service-card'
import TwoColSection from '@/components/custom/two-col-section'
import FacebookIcon from '@/components/icons/facebook-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import YoutubeIcon from '@/components/icons/youtube-icon'
import { Button } from '@/components/ui/button'
import { DownloadIcon, SettingsIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      {/* Home */}
      <div className="app-container">
        <TwoColSection>
          <div className="bg-[url('/images/home-vector.png')] bg-cover bg-center">
            <p className="text-gray-500">Hi I am</p>
            <h2 className="text-lg font-semibold text-gray-400">Truong Nguyen</h2>
            <h1 className="text-6xl font-semibold text-primary">UI/UX Designer</h1>

            <div className="flex gap-4 mt-10 mx-auto">
              <FacebookIcon className="icon-hover" />
              <GithubIcon className="icon-hover" />
              <LinkedinIcon className="icon-hover" />
              <YoutubeIcon className="icon-hover" />
            </div>
            <div className="flex gap-4 mt-10">
              <Button className="min-w-36"> Hire Me</Button>
              <Button className="min-w-36" variant={'outline'}>
                Download CV
              </Button>
            </div>

            <div className="w-11/12 bg-card flex flex-row gap-5 p-5 mt-10  justify-between rounded-lg">
              <div className="flex flex-col">
                <h5 className="text-primary">5+</h5>
                <p className="text-sm text-white font-semibold">Experiences</p>
              </div>
              <div className="flex flex-col border-l-3 border-gray-400 pl-8">
                <h5 className="text-primary">20+</h5>
                <p className="text-sm text-white font-semibold">Projects Done</p>
              </div>
              <div className="flex flex-col border-l-3 border-gray-400 pl-8">
                <h5 className="text-primary">80+</h5>
                <p className="text-sm text-white font-semibold">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end select-none">
            <div className="relative w-[400px] aspect-square">
              <div className="bg-card w-full aspect-square mx-auto rounded-full absolute bottom-0 right-0" />
              <div className="w-full h-[125%] absolute bottom-0 rounded-full overflow-hidden right-0">
                <div className="relative w-full h-full">
                  <Image
                    src={'/images/avatar.png'}
                    fill
                    className="object-contain"
                    alt="truong nguyen avatar"
                  />
                </div>
              </div>
            </div>
          </div>
        </TwoColSection>
        {/* service */}
        <AppSection>
          <SectionTitle value="Services" />
          <SectionDescription value="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam" />
          <div className="grid grid-cols-3 gap-5 mt-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <ServiceCard
                key={index}
                name={`Service ${index + 1}`}
                description="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam"
                icon={<SettingsIcon className="text-primary" size={40} />}
              />
            ))}
          </div>
        </AppSection>
        {/* about me */}
        <AppSection>
          <SectionTitle value="About Me" />
          <SectionDescription value="User Interface and User Experience and Also video editing " />
          <TwoColSection>
            <div className="flex justify-start select-none">
              <div className="relative w-[400px] aspect-square">
                <div className="bg-card w-full aspect-square mx-auto rounded-full absolute bottom-0 right-0" />
                <div className="w-full h-[125%] absolute bottom-0 rounded-full overflow-hidden right-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={'/images/avatar.png'}
                      fill
                      className="object-contain "
                      alt="truong nguyen avatar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <p className="text-justify">
                A software engineer, the modern-day architect of digital realms, navigates the
                ethereal landscapes of code, sculpting intangible structures that shape our
                technological world. With fingers poised over keyboards like virtuoso pianists, they
                compose symphonies of logic, their minds a labyrinth of algorithms and
                solutions.Their canvas is a screen, a vast expanse where lines of code dance in
                intricate patterns, weaving the fabric of programs and applications. Each keystroke
                is a brushstroke, crafting intricate architectures and breathing life into
                innovative designs.In this digital atelier, they don the mantle of problem solvers,
                confronting bugs and glitches like valiant knights in an ever-evolving quest for
                perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden
                within the tangled webs of code. designs.In this digital atelier.
              </p>
              <Button className="my-10 min-w-40">
                <DownloadIcon /> Download CV
              </Button>
            </div>
          </TwoColSection>
        </AppSection>
        <div></div>
      </div>
    </div>
  )
}
