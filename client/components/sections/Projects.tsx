import { motion } from "framer-motion";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Box } from "@react-three/drei";
import { Suspense } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with 3D product visualization, built with React, TypeScript, and Three.js",
    technologies: ["React", "TypeScript", "Three.js", "Stripe", "Node.js"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Application",
    color: "#06b6d4",
  },
  {
    id: 2,
    title: "Interactive Dashboard",
    description:
      "Real-time analytics dashboard with animated charts and 3D data visualization for SATA Technologies",
    technologies: ["Vue.js", "D3.js", "WebGL", "Express", "MongoDB"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    category: "Dashboard",
    color: "#8b5cf6",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Immersive 3D portfolio showcasing creative web development with smooth animations",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind", "Vite"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    category: "Portfolio",
    color: "#ec4899",
  },
  {
    id: 4,
    title: "Mobile Banking App",
    description:
      "Secure mobile banking interface with biometric authentication and real-time transactions",
    technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Stripe"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App",
    color: "#10b981",
  },
  {
    id: 5,
    title: "AI Chat Interface",
    description:
      "Intelligent chatbot interface with natural language processing and voice recognition",
    technologies: [
      "Next.js",
      "OpenAI API",
      "WebRTC",
      "Socket.io",
      "TensorFlow",
    ],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    category: "AI Application",
    color: "#f59e0b",
  },
  {
    id: 6,
    title: "VR Experience",
    description:
      "Virtual reality web experience for architectural visualization using WebXR",
    technologies: ["Three.js", "WebXR", "A-Frame", "Blender", "GLSL"],
    image: "/api/placeholder/600/400",
    liveUrl: "#",
    githubUrl: "#",
    category: "VR/AR",
    color: "#ef4444",
  },
];

const categories = [
  "All",
  "Web Application",
  "Dashboard",
  "Portfolio",
  "Mobile App",
  "AI Application",
  "VR/AR",
];

function ProjectCube({
  color,
  position,
}: {
  color: string;
  position: [number, number, number];
}) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Box position={position} args={[0.5, 0.5, 0.5]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </Box>
    </Float>
  );
}

function Project3DBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />

        <ProjectCube color="#06b6d4" position={[-2, 1, -1]} />
        <ProjectCube color="#8b5cf6" position={[2, -1, 0]} />
        <ProjectCube color="#ec4899" position={[0, 2, -2]} />
        <ProjectCube color="#10b981" position={[-1, -2, 1]} />
      </Suspense>
    </Canvas>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Project3DBackground />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">My Projects</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Showcase of creative solutions and innovative web experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border transition-all ${
                selectedCategory === category
                  ? "bg-neon-purple text-white border-neon-purple shadow-lg shadow-neon-purple/25"
                  : "glass-effect border-border hover:border-neon-purple/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="glass-effect rounded-2xl overflow-hidden border border-white/10 group-hover:border-neon-purple/50 transition-all duration-300"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.02,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-80"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-4xl font-bold opacity-20"
                      animate={{
                        rotateY: hoveredProject === project.id ? 360 : 0,
                      }}
                      transition={{ duration: 2 }}
                    >
                      {project.category.split(" ")[0]}
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        className="flex-1 bg-neon-cyan text-background text-center py-2 rounded-lg font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="flex-1 border border-neon-cyan text-neon-cyan text-center py-2 rounded-lg font-semibold"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "hsl(var(--neon-cyan))",
                          color: "hsl(var(--background))",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-xs px-2 py-1 rounded-full font-semibold"
                      style={{
                        backgroundColor: `${project.color}20`,
                        color: project.color,
                      }}
                    >
                      {project.category}
                    </span>
                    <motion.div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.color }}
                      animate={{
                        scale: hoveredProject === project.id ? [1, 1.2, 1] : 1,
                        opacity:
                          hoveredProject === project.id ? [1, 0.7, 1] : 1,
                      }}
                      transition={{
                        duration: 1,
                        repeat: hoveredProject === project.id ? Infinity : 0,
                      }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-background/50 border border-border rounded text-foreground/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 text-foreground/60">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-foreground/70 mb-6">
            Want to see more projects or discuss a collaboration?
          </p>
          <motion.button
            className="glass-effect px-8 py-4 rounded-xl text-lg font-semibold border border-neon-purple/30 hover:border-neon-purple text-foreground hover:text-neon-purple transition-all"
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
      </div>
    </section>
  );
}
