import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  name: string
  thumbnail: string
  href: string
  category?: string
}

const PortfolioCard = ({ name, thumbnail, href, category }: Props) => {
  return (
    <Link
      href={href}
      className="bg-card rounded-2xl overflow-hidden border border-transparent hover:border-primary transition duration-300"
    >
      <div className="w-full min-w-20 aspect-square relative">
        <Image src={thumbnail} alt={name} fill className="object-cover" />
      </div>
      <div className="flex justify-between px-4 py-4 font-semibold text-sm">
        <h3 className="line-clamp-2">{name}</h3>
        <h3 className="line-clamp-2">{category}</h3>
      </div>
    </Link>
  )
}

export default PortfolioCard
