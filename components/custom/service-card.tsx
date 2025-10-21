import React from 'react'

type Props = {
  name: string
  description: string
  icon: React.ReactNode
}

const ServiceCard = ({ name, description, icon }: Props) => {
  return (
    <div className="bg-card rounded-xl w-full px-2 py-6 md:p-10 flex flex-col items-center gap-2 md:gap-4">
      {icon}
      <h3 className="text-2xl text-primary font-semibold">{name}</h3>
      <p className="text-base text-foreground text-center">{description}</p>
    </div>
  )
}

export default ServiceCard
