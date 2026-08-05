// components/LogoIcon.tsx
import React from 'react'
import logo from '../assets/logo.jpeg'

interface LogoIconProps {
  className?: string
}

const LogoIcon: React.FC<LogoIconProps> = ({ className = '' }) => {
  return (
    <img
      src={logo}
      alt="LogicShell logo"
      className={`w-full h-full object-contain rounded-full ${className}`}
    />
  )
}

export default LogoIcon