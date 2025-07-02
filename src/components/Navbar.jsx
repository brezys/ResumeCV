import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, Home } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [mouseY, setMouseY] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    const handleMouseMove = (e) => {
      setMouseY(e.clientY)
      // Show navbar when cursor is in top 80px of screen or when scrolled up significantly
      setIsVisible(e.clientY < 80 || window.scrollY < 100)
    }

    const handleMouseLeave = () => {
      // Hide navbar when mouse leaves the window, unless we're at the very top
      if (window.scrollY > 100) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href) => {
    if (location.pathname !== '/') {
      navigate('/')
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {(isVisible || isOpen) && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 400, 
            damping: 30,
            duration: 0.3
          }}
          className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            scrolled || location.pathname !== '/' 
              ? 'bg-dark-bg/95 backdrop-blur-md border-b border-dark-border shadow-lg' 
              : 'bg-gradient-to-b from-dark-bg/80 to-transparent backdrop-blur-sm'
          }`}
        >
          <div className="container-max section-padding">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => navigate('/')}
              >
                {location.pathname !== '/' && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    className="p-1 rounded-full bg-accent/20"
                  >
                    <Home size={18} className="text-accent" />
                  </motion.div>
                )}
                <span className="text-xl font-bold gradient-text">
                  Nicholas Brezinski
                </span>
              </motion.div>

              {/* Desktop Menu - Only show on home page */}
              {location.pathname === '/' && (
                <div className="hidden md:flex space-x-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleNavClick(item.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                    >
                      {item.name}
                      <motion.span 
                        className="absolute -bottom-1 left-0 h-0.5 bg-accent"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Mobile Menu Button */}
              {location.pathname === '/' && (
                <div className="md:hidden">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ rotate: 180 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white p-2 rounded-full hover:bg-dark-card transition-colors duration-300"
                  >
                    <AnimatePresence mode="wait">
                      {isOpen ? (
                        <motion.div
                          key="close"
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 180, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <X size={24} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ rotate: 180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -180, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Menu size={24} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              )}
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && location.pathname === '/' && (
                <motion.div
                  initial={{ opacity: 0, height: 0, rotateX: -90 }}
                  animate={{ opacity: 1, height: 'auto', rotateX: 0 }}
                  exit={{ opacity: 0, height: 0, rotateX: -90 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-dark-card/95 backdrop-blur-md rounded-lg mt-2 overflow-hidden border border-dark-border"
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left px-6 py-4 text-gray-300 hover:text-white transition-all duration-200"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navbar 