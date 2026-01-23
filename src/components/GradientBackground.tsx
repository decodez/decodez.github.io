import { useEffect } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

export function GradientBackground() {
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

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#121212]">
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
        className="absolute top-[5%] left-[5%] h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[160px]"
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
        className="absolute bottom-[10%] right-[10%] h-[600px] w-[600px] rounded-full bg-purple-500/15 blur-[180px]"
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
        className="absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]"
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  )
}
