import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import { Suspense } from 'react';

const skills = [
  { name: 'React', level: 95, color: '#61dafb' },
  { name: 'TypeScript', level: 90, color: '#3178c6' },
  { name: 'JavaScript', level: 95, color: '#f7df1e' },
  { name: 'Next.js', level: 88, color: '#000000' },
  { name: 'Tailwind CSS', level: 92, color: '#06b6d4' },
  { name: 'Node.js', level: 85, color: '#339933' },
  { name: 'Vue.js', level: 80, color: '#4fc08d' },
  { name: 'GSAP', level: 75, color: '#88ce02' },
];

function SkillSphere({ skill, index }: { skill: typeof skills[0], index: number }) {
  return (
    <Float speed={1 + index * 0.2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[
        Math.cos(index * (Math.PI * 2 / skills.length)) * 3,
        Math.sin(index * (Math.PI * 2 / skills.length)) * 3,
        0
      ]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial 
          color={skill.color} 
          emissive={skill.color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
}

function CentralCube() {
  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={2}>
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial 
          color="#8b5cf6" 
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </Box>
    </Float>
  );
}

function Skills3D() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {skills.map((skill, index) => (
          <SkillSphere key={skill.name} skill={skill} index={index} />
        ))}
        
        <CentralCube />
      </Suspense>
    </Canvas>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Frontend Developer & BSc Software Engineering Student
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl border border-neon-purple/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 via-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-2xl font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Ashery</h3>
                    <p className="text-neon-cyan">Frontend Developer</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Passionate frontend developer with 3+ years of experience creating 
                    immersive digital experiences. Currently working at{' '}
                    <span className="text-neon-purple font-semibold">SATA Technologies</span>{' '}
                    while pursuing BSc Software Engineering.
                  </p>
                  
                  <p>
                    Specialized in modern web technologies including React, TypeScript, 
                    and 3D web experiences. I love bringing designs to life with smooth 
                    animations and interactive elements.
                  </p>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-3">
                  {['React', 'TypeScript', 'Next.js', 'Tailwind', 'Three.js'].map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-neon-purple/20 border border-neon-purple/30 rounded-full text-sm"
                      whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--neon-purple) / 0.3)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="glass-effect p-6 rounded-xl text-center border border-neon-cyan/30"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--neon-cyan))' }}
              >
                <div className="text-3xl font-bold text-neon-cyan mb-2">3+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </motion.div>
              
              <motion.div
                className="glass-effect p-6 rounded-xl text-center border border-neon-green/30"
                whileHover={{ scale: 1.05, borderColor: 'hsl(var(--neon-green))' }}
              >
                <div className="text-3xl font-bold text-neon-green mb-2">BSc</div>
                <div className="text-sm text-foreground/60">Software Engineering</div>
              </motion.div>
            </div>
          </motion.div>

          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-96 lg:h-[500px] relative"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center mb-8 z-10 relative">
                <h3 className="text-4xl font-bold text-gradient mb-2">SKILLS</h3>
                <p className="text-foreground/60">Interactive 3D Visualization</p>
              </div>
            </div>
            <Skills3D />
          </motion.div>
        </div>

        {/* Skills List */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gradient">Technical Skills</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-effect p-4 rounded-xl border border-white/10"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, borderColor: skill.color }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm text-foreground/60">{skill.level}%</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
