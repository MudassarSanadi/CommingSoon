// components/LogoIcon.tsx
import React from 'react'

interface LogoIconProps {
  size?: number
  className?: string
}

const LogoIcon: React.FC<LogoIconProps> = ({ size = 20, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M3 10L7 6L11 10L7 14L3 10Z" 
        fill="white" 
        opacity="0.95"
      />
      <path 
        d="M9 10L13 6L17 10L13 14L9 10Z" 
        fill="white" 
        opacity="0.55"
      />
    </svg>
  )
}

export default LogoIcon