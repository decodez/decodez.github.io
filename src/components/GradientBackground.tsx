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

      {/* Static ambient blobs for base glassmorphism feel */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
      
      {/* Noise Texture Overlay for that premium feel */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  )
}
