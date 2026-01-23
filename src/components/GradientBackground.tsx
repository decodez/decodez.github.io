import { useEffect } from "react"
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

export function GradientBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement
  const springConfig = { damping: 30, stiffness: 100, mass: 2 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  // Create dynamic gradients that react to mouse position
  const background = useMotionTemplate`radial-gradient(
    circle at ${springX}px ${springY}px,
    rgba(79, 172, 254, 0.15),
    transparent 80%
  )`
  
  // Secondary ambient gradient
  const secondaryBackground = useMotionTemplate`radial-gradient(
    circle at ${springX}px ${springY}px,
    rgba(0, 242, 254, 0.10),
    transparent 50%
  )`

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Offset the center slightly for the secondary gradient to create depth
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#121212]">
      {/* Dynamic Mouse Follower */}
      <motion.div
        className="absolute inset-0 opacity-100"
        style={{ background }}
      />
      
      {/* Secondary Ambient Follower (laggy/offset feel) */}
      <motion.div
        className="absolute inset-0 opacity-70 blur-3xl"
        style={{ 
          background: secondaryBackground,
          transform: "translate(-5%, -5%) scale(1.1)" 
        }}
      />

      {/* Floating Animated Shapes */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[10%] left-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]"
      />

      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, -40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[20%] right-[15%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, 100, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] right-[30%] h-[300px] w-[300px] rounded-full bg-cyan-400/15 blur-[80px]"
      />
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  )
}
