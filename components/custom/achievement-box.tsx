import { cn } from '@/lib/utils'
import React from 'react'

type Props = {
  value: string
  description: string
  className?: string
}

const AchievementBox = ({ value, description, className }: Props) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <h5 className="text-primary text-2xl md:text-3xl font-bold">{value}</h5>
      <p className="text-sm text-white font-semibold">{description}</p>
    </div>
  )
}

export default AchievementBox
