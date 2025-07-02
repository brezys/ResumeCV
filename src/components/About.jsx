import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Calendar, Award, Globe, Users, BookOpen, Star } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCard, setActiveCard] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const cardVariants = {
    hidden: { 
      scale: 0.95, 
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const educationData = [
    {
      id: 'uncc',
      icon: <GraduationCap className="text-accent" size={28} />,
      institution: "University of North Carolina at Charlotte",
      degree: "Bachelor of Computer Science",
      minor: "Minor in Japanese Studies",
      period: "Aug 2021 - May 2025",
      gpa: "3.23",
      achievement: "Dean's List 4x",
      color: "from-blue-500/20 to-cyan-500/20",
      stats: [
        { label: "Major GPA", value: "3.23" },
        { label: "Dean's List", value: "4x" },
        { label: "Credits", value: "120+" }
      ]
    },
    {
      id: 'sophia',
      icon: <Globe className="text-accent" size={28} />,
      institution: "Sophia University, Tokyo",
      degree: "Study Abroad - Japanese Studies",
      period: "March 2024 - Aug 2024",
      color: "from-purple-500/20 to-pink-500/20",
      stats: [
        { label: "Duration", value: "6 months" },
        { label: "Language", value: "Japanese" },
        { label: "Culture", value: "Immersion" }
      ]
    }
  ]

  const certificationData = {
    id: 'tefl',
    icon: <Award className="text-accent" size={28} />,
    title: "150-Hour CIEE TEFL Certification",
    description: "Teaching English as a Foreign Language",
    period: "Jan 2025 - May 2025",
    color: "from-green-500/20 to-emerald-500/20",
    stats: [
      { label: "Hours", value: "150+" },
      { label: "Focus", value: "ESL" },
      { label: "Certification", value: "CIEE" }
    ]
  }

  return (
    <section id="about" className="py-20 section-padding relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`, backgroundSize: "60px 60px"}} />
      </div>

      <div className="container-max relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
            </motion.h2>
            <motion.p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Passionate about creating innovative solutions through code
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="space-y-8">
              <motion.h3 
                className="text-2xl font-bold mb-6 flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Users className="text-accent" size={28} />
                <span>My Journey</span>
              </motion.h3>
              
              {/* Paragraphs */}
              <div className="space-y-6">
                {[
                  "I'm a Computer Science graduate from UNC Charlotte with a passion for full-stack development, AI/ML, and language learning!",
                  "My journey includes a study abroad experience in Japan, where I deepened my understanding of Japanese language and culture. I've also earned a TEFL certification, combining my technical skills with teaching and communication abilities.",
                  "When I'm not coding, you'll find me rock climbing, exploring new languages, or working on projects!"
                ].map((text, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-300 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 pt-8"
              >
                {[
                  { icon: <BookOpen size={20} />, label: "Projects", value: "4+", color: "text-blue-400" },
                  { icon: <Star size={20} />, label: "Languages", value: "6+", color: "text-purple-400" },
                  { icon: <Globe size={20} />, label: "Countries", value: "2", color: "text-green-400" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center p-4 bg-dark-card/50 rounded-xl border border-dark-border"
                  >
                    <div className={`${stat.color} mb-2 flex justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Education & Certifications */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-center">Education & Certifications</h3>
              
              <div className="space-y-6">
                {/* Education Cards */}
                {educationData.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    variants={cardVariants}
                    whileHover="hover"
                    onHoverStart={() => setActiveCard(edu.id)}
                    onHoverEnd={() => setActiveCard(null)}
                    className={`bg-gradient-to-br ${edu.color} p-6 rounded-2xl border border-dark-border cursor-pointer relative overflow-hidden group`}
                  >
                    <div className="relative space-y-4">
                      {/* Header */}
                      <div className="flex items-start space-x-3">
                        <div className="p-3 bg-dark-card/50 rounded-xl">
                          {edu.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-lg group-hover:text-accent transition-colors duration-300">
                            {edu.institution}
                          </h4>
                          <p className="text-gray-400">{edu.degree}</p>
                          {edu.minor && <p className="text-gray-400 text-sm">{edu.minor}</p>}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2 text-gray-400">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        {edu.gpa && (
                          <span className="text-accent font-medium">GPA: {edu.gpa}</span>
                        )}
                      </div>

                      {edu.achievement && (
                        <div className="text-sm text-gray-500">
                          <Star className="inline w-4 h-4 mr-1" />
                          {edu.achievement}
                        </div>
                      )}

                      {/* Expandable Stats */}
                      <AnimatePresence>
                        {activeCard === edu.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-3 gap-2 pt-4 border-t border-dark-border/50"
                          >
                            {edu.stats.map((stat, i) => (
                              <div key={i} className="text-center">
                                <div className="text-accent font-semibold text-sm">{stat.value}</div>
                                <div className="text-xs text-gray-400">{stat.label}</div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                {/* Certification Card */}
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setActiveCard(certificationData.id)}
                  onHoverEnd={() => setActiveCard(null)}
                  className={`bg-gradient-to-br ${certificationData.color} p-6 rounded-2xl border border-dark-border cursor-pointer relative overflow-hidden group`}
                >
                  <div className="relative space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-dark-card/50 rounded-xl">
                        {certificationData.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white group-hover:text-accent transition-colors duration-300">
                          Certifications
                        </h4>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-white">{certificationData.title}</h5>
                      <p className="text-gray-400">{certificationData.description}</p>
                      <p className="text-sm text-accent">{certificationData.period}</p>
                    </div>

                    <AnimatePresence>
                      {activeCard === certificationData.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="grid grid-cols-3 gap-2 pt-4 border-t border-dark-border/50"
                        >
                          {certificationData.stats.map((stat, i) => (
                            <div key={i} className="text-center">
                              <div className="text-accent font-semibold text-sm">{stat.value}</div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 