import React from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'

const AppHeader = () => {
  const headerList: { id: string; name: string; href: string }[] = [
    {
      id: 'home',
      name: 'Home',
      href: '#',
    },
    {
      id: 'services',
      name: 'Services',
      href: '#services',
    },
    {
      id: 'about',
      name: 'About Me',
      href: '#about',
    },
    {
      id: 'portfolio',
      name: 'Portfolio',
      href: '#portfolio',
    },
    {
      id: 'contact',
      name: 'Contact Me',
      href: '#contact',
    },
  ]

  return (
    <div className="w-full py-10 sticky top-0 z-50 left-0 bg-background">
      <div className="app-container flex justify-between items-center">
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="w-20">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent className="pt-20 w-[240px]">
              <ul className="gap-5 flex flex-col px-4">
                {headerList.map((item) => (
                  <li
                    className="text-sm font-bold text-gray-300 hover:text-primary hover-transition"
                    key={item.id}
                  >
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
                <li>
                  <Button className="min-w-28" size={'sm'}>
                    Hire me
                  </Button>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>

        <div className="text-primary uppercase font-bold text-2xl text-center">Logo</div>
        <ul className="gap-10 hidden md:flex">
          {headerList.map((item) => (
            <li
              className="text-sm font-semibold text-gray-300 hover:text-primary  hover-transition"
              key={item.id}
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <Button className="w-20 md:min-w-28" size={'sm'}>
          Hire me{' '}
        </Button>
      </div>
    </div>
  )
}

export default AppHeader
