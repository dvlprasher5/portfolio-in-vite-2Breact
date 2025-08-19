import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              ASHERY
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.a
                href="mailto:ashery@satatechnologies.com"
                className="text-foreground/60 hover:text-neon-cyan transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                Email
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/ashery-dev"
                className="text-foreground/60 hover:text-neon-purple transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/ashery-dev"
                className="text-foreground/60 hover:text-neon-pink transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                GitHub
              </motion.a>
            </div>

            <div className="text-foreground/60 text-sm">
              © 2024 Ashery. Built with React + Three.js
            </div>
          </div>

          <motion.div
            className="mt-8 text-center text-foreground/40 text-xs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Frontend Developer • 3+ Years Experience • BSc Software Engineering
            Student
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl z-50"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 30px hsl(var(--neon-purple))",
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        ↑
      </motion.button>
    </div>
  );
}
