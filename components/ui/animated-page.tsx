"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import type { ReactNode } from "react"

type AnimatedPageProps = {
  children: ReactNode
}

export function AnimatedPage({ children }: AnimatedPageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { duration: 0.5 }
      }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Animated background elements */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-to-b from-background to-background/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 1 } }}
      />
      
      {/* Floating particles */}
      {isLoaded && [...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 rounded-full bg-primary/20 pointer-events-none"
          initial={{ 
            x: `${Math.random() * 100}vw`,
            y: `${Math.random() * 100}vh`, 
            opacity: 0
          }}
          animate={{ 
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            opacity: [0, 0.7, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Main content */}
      {children}
    </motion.div>
  )
} 