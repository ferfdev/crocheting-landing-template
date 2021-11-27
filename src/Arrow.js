import * as React from "react"

function Arrow(props) {
  return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="0 0 172 172"
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: "normal",
        }}
      >
        <path d="M0 172V0h172v172z" />
        <path
          d="M143.277 34.322a5.734 5.734 0 00-3.997 1.758L86 89.36 32.72 36.08a5.734 5.734 0 10-8.107 8.107l57.333 57.333a5.734 5.734 0 008.108 0l57.333-57.333a5.734 5.734 0 00-4.11-9.865zm0 40.133a5.734 5.734 0 00-3.997 1.758L86 129.493l-53.28-53.28a5.734 5.734 0 10-8.107 8.107l57.333 57.334a5.734 5.734 0 008.108 0l57.333-57.334a5.734 5.734 0 00-4.11-9.865z"
          fill="#f65284"
        />
      </g>
    </svg>
  
  )
}

export default Arrow
