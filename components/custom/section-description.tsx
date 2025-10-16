import React from 'react'

type Props = {
  value: string
}

const SectionDescription = ({ value }: Props) => {
  return (
    <div className="text-base font-normal text-foreground w-2/3 mx-auto text-center py-2">
      {value}
    </div>
  )
}

export default SectionDescription
