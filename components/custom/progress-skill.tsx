import React from 'react'
import { CircularProgress } from './circle-progress'

type Props = {
  name: string
  percentage: number
  icon: React.ElementType
}

const ProgressSkill = ({ name, percentage, icon }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <CircularProgress value={percentage}>
        {icon && React.createElement(icon, { className: 'w-9 h-9' })}
      </CircularProgress>
      {/* </div> */}
      <h4 className="font-semibold text-primary mt-2">{parseInt(`${percentage}`)}%</h4>
      <h5 className="text-sm md:text-base font-semibold">{name}</h5>
    </div>
  )
}

export default ProgressSkill
