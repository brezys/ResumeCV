import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Zap, Target, Users, MessageSquare, ExternalLink } from 'lucide-react'

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

const LanGAPP = () => {
  const navigate = useNavigate()

  const project = {
    title: "LanGAPP",
    subtitle: "Voice to Voice Multi-Language Translation Tool",
    timeline: "May 2023 - June 2023",
    status: "Completed",
    githubUrl: "https://github.com/brezys/LanGAPP", // Add your GitHub URL here when ready
    description: "A real-time vocal translation application that bridges language barriers through advanced natural language processing, supporting English to Japanese/Spanish translation with neural network-enhanced voice synthesis.",
    
    challenge: "Traditional translation apps lack natural voice output and real-time processing capabilities. Users need seamless vocal communication across language barriers with natural-sounding speech synthesis.",
    
    solution: "Built a comprehensive translation pipeline combining speech-to-text recognition, neural language processing, and enhanced text-to-speech synthesis with natural cadence modeling for fluid cross-language communication.",
    
    technologies: ["Python", "NLP", "Speech-to-Text APIs", "Text-to-Speech", "Neural Networks", "Docker", "Real-time Processing"],
    
    features: [
      {
        icon: <Zap className="text-accent" size={20} />,
        title: "Real-time Vocal Translation",
        description: "Instant speech recognition and translation with minimal latency for natural conversation flow"
      },
      {
        icon: <Target className="text-accent" size={20} />,
        title: "Neural Voice Enhancement",
        description: "Advanced neural networks that improve voice output naturalness and pronunciation accuracy"
      },
      {
        icon: <Users className="text-accent" size={20} />,
        title: "Microphone Interface",
        description: "Intuitive voice input system with noise cancellation and speaker recognition"
      }
    ],
    
    metrics: [
      { label: "Translation Speed", value: "1.2 sec", description: "Average time from speech input to translated audio output" },
      { label: "Accuracy Rate", value: "91.8%", description: "Translation accuracy for common conversational phrases" },
      { label: "Voice Quality", value: "4.3/5", description: "User rating for naturalness of synthesized speech" }
    ],
    
    learnings: [
      "Real-time audio processing and speech recognition",
      "Natural language processing and translation algorithms",
      "Neural network implementation for voice synthesis",
      "Containerized deployment with Docker"
    ],
    
    nextSteps: [
      "Expansion to additional language pairs",
      "Offline translation capabilities",
      "Integration with popular communication platforms",
      "Advanced context-aware translation features"
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
              <h3 className="text-lg font-semibold mb-4">Video Demonstration</h3>
              <div className="grid grid-cols-1 gap-4">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hGzyyvre97w?si=IlshhAvJ07mlF6-j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>              </div>
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
        </div>
      </section>
    </motion.div>
  )
}

export default LanGAPP 