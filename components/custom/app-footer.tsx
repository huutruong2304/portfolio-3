import React from 'react';
import FacebookIcon from '../icons/facebook-icon';
import GithubIcon from '../icons/github-icon';
import LinkedinIcon from '../icons/linkedin-icon';
import YoutubeIcon from '../icons/youtube-icon';
import Link from 'next/link';
import { MailIcon, PhoneCallIcon } from 'lucide-react';

type Props = {};

const AppFooter = (props: Props) => {
  const headerList: { id: string; name: string; href: string }[] = [
    {
      id: 'home',
      name: 'Home',
      href: '#',
    },
    {
      id: 'services',
      name: 'Services',
      href: '#service',
    },
    {
      id: 'about',
      name: 'About Me',
      href: '#about',
    },
    {
      id: 'contact',
      name: 'Contact Me',
      href: '#contact',
    },
  ];
  return (
    <div className="w-full py-10 text-gray-300">
      <div className="w-1/2 mx-auto text-center">
        <div className="text-primary uppercase font-bold text-2xl py-5">Logo</div>

        <ul className="gap-10 hidden md:flex justify-center py-5">
          {headerList.map((item) => (
            <li className="text-sm font-semibold  hover:text-primary hover-transition" key={item.id}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 py-5 mx-auto justify-center">
          <FacebookIcon className="icon-hover" />
          <GithubIcon className="icon-hover" />
          <LinkedinIcon className="icon-hover" />
          <YoutubeIcon className="icon-hover" />
        </div>
        <div className="flex gap-4 py-5 mx-auto justify-center items-center flex-col md:flex-row">
          <Link href="mailto:sample@gmail.com" className="flex gap-2">
            <MailIcon /> sample@gmail.com
          </Link>
          <div className="flex gap-2">
            <PhoneCallIcon /> +91 0000000000
          </div>
        </div>
        <hr />

        <div>
          <p className="text-sm py-5">&copy; {new Date().getFullYear()} Code by Truong Nguyen - Designed by @mahmood.fazile</p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
