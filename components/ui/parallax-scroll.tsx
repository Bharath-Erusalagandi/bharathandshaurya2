"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import type { ReactNode } from "react"

type ParallaxScrollProps = {
  children: ReactNode
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function ParallaxScroll({ 
  children, 
  speed = 0.5, 
  direction = "up",
  className = ""
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Calculate transform based on direction
  let transform = {}
  
  if (direction === "up" || direction === "down") {
    const y = useTransform(
      scrollYProgress, 
      [0, 1], 
      [0, direction === "up" ? -100 * speed : 100 * speed]
    )
    transform = { y }
  } else {
    const x = useTransform(
      scrollYProgress, 
      [0, 1], 
      [0, direction === "left" ? -100 * speed : 100 * speed]
    )
    transform = { x }
  }
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={transform} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  )
} 