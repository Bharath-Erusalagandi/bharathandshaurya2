"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import type { ReactNode } from "react"

type RotatingCardProps = {
  children: ReactNode
  className?: string
  backgroundClassName?: string
  rotationIntensity?: number
  glowIntensity?: number
}

export function RotatingCard({ 
  children, 
  className = "", 
  backgroundClassName = "",
  rotationIntensity = 10, 
  glowIntensity = 0.5
}: RotatingCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  
  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Add spring physics to make the movement smoother
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [rotationIntensity, -rotationIntensity]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-rotationIntensity, rotationIntensity]), springConfig)
  
  // Glowing effect
  const glowX = useTransform(mouseX, [-0.5, 0.5], [-50, 50])
  const glowY = useTransform(mouseY, [-0.5, 0.5], [-50, 50])
  
  // Handle mouse movement on the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height
    
    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }
  
  return (
    <motion.div 
      ref={ref}
      className={`relative perspective-1000px ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div 
        className={`w-full h-full rounded-xl ${backgroundClassName}`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transform: "translateZ(0)",
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
      >
        {/* Dynamic glow effect */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 z-[-1] rounded-xl opacity-0"
            style={{
              background: `radial-gradient(circle at ${glowX}px ${glowY}px, rgba(var(--primary-rgb), ${glowIntensity}), transparent 50%)`,
              opacity: isHovered ? 1 : 0,
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}
        
        {/* Card content */}
        <div className="relative z-10 h-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  )
} 