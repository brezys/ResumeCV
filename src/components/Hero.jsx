import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const controls = useAnimation()

  useEffect(() => {
    // Trigger staggered animations
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 1.2
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple Gradient Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
          }}
        />
      </div>

      <div className="container-max text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-12"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div className="relative">
              <motion.h1 
                variants={titleVariants}
                className="text-6xl md:text-8xl font-bold leading-none"
              >
                <motion.span 
                  className="inline-block gradient-text"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Nicholas
                </motion.span>
                <br />
                <motion.span 
                  className="inline-block text-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Brezinski
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div 
              variants={itemVariants}
              className="text-xl md:text-3xl text-gray-400 space-y-3"
            >
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
              >
                Software Engineer & Computer Science Student
              </motion.p>
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="text-accent"
              >
                Specializing in Full-Stack Development & AI/ML
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/brezys", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/nicholas-brezinski", label: "LinkedIn" },
              { icon: Mail, href: "mailto:nicholashbrezinski@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.icon !== Mail ? "_blank" : undefined}
                rel={social.icon !== Mail ? "noopener noreferrer" : undefined}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 2.5 + index * 0.2, 
                  type: "spring", 
                  stiffness: 200,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-dark-card rounded-xl border border-dark-border hover:border-accent transition-all duration-300 group"
                title={social.label}
              >
                <social.icon size={24} className="text-white group-hover:text-accent transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#projects"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              View My Work
            </motion.a>
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.4, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-600 hover:border-accent text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <motion.a
              href="#about"
              className="inline-block text-gray-400 hover:text-accent transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown size={32} />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 