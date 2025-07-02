import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    // Triangle Rock Club
    {
      title: "Floor Staff",
      company: "Triangle Rock Club Morrisville",
      duration: "May 2025 - Present",
      location: "Morrisville, NC",
      description: "Customer service and facility management at premier indoor climbing facility",
      responsibilities: [
        "Provide excellent customer service and climbing facility orientation",
        "Ensure safety protocols and equipment maintenance standards",
        "Assist climbers with technique guidance and route recommendations",
        "Maintain clean and organized climbing environment"
      ],
      skills: ["Customer Service", "Safety Management", "Team Collaboration", "Problem Solving"]
    },
    // Andy's Frozen Custard
    {
        title: "Team Lead",
        company: "Andy's Frozen Custard",
        duration: "February 2023 - March 2024",
        location: "Morrisville, NC",
        description: "Leadership and operational management at popular frozen custard restaurant",
          responsibilities: [
          "Led shifts, trained new employees, and managed operational workflows, developing strong leadership and communication skills",
          "Identified and implemented operational improvements resulting in increased efficiency and enhanced customer satisfaction"
        ],
        skills: ["Leadership", "Quality Assurance", "Teamwork", "Efficiency"]
      }
    
  ]

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
            
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${index !== experiences.length - 1 ? 'mb-12' : ''}`}
              >
                {/* Timeline line */}
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-dark-border"></div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-card p-8 rounded-xl border border-dark-border card-glow hover-lift relative ml-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-8 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg"></div>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center text-accent mb-2">
                        <div className="flex items-center">
                          <Briefcase size={16} className="mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center md:ml-4">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY RESPONSIBILITIES</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="text-gray-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">SKILLS UTILIZED</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="bg-dark-border text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-accent hover:text-white transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          

          {/* Additional Experience Note */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-dark-card p-8 rounded-xl border border-dark-border card-glow max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Academic & Project Experience</h3>
              <p className="text-gray-300 leading-relaxed">
                Beyond my professional experience, I've gained hands-on experience through 
                academic projects, personal development initiatives, and collaborative work. My projects 
                showcase full-stack development, AI/ML implementation, and cross-platform mobile development, 
                demonstrating practical application of computer science principles and modern development practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 