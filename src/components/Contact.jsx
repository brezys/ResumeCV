import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Globe, ArrowUpRight, Copy, Check, ExternalLink } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [emailCopied, setEmailCopied] = useState(false)
  const [emailClickFeedback, setEmailClickFeedback] = useState('')

  const email = "nicholashbrezinski@gmail.com"
  const subject = "Hello from your portfolio website!"
  const body = "Hi Nicholas,\n\nI found your portfolio website and would love to connect about potential opportunities.\n\nBest regards,"
  
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  const copyEmailToClipboard = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email)
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
        return
      }
      
      // Fallback for older browsers or non-HTTPS
      const textArea = document.createElement('textarea')
      textArea.value = email
      textArea.style.position = 'fixed'
      textArea.style.left = '-999999px'
      textArea.style.top = '-999999px'
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      
      try {
        document.execCommand('copy')
        setEmailCopied(true)
        setTimeout(() => setEmailCopied(false), 2000)
      } catch (err) {
        console.error('Fallback copy failed:', err)
        // Show the email in an alert as last resort
        alert(`Copy this email address: ${email}`)
      } finally {
        document.body.removeChild(textArea)
      }
    } catch (err) {
      console.error('Failed to copy email:', err)
      // Show the email in an alert as last resort
      alert(`Copy this email address: ${email}`)
    }
  }

  const handleEmailClick = (e) => {
    e.preventDefault()
    
    try {
      // Try to open mailto link
      const link = document.createElement('a')
      link.href = mailtoUrl
      link.click()
      
      // Provide user feedback
      setEmailClickFeedback('Trying to open your email client...')
      setTimeout(() => {
        setEmailClickFeedback('No email client? Copy the email address above!')
      }, 3000)
      setTimeout(() => {
        setEmailClickFeedback('')
      }, 8000)
      
    } catch (err) {
      console.error('Email click failed:', err)
      setEmailClickFeedback('Please copy the email address and paste it into your email client')
      setTimeout(() => setEmailClickFeedback(''), 5000)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="text-accent" size={24} />,
      label: "Email",
      value: email,
      href: mailtoUrl,
      onClick: handleEmailClick
    },
    {
      icon: <Globe className="text-accent" size={24} />,
      label: "Website",
      value: "nickbrezinski.com",
      href: "https://nickbrezinski.com"
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/brezys",
      description: "Check out my code and projects"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nicholas-brezinski",
      description: "Connect with me professionally"
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
    <section id="contact" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Let's Connect</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Ready to collaborate or discuss opportunities? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="relative">
                      <motion.a
                        href={contact.href}
                        onClick={contact.onClick}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-4 p-4 bg-dark-card rounded-xl border border-dark-border hover:border-accent transition-all duration-300 group card-glow cursor-pointer"
                      >
                        {contact.icon}
                        <div className="flex-1">
                          <p className="text-sm text-gray-400">{contact.label}</p>
                          <p className="text-white group-hover:text-accent transition-colors duration-300">
                            {contact.value}
                          </p>
                        </div>
                        <ArrowUpRight className="text-gray-400 group-hover:text-accent transition-colors duration-300" size={16} />
                      </motion.a>
                      
                      {/* Copy button for email */}
                      {contact.label === "Email" && (
                        <motion.button
                          onClick={copyEmailToClipboard}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute top-2 right-10 p-2 bg-dark-border hover:bg-accent rounded-lg transition-colors duration-300 group"
                          title={emailCopied ? "Email copied!" : "Copy email address"}
                        >
                          {emailCopied ? (
                            <Check className="text-green-400" size={16} />
                          ) : (
                            <Copy className="text-gray-400 group-hover:text-white" size={16} />
                          )}
                        </motion.button>
                      )}
                    </div>
                  ))}
                  
                  {/* Email feedback */}
                  {emailClickFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-accent/20 border border-accent rounded-lg"
                    >
                      <p className="text-accent text-sm">{emailClickFeedback}</p>
                    </motion.div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">Follow Me</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-4 p-4 bg-dark-card rounded-xl border border-dark-border hover:border-accent transition-all duration-300 group card-glow"
                    >
                      <div className="text-accent">{social.icon}</div>
                      <div>
                        <p className="text-white group-hover:text-accent transition-colors duration-300 font-medium">
                          {social.label}
                        </p>
                        <p className="text-sm text-gray-400">{social.description}</p>
                      </div>
                      <ArrowUpRight className="text-gray-400 group-hover:text-accent transition-colors duration-300 ml-auto" size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-dark-card to-dark-border p-8 rounded-xl border border-dark-border">
                <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Whether you're looking for a software engineering intern, a collaborator on an exciting project, 
                  or just want to chat about technology and innovation, I'm always open to new opportunities and connections.
                </p>
                
                <div className="space-y-4">
                  <motion.button
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="block w-full bg-accent hover:bg-accent-hover text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
                  >
                    Send Me an Email
                  </motion.button>
                  
                  <motion.a
                    href="https://linkedin.com/in/nicholas-brezinski"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 w-full border border-gray-600 hover:border-white text-white text-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <span>Connect on LinkedIn</span>
                    <ExternalLink size={16} />
                  </motion.a>
                  
                  {/* Manual email option */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between w-full border border-gray-600 text-gray-300 px-4 py-3 rounded-lg bg-dark-border"
                  >
                    <span className="text-sm">Manual: {email}</span>
                    <motion.button
                      onClick={copyEmailToClipboard}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-1 hover:bg-accent rounded transition-colors duration-300"
                      title={emailCopied ? "Copied!" : "Copy email"}
                    >
                      {emailCopied ? (
                        <Check className="text-green-400" size={16} />
                      ) : (
                        <Copy className="text-gray-400 hover:text-white" size={16} />
                      )}
                    </motion.button>
                  </motion.div>
                </div>
                
                {/* Status indicator */}
                {emailCopied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-2 bg-green-900/30 border border-green-500 rounded-lg"
                  >
                    <p className="text-green-400 text-sm text-center">✓ Email copied to clipboard!</p>
                  </motion.div>
                )}
              </div>

              <div className="bg-dark-card p-6 rounded-xl border border-dark-border">
                <h4 className="text-lg font-semibold mb-3">Current Status</h4>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for Opportunities</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently seeking software engineering internships and collaborative projects. 
                  Graduated May 2025.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="text-center pt-12 border-t border-dark-border">
            <p className="text-gray-400">
              © 2025, Nicholas Brezinski. Built with React, Tailwind CSS, and Framer Motion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 