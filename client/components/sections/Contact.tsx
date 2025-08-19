import { motion } from "framer-motion";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Sphere, Torus } from "@react-three/drei";
import { Suspense } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "ashery@satatechnologies.com",
    href: "mailto:ashery@satatechnologies.com",
    color: "#06b6d4",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "/in/ashery-dev",
    href: "https://linkedin.com/in/ashery-dev",
    color: "#8b5cf6",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "/ashery-dev",
    href: "https://github.com/ashery-dev",
    color: "#ec4899",
  },
  {
    icon: "🏢",
    label: "Company",
    value: "SATA Technologies",
    href: "#",
    color: "#10b981",
  },
];

function ContactSphere({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2}>
      <Sphere position={position} args={[0.3, 32, 32]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function ContactTorus({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Torus position={position} args={[0.5, 0.1, 16, 100]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.6}
        />
      </Torus>
    </Float>
  );
}

function Contact3DBackground() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.4}
          color="#8b5cf6"
        />

        <ContactSphere position={[-3, 2, -1]} color="#06b6d4" />
        <ContactTorus position={[3, -1, 0]} color="#8b5cf6" />
        <ContactSphere position={[1, 3, -2]} color="#ec4899" />
        <ContactTorus position={[-2, -2, 1]} color="#10b981" />
        <ContactSphere position={[2, 1, -1]} color="#f59e0b" />
      </Suspense>
    </Canvas>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-20">
        <Contact3DBackground />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Ready to create something amazing together? Let's discuss your next
            project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect p-8 rounded-2xl border border-neon-purple/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-neon-purple/5 to-neon-pink/5 opacity-50" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send me a message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🚀</div>
                    <h4 className="text-xl font-bold text-neon-green mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-foreground/70">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div whileFocus={{ scale: 1.02 }}>
                        <label className="block text-sm font-medium text-foreground/80 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all"
                          placeholder="your.email@example.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink/20 transition-all"
                        placeholder="Project collaboration, job opportunity, etc."
                      />
                    </motion.div>

                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all resize-none"
                        placeholder="Tell me about your project or what you'd like to discuss..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-neon-purple to-neon-pink text-white py-4 rounded-lg font-semibold transition-all hover:from-neon-cyan hover:to-neon-purple disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 30px hsl(var(--neon-purple))",
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-8 rounded-2xl border border-neon-cyan/30">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Let's connect
              </h3>
              <p className="text-foreground/70 mb-8">
                I'm always interested in new opportunities, collaborations, and
                interesting projects. Whether you're a company looking for a
                developer or another developer wanting to collaborate, I'd love
                to hear from you.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:border-neon-cyan/50 transition-all group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="text-2xl p-3 rounded-lg"
                      style={{ backgroundColor: `${info.color}20` }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                        {info.label}
                      </div>
                      <div className="text-sm text-foreground/60">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl border border-neon-green/30 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-lg mb-2">Quick Response</h4>
              <p className="text-sm text-foreground/70">
                I typically respond within 24 hours during weekdays
              </p>
            </div>

            <div className="glass-effect p-6 rounded-2xl border border-neon-pink/30 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-lg mb-2">Open to Opportunities</h4>
              <p className="text-sm text-foreground/70">
                Currently available for freelance projects and full-time
                positions
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
