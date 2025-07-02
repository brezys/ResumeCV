import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Zap, Target, Users, ExternalLink } from 'lucide-react'

// GitHub Icon Component
const GitHubIcon = ({ size = 20, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

// GitHub Button Component
const GitHubButton = ({ githubUrl }) => {
  if (!githubUrl) return null
  
  return (
    <motion.a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-500 transition-all duration-300"
    >
      <GitHubIcon size={20} />
      <span>View on GitHub</span>
      <ExternalLink size={16} />
    </motion.a>
  )
}

const ClimbSight = () => {
  const navigate = useNavigate()

  const project = {
    title: "ClimbSight",
    subtitle: "AI-Powered Climbing Analysis Platform",
    timeline: "March 2025 - Present (On Break)",
    status: "Development Paused",
    githubUrl: "https://github.com/brezys/Climbing-Analysis", // Add your GitHub URL here when ready
    description: "An innovative full-stack application that leverages cutting-edge computer vision and AI technology to provide real-time biomechanical analysis for rock climbing, helping climbers improve technique and prevent injuries.",
    
    challenge: "Rock climbers lack access to detailed movement analysis and technique feedback. Traditional coaching is expensive and not always available, while self-analysis through video review is time-consuming and often inaccurate.",
    
    solution: "Developed an AI-powered analysis platform that uses MediaPipe for real-time pose detection and Google AI for movement analysis, providing instant feedback on climbing technique, body positioning, and movement efficiency.",
    
    technologies: ["MediaPipe", "Google AI", "Computer Vision", "Python", "OpenCV", "TensorFlow", "React", "Node.js", "WebRTC"],
    
    features: [
      {
        icon: <Zap className="text-accent" size={20} />,
        title: "Real-time Pose Detection",
        description: "Advanced computer vision system that tracks climber movement with skeletal overlay visualization"
      },
      {
        icon: <Target className="text-accent" size={20} />,
        title: "Biomechanical Analysis",
        description: "AI-powered analysis of movement patterns, efficiency metrics, and technique recommendations"
      },
      {
        icon: <Users className="text-accent" size={20} />,
        title: "Automated Hold Detection",
        description: "Machine learning algorithms that identify and track climbing holds for route analysis"
      }
    ],
    
    metrics: [
      { label: "Pose Accuracy", value: "94.7%", description: "Precision in joint position detection during climbing movement" },
      { label: "Processing Speed", value: "30 FPS", description: "Real-time analysis frame rate for smooth user experience" },
      { label: "Hold Detection", value: "87%", description: "Accuracy in automatic climbing hold identification" }
    ],
    
    learnings: [
      "Advanced computer vision and pose estimation techniques",
      "Real-time video processing and analysis",
      "Machine learning model training and optimization",
      "WebRTC implementation for live video streaming"
    ],
    
    nextSteps: [
      "Deep learning model refinement for climbing-specific movements",
      "Mobile app development for portable analysis",
      "Integration with popular climbing training platforms",
      "Competitive analysis features for route comparison"
    ]
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20"
    >
      {/* Header */}
      <section className="section-padding py-12 bg-gradient-to-b from-dark-card/50 to-transparent">
        <div className="container-max">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-6">{project.subtitle}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{project.timeline}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  project.status === 'Active Development' ? 'bg-green-900/30 text-green-400' :
                  project.status === 'Completed' ? 'bg-blue-900/30 text-blue-400' :
                  'bg-yellow-900/30 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <GitHubButton githubUrl={project.githubUrl} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-dark-card p-8 rounded-xl border border-dark-border"
            >
              <h3 className="text-lg font-semibold mb-4">Video Coming Soon!</h3>
              <img src="/images/climbsight.png" alt="ClimbSight" className="w-full h-full object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="section-padding py-16">
        <div className="container-max space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Challenge & Solution */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-dark-card p-8 rounded-xl border border-dark-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-red-400">The Challenge</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="bg-dark-card p-8 rounded-xl border border-dark-border"
            >
              <h3 className="text-xl font-semibold mb-4 text-green-400">The Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-card p-6 rounded-xl border border-dark-border hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {feature.icon}
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-dark-border text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-accent hover:text-white transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Learnings & Next Steps */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
              className="bg-dark-card p-8 rounded-xl border border-dark-border"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent">Key Learnings</h3>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-300">{learning}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="bg-dark-card p-8 rounded-xl border border-dark-border"
            >
              <h3 className="text-xl font-semibold mb-6 text-accent">Next Steps</h3>
              <ul className="space-y-3">
                {project.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* GitHub Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="text-center"
          >
            <GitHubButton githubUrl={project.githubUrl} />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default ClimbSight 