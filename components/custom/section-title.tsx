import React from 'react'

type Props = {
  value: string
}

const SectionTitle = ({ value }: Props) => {
  return <h3 className="text-3xl font-semibold text-white w-full text-center py-2">{value}</h3>
}

export default SectionTitle
