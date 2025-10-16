import TwoColSection from '@/components/custom/two-col-section'
import FacebookIcon from '@/components/icons/facebook-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import YoutubeIcon from '@/components/icons/youtube-icon'
import { Button } from '@/components/ui/button'
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
                <p className="text-gray-400">Experiences</p>
              </div>
              <div className="flex flex-col border-l-3 border-gray-400 pl-8">
                <h5 className="text-primary">20+</h5>
                <p className="text-gray-400">Projects done</p>
              </div>
              <div className="flex flex-col border-l-3 border-gray-400 pl-8">
                <h5 className="text-primary">80+</h5>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
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
      </div>
    </div>
  )
}
