import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Smartphone, Brain, Globe, Users } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-accent" size={24} />,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "Dart", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="text-accent" size={24} />,
      skills: ["React", "React Native", "Tailwind CSS", "shadcn/ui", "Vite", "Flutter"]
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-accent" size={24} />,
      skills: ["Node.js", "Supabase", "Firebase", "Git", "SQL"]
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="text-accent" size={24} />,
      skills: ["Jupyter Notebook", "Google Colab", "Scikit-learn", "Pandas", "Seaborn", "Mediapipe", "Hypothesis Testing"]
    },
    {
      title: "Mobile & Cross-Platform",
      icon: <Smartphone className="text-accent" size={24} />,
      skills: ["React Native", "Expo", "Flutter", "Cross-Platform Development"]
    },
    {
      title: "Soft Skills & Languages",
      icon: <Users className="text-accent" size={24} />,
      skills: ["Project Management", "Problem Solving", "Public Speaking", "Teaching (TEFL)", "Japanese (Bilingual)", "English (Native)"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  }

  return (
    <section id="skills" className="py-20 section-padding bg-dark-card/30">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Expertise</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-dark-card p-6 rounded-xl border border-dark-border card-glow hover-lift"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    {category.icon}
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        variants={skillVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-dark-border text-gray-300 px-3 py-1.5 rounded-full text-sm hover:bg-accent hover:text-white transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Highlights */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Code className="text-accent" size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Development</h3>
              <p className="text-gray-400">End-to-end application development with modern frameworks and best practices</p>
            </div>
            
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Brain className="text-accent" size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">AI/ML Integration</h3>
              <p className="text-gray-400">Machine learning and computer vision integration in practical applications</p>
            </div>
            
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Smartphone className="text-accent" size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Cross-Platform Mobile</h3>
              <p className="text-gray-400">Native and cross-platform mobile app development with React Native and Flutter</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 