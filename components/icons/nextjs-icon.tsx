import React from 'react'

type Props = React.SVGProps<SVGSVGElement> & {
  /** Single knob to control both width & height */
  size?: number | string // e.g. 24 | "1em"
  title?: string
}

const NextJSIcon = ({ size = 24, title = 'Facebook', className, ...rest }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor" // <- color follows CSS text color
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      role="img"
      preserveAspectRatio="xMidYMid meet"
      className={className}
      {...rest}
    >
      <path d="M17.664 17.65L10.26 8H8v8h2v-5.054l6.087 7.933a8 8 0 1 1 1.578-1.23M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2-10V8h2v4z" />
    </svg>
  )
}

export default NextJSIcon
