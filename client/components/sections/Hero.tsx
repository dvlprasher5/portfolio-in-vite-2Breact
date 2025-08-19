import { motion } from "framer-motion";
import Scene3D from "../3d/Scene3D";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-transparent to-background/80 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="block text-gradient">ASHERY</span>
            <span className="block text-2xl md:text-4xl font-normal text-foreground/80 mt-2">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Crafting immersive digital experiences with{" "}
            <span className="text-neon-cyan">3+ years</span> of expertise in
            modern web technologies
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              className="glass-effect px-8 py-4 rounded-xl text-lg font-semibold text-foreground hover:text-neon-cyan transition-all border border-neon-purple/30 hover:border-neon-cyan/50 group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px hsl(var(--neon-cyan))",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span className="flex items-center gap-2">
                View My Work
                <motion.span
                  className="group-hover:translate-x-1 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>

            <motion.button
              className="px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-neon-purple to-neon-pink text-white hover:from-neon-cyan hover:to-neon-purple transition-all shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px hsl(var(--neon-purple))",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-cyan">3+</div>
              <div className="text-sm text-foreground/60">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple">50+</div>
              <div className="text-sm text-foreground/60">
                Projects Completed
              </div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-pink">SATA</div>
              <div className="text-sm text-foreground/60">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
