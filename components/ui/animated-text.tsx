"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useInView } from "framer-motion"
import { useRef } from "react"
import type { ElementType } from "react"

type AnimatedTextProps = {
  text: string | string[]
  el?: ElementType
  className?: string
  once?: boolean
  repeatDelay?: number
  animation?: "typewriter" | "fade-in" | "slide-up" | "wave"
}

export function AnimatedText({
  text,
  el: Element = "div",
  className,
  once = true,
  repeatDelay,
  animation = "typewriter"
}: AnimatedTextProps) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once })

  const textArray = Array.isArray(text) ? text : [text]

  // Animation variants based on the selected animation type
  let animationVariants = {}

  switch (animation) {
    case "typewriter": {
      animationVariants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
          opacity: 1,
          transition: { delay: i * 0.1 }
        })
      }
      break
    }
    case "fade-in": {
      animationVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5 }
        }
      }
      break
    }
    case "slide-up": {
      animationVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 }
        }
      }
      break
    }
    case "wave": {
      animationVariants = {
        hidden: { opacity: 0, y: 0 },
        visible: (i: number) => ({
          opacity: 1,
          y: [0, -10, 0],
          transition: {
            delay: i * 0.05,
            duration: 0.5,
            repeat: repeatDelay ? Infinity : 0,
            repeatDelay: repeatDelay
          }
        })
      }
      break
    }
  }

  return (
    <Element
      ref={containerRef}
      className={cn("inline-block", className)}
    >
      <span className="sr-only">{textArray.join(" ")}</span>
      <motion.span
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        aria-hidden
      >
        {textArray.map((line, lineIndex) => (
          <span className="block" key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span className="inline-block" key={`${word}-${wordIndex}`}>
                {animation === "typewriter" ? (
                  // For typewriter effect, animate each character
                  word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={animationVariants}
                      custom={charIndex}
                    >
                      {char}
                    </motion.span>
                  ))
                ) : animation === "wave" ? (
                  // For wave effect, animate each character
                  word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={animationVariants}
                      custom={charIndex}
                    >
                      {char}
                    </motion.span>
                  ))
                ) : (
                  // For other effects, animate the whole word
                  <motion.span
                    className="inline-block"
                    variants={animationVariants}
                  >
                    {word}
                  </motion.span>
                )}
                {/* Add space after each word except for the last one */}
                {wordIndex < line.split(" ").length - 1 ? " " : ""}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Element>
  )
} 