import AchievementBox from '@/components/custom/achievement-box'
import AppSection from '@/components/custom/app-section'
import PortfolioCard from '@/components/custom/portfolio-card'
import ProgressSkill from '@/components/custom/progress-skill'
import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import ServiceCard from '@/components/custom/service-card'
import TwoColSection from '@/components/custom/two-col-section'
import ContactForm from '@/components/form/contact-form'
import FacebookIcon from '@/components/icons/facebook-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import NextJSIcon from '@/components/icons/nextjs-icon'
import TailwindIcon from '@/components/icons/nextjs-icon copy'
import ReactIcon from '@/components/icons/react-icon'
import YoutubeIcon from '@/components/icons/youtube-icon'
import { FadeIn } from '@/components/motion/fade-in'
import { SlideUp } from '@/components/motion/slide-up'
import { ZoomIn } from '@/components/motion/zoom-in'
import { Button } from '@/components/ui/button'
import { DownloadIcon, FigmaIcon, SettingsIcon } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const skills: { name: string; percentage: number; icon: React.ElementType }[] = [
    { name: 'Figma', percentage: 90, icon: FigmaIcon },
    { name: 'React', percentage: 80, icon: ReactIcon },
    { name: 'Next JS', percentage: 80, icon: NextJSIcon },
    { name: 'Tailwind CSS', percentage: 80, icon: TailwindIcon },
    { name: 'Nest JS', percentage: 80, icon: SettingsIcon },
  ]
  const portfolioTopics: { id: string; name: string }[] = [
    { id: 'all', name: 'All' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'personal-website', name: 'Personal Website' },
    { id: 'dashboard', name: 'Dashboard' },
    { id: 'landing-page', name: 'Landing Page' },
  ]

  const projects: { name: string; thumbnail: string; href: string; category?: string }[] = [
    {
      name: 'Anhphibantao',
      thumbnail: '/images/project-1.png',
      href: '#',
      category: 'E-commerce',
    },
    {
      name: 'CodingWithTruong',
      thumbnail: '/images/project-1.png',
      href: '#',
      category: 'Personal Website',
    },
    {
      name: 'Anhphi Dashboard',
      thumbnail: '/images/project-1.png',
      href: '#',
      category: 'Dashboard',
    },
    {
      name: 'VF3 Landing Page',
      thumbnail: '/images/project-1.png',
      href: '#',
      category: 'Landing Page',
    },
  ]

  return (
    <div>
      {/* Home */}
      <div className="app-container">
        <FadeIn>
          <TwoColSection
            id="#"
            className="min-h-[90vh] bg-[url('/images/home-vector.png')] bg-origin-content bg-bottom md:bg-left  bg-no-repeat"
          >
            <div className="order-2 md:order-1 text-center md:text-left">
              <p className="text-gray-500">Hi I am</p>
              <h2 className="text-xl font-semibold text-gray-400">Truong Nguyen</h2>
              <h1 className="text-3xl md:text-6xl font-semibold text-primary">UI/UX Designer</h1>

              <div className="flex gap-4 mt-6 md:mt-10 mx-auto justify-center md:justify-start">
                <FacebookIcon className="icon-hover" />
                <GithubIcon className="icon-hover" />
                <LinkedinIcon className="icon-hover" />
                <YoutubeIcon className="icon-hover" />
              </div>
              <div className="flex gap-4 mt-10 justify-center md:justify-start">
                <Button className="min-w-36"> Hire Me</Button>
                <Button className="min-w-36" variant={'outline'}>
                  Download CV
                </Button>
              </div>

              <div className="w-full md:w-11/12 bg-card flex flex-row gap-5 p-5 mt-10  justify-between rounded-lg">
                <AchievementBox value="5+" description="Experiences" />
                <AchievementBox
                  value="20+"
                  description="Projects Done"
                  className="border-l-3 border-gray-400 pl-8 md:pl-12"
                />
                <AchievementBox
                  value="80+"
                  description="Happy Clients"
                  className="border-l-3 border-gray-400 pl-8 md:pl-12"
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-end select-none  mt-10 md:mt-0 order-1 md:order-2">
              <div className="relative w-1/2 md:w-[400px] aspect-square">
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
        </FadeIn>
        {/* service */}
        <SlideUp>
          <AppSection id="services">
            <SectionTitle value="Services" />
            <SectionDescription value="Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula aliquam" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-5 md:mt-10">
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
        </SlideUp>
        {/* about me */}
        <AppSection id="about">
          <SlideUp>
            <SectionTitle value="About Me" />
            <SectionDescription value="User Interface and User Experience and Also video editing " />
            <TwoColSection>
              <div className="flex justify-center md:justify-start select-none mt-10 md:mt-0">
                <div className="relative w-1/2 md:w-[400px] aspect-square">
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
                  technological world. With fingers poised over keyboards like virtuoso pianists,
                  they compose symphonies of logic, their minds a labyrinth of algorithms and
                  solutions.Their canvas is a screen, a vast expanse where lines of code dance in
                  intricate patterns, weaving the fabric of programs and applications. Each
                  keystroke is a brushstroke, crafting intricate architectures and breathing life
                  into innovative designs.In this digital atelier, they don the mantle of problem
                  solvers, confronting bugs and glitches like valiant knights in an ever-evolving
                  quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries
                  hidden within the tangled webs of code. designs.In this digital atelier.
                </p>
                <div className="text-center md:text-left">
                  <Button className="my-5 md:my-10 min-w-40">
                    <DownloadIcon /> Download CV
                  </Button>
                </div>
              </div>
            </TwoColSection>
          </SlideUp>
          {/* skills */}
          <ZoomIn delay={0.4}>
            <div className="grid grid-cols-3 md:grid-cols-5 justify-center">
              {skills.map((skill, index) => (
                <ProgressSkill
                  key={index}
                  name={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon}
                />
              ))}
            </div>
          </ZoomIn>
        </AppSection>
        {/* portfolio */}
        <AppSection id="portfolio">
          <SlideUp>
            <SectionTitle value="Portfolio" />
            <div className="flex flex-wrap justify-center w-full md:w-3/4 mx-auto">
              {portfolioTopics.map((topic) => (
                <Button
                  key={topic.id}
                  className="my-2 mr-2 cursor-pointer"
                  variant={topic.id === 'all' ? 'default' : 'secondary'}
                >
                  {topic.name}
                </Button>
              ))}
            </div>
          </SlideUp>
          <ZoomIn delay={0.5}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
              {projects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  name={project.name}
                  thumbnail={project.thumbnail}
                  href={project.href}
                  category={project.category}
                />
              ))}
            </div>
          </ZoomIn>
        </AppSection>
        {/* contact me */}
        <AppSection id="contact">
          <SlideUp>
            <SectionTitle value="Contact me" />
            <SectionDescription value="Cultivating Connections: Reach Out and Connect with Me" />
            <ContactForm />
          </SlideUp>
        </AppSection>
      </div>
    </div>
  )
}
