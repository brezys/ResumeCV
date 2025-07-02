import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { Calendar, ArrowRight, ExternalLink, Calculator, BookOpen, Code, Smartphone, Image } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const navigate = useNavigate()

  const projects = [
    {
      id: 'fortnite-drop-calculator',
      title: "Fortnite Drop Calculator",
      subtitle: "Advanced Physics-Based Gaming Tool",
      period: "Apr 2025 - Present",
      status: "Active",
      icon: <Calculator className="text-accent" size={32} />,
      description: "Web-based tool using TypeScript, Next.js, and Tailwind CSS to calculate optimal jump points in Fortnite.",
      technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Physics Simulation"],
      highlights: [
        "Custom simulation algorithms",
        "Interactive map visualizations", 
        "Real-time optimization"
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      position: "right",
      image: "/images/fortnitecalculator.png"
    },
    {
      id: 'japanese-dictionary',
      title: "辞典書 (Japanese Dictionary App)",
      subtitle: "Intelligent Language Learning Platform", 
      period: "Mar 2025 - Present",
      status: "Active",
      icon: <BookOpen className="text-accent" size={32} />,
      description: "Cross-platform Japanese dictionary and language learning app with spaced repetition study system.",
      technologies: ["React Native", "Expo", "TypeScript", "Anki SM2"],
      highlights: [
        "Spaced repetition system",
        "Pitch accent visualization",
        "JLPT level tracking"
      ],
      color: "from-purple-500/20 to-pink-500/20",
      position: "left",
      image: "/images/jittensho.png"
    },
    {
      id: 'climbsight',
      title: "ClimbSight",
      subtitle: "AI-Powered Climbing Analysis",
      period: "Mar 2025 - Present",
      status: "On Break",
      icon: <Code className="text-accent" size={32} />,
      description: "Full-stack rock climbing analysis application leveraging MediaPipe computer vision and Google AI.",
      technologies: ["MediaPipe", "Google AI", "Computer Vision", "Python"],
      highlights: [
        "Real-time pose detection",
        "Biomechanical analysis",
        "Automated hold detection"
      ],
      color: "from-green-500/20 to-emerald-500/20",
      position: "right",
      image: "/images/climbsight.png"
    },
    {
      id: 'langapp',
      title: "LanGAPP",
      subtitle: "Neural-Enhanced Translation Tool",
      period: "May 2023 - Jun 2023",
      status: "Completed",
      icon: <Smartphone className="text-accent" size={32} />,
      description: "Real-time vocal translation tool supporting English to Japanese/Spanish with neural network voice enhancement.",
      technologies: ["Python", "NLP", "Speech-to-Text", "Neural Networks"],
      highlights: [
        "Real-time vocal translation",
        "Neural voice enhancement",
        "Dockerized deployment"
      ],
      color: "from-orange-500/20 to-red-500/20",
      position: "left",
      image: "/images/langapp.png"
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

  const roadmapVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`)
  }

  const ProjectImage = ({ project }) => {
    const [imageError, setImageError] = React.useState(false)
    const [imageLoaded, setImageLoaded] = React.useState(false)
    
    return (
      <div className="bg-dark-card p-6 rounded-xl border border-dark-border max-w-md w-full">
        <div className="relative w-full h-80 rounded-lg bg-dark-bg/50 border-2 border-dashed border-gray-600 flex flex-col items-center justify-center space-y-3 hover:border-accent transition-colors duration-300 overflow-hidden">
          {!imageError ? (
            <>
              <img 
                src={project.image} 
                alt={project.title}
                className={`max-w-full max-h-full object-contain rounded-lg transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onError={() => setImageError(true)}
                onLoad={() => setImageLoaded(true)}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%'
                }}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
                </div>
              )}
            </>
          ) : (
            <>
              <Image size={48} className="text-gray-500" />
              <div className="text-center">
                <p className="text-gray-400 text-sm font-medium">{project.title}</p>
                <p className="text-gray-500 text-xs">Add image: {project.image}</p>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-20 section-padding relative overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 0L0 20L20 40L40 20Z'/%3E%3C/g%3E%3C/svg%3E")`}}></div>
      </div>

      <div className="container-max relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={roadmapVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Project Roadmap</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Follow my journey through innovative software development projects
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent hidden lg:block">
              <motion.div
                className="absolute inset-0 bg-accent"
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            {/* Projects */}
            <div className="space-y-12 lg:space-y-24">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={roadmapVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                    className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg z-10 hidden lg:block"
                  />

                  {/* Project Layout - Symmetrical */}
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {project.position === 'right' ? (
                      <>
                        {/* Project Card on Left */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleProjectClick(project.id)}
                          className={`bg-gradient-to-br ${project.color} p-8 rounded-2xl border border-dark-border hover:border-accent transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                        >
                          <div className="relative space-y-6">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="p-3 bg-dark-card/50 rounded-xl">
                                  {project.icon}
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                  </h3>
                                  <p className="text-gray-400 text-sm">{project.subtitle}</p>
                                </div>
                              </div>
                              
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center space-x-2 text-gray-400 group-hover:text-accent transition-colors duration-300"
                              >
                                <span className="text-sm">View Details</span>
                                <ArrowRight size={16} />
                              </motion.div>
                            </div>

                            {/* Period & Status */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <Calendar size={16} />
                                <span>{project.period}</span>
                              </div>
                              <span className={`text-xs px-3 py-1 rounded-full ${
                                project.status === 'Active' ? 'bg-green-900/30 text-green-400' :
                                project.status === 'Completed' ? 'bg-blue-900/30 text-blue-400' :
                                'bg-yellow-900/30 text-yellow-400'
                              }`}>
                                {project.status}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed">
                              {project.description}
                            </p>

                            {/* Highlights */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY HIGHLIGHTS</h4>
                              <ul className="space-y-2">
                                {project.highlights.map((highlight, i) => (
                                  <li key={i} className="text-sm text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-dark-border/50 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-accent hover:text-white transition-all duration-300"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>

                        {/* Image on Right */}
                        <motion.div
                          variants={roadmapVariants}
                          className="flex justify-center lg:justify-start"
                        >
                          <ProjectImage project={project} />
                        </motion.div>
                      </>
                    ) : (
                      <>
                        {/* Image on Left */}
                        <motion.div
                          variants={roadmapVariants}
                          className="flex justify-center lg:justify-end"
                        >
                          <ProjectImage project={project} />
                        </motion.div>

                        {/* Project Card on Right */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleProjectClick(project.id)}
                          className={`bg-gradient-to-br ${project.color} p-8 rounded-2xl border border-dark-border hover:border-accent transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                        >
                          <div className="relative space-y-6">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="p-3 bg-dark-card/50 rounded-xl">
                                  {project.icon}
                                </div>
                                <div>
                                  <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                                    {project.title}
                                  </h3>
                                  <p className="text-gray-400 text-sm">{project.subtitle}</p>
                                </div>
                              </div>
                              
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center space-x-2 text-gray-400 group-hover:text-accent transition-colors duration-300"
                              >
                                <span className="text-sm">View Details</span>
                                <ArrowRight size={16} />
                              </motion.div>
                            </div>

                            {/* Period & Status */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <Calendar size={16} />
                                <span>{project.period}</span>
                              </div>
                              <span className={`text-xs px-3 py-1 rounded-full ${
                                project.status === 'Active' ? 'bg-green-900/30 text-green-400' :
                                project.status === 'Completed' ? 'bg-blue-900/30 text-blue-400' :
                                'bg-yellow-900/30 text-yellow-400'
                              }`}>
                                {project.status}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed">
                              {project.description}
                            </p>

                            {/* Highlights */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-400 mb-3">KEY HIGHLIGHTS</h4>
                              <ul className="space-y-2">
                                {project.highlights.map((highlight, i) => (
                                  <li key={i} className="text-sm text-gray-300 flex items-center">
                                    <span className="w-2 h-2 bg-accent rounded-full mr-3" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <motion.span
                                    key={tech}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-dark-border/50 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-accent hover:text-white transition-all duration-300"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={roadmapVariants}
            className="text-center pt-12"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-accent/10 to-transparent p-8 rounded-2xl border border-accent/20 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-semibold mb-4">Want to see more?</h3>
              <p className="text-gray-300 mb-6">
                Click on any project above to dive deep into the technical details, challenges, and solutions.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/project/fortnite-drop-calculator')}
                className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
              >
                Explore Latest Project
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 