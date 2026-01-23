import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useTheme } from "@/lib/theme"

export function GradientBackground() {
  const { theme } = useTheme()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement
  const springConfig = { damping: 50, stiffness: 200 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Map mouse position to subtle offsets (-30px to 30px)
  const moveX = useTransform(springX, [0, 2000], [-30, 30])
  const moveY = useTransform(springY, [0, 1200], [-30, 30])
  
  // Inverse move for parallax feel
  const moveXInverse = useTransform(springX, [0, 2000], [30, -30])
  const moveYInverse = useTransform(springY, [0, 1200], [30, -30])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const dotColor = theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)"

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[var(--bg-color)] transition-colors duration-500">
      {/* Floating Animated Shapes with Subtle Mouse Sensitivity */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute top-[5%] left-[5%] h-[500px] w-[500px] rounded-full blur-[160px] transition-colors duration-500 ${
          theme === "dark" ? "bg-blue-500/15" : "bg-blue-400/20"
        }`}
      />

      <motion.div
        style={{ x: moveXInverse, y: moveYInverse }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, -40, 0],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute bottom-[10%] right-[10%] h-[600px] w-[600px] rounded-full blur-[180px] transition-colors duration-500 ${
          theme === "dark" ? "bg-purple-500/15" : "bg-purple-400/20"
        }`}
      />

      <motion.div
        style={{ x: moveX, y: moveYInverse }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 100, 50, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full blur-[140px] transition-colors duration-500 ${
          theme === "dark" ? "bg-cyan-400/10" : "bg-cyan-300/15"
        }`}
      />
      
      {/* Noise/Dot Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.4] mix-blend-overlay" 
        style={{ 
          backgroundImage: `radial-gradient(${dotColor} 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} 
      />
    </div>
  )
}
