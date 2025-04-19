import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBars, FaSearch, FaPlus, FaSuitcase } from 'react-icons/fa'

function Navbar({ toggleSidebar }) {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])
  
  return (
    <motion.header 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: 'var(--space-4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: scrolled ? 'white' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        transition: 'all var(--transition-normal)',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
      }}
    >
      <div className="flex items-center gap-4">
        <button 
          className="menu-button"
          onClick={toggleSidebar}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-gray-800)',
            fontSize: '1.25rem',
            cursor: 'pointer',
            padding: 'var(--space-2)',
          }}
        >
          <FaBars />
        </button>
        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: 600,
            color: 'var(--color-primary-500)'
          }}>
            <FaSuitcase style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} />
            TravelPlanner
          </h2>
        </Link>
      </div>
      
      <div className="nav-center" style={{ display: 'flex', gap: 'var(--space-4)' }}>
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none',
            color: location.pathname === '/' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
            fontWeight: location.pathname === '/' ? 600 : 500,
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            transition: 'all var(--transition-fast)'
          }}
        >
          Home
        </Link>
        <Link 
          to="/explore" 
          style={{ 
            textDecoration: 'none',
            color: location.pathname === '/explore' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
            fontWeight: location.pathname === '/explore' ? 600 : 500,
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            transition: 'all var(--transition-fast)'
          }}
        >
          Explore
        </Link>
        <Link 
          to="/trips" 
          style={{ 
            textDecoration: 'none',
            color: location.pathname === '/trips' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
            fontWeight: location.pathname === '/trips' ? 600 : 500,
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            transition: 'all var(--transition-fast)'
          }}
        >
          My Trips
        </Link>
        <Link 
          to="/checklist" 
          style={{ 
            textDecoration: 'none',
            color: location.pathname === '/checklist' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
            fontWeight: location.pathname === '/checklist' ? 600 : 500,
            padding: 'var(--space-2) var(--space-3)',
            borderRadius: 'var(--radius-md)',
            transition: 'all var(--transition-fast)'
          }}
        >
          Checklist
        </Link>
      </div>
      
      <div className="nav-right" style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
        <div className="search-box" style={{ 
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <input 
            type="text" 
            placeholder="Search destinations..." 
            style={{
              padding: 'var(--space-2) var(--space-3)',
              paddingLeft: 'var(--space-8)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-gray-300)',
              fontSize: '0.9rem',
              width: '200px',
              transition: 'all var(--transition-fast)'
            }}
          />
          <FaSearch style={{ 
            position: 'absolute',
            left: 'var(--space-3)',
            color: 'var(--color-gray-500)'
          }} />
        </div>
        
        <Link to="/trips/create" style={{ textDecoration: 'none' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-2)'
            }}
          >
            <FaPlus /> New Trip
          </motion.button>
        </Link>
      </div>
    </motion.header>
  )
}

export default Navbar