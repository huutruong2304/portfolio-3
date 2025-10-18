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
      <h5 className="font-semibold">{name}</h5>
    </div>
  )
}

export default ProgressSkill

/* Ellipse 6 */

// position: absolute;
// width: 130px;
// height: 130px;
// left: 35px;
// top: 0px;

// /* Gradint */
// background: linear-gradient(94.36deg, #FD6F00 3.1%, #E46400 94.54%);
// border-radius: 47px;
