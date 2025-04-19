import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaTimes, 
  FaHome, 
  FaGlobeAmericas, 
  FaSuitcase, 
  FaListAlt,
  FaRegBookmark,
  FaCog,
  FaQuestionCircle
} from 'react-icons/fa'

function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation()
  
  const sidebarVariants = {
    open: { 
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 300,
        damping: 30
      }
    },
    closed: { 
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 40
      }
    }
  }
  
  const linkStyle = (path) => ({
    display: 'flex',
    alignItems: 'center',
    padding: 'var(--space-3) var(--space-4)',
    color: location.pathname === path ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
    backgroundColor: location.pathname === path ? 'var(--color-primary-50)' : 'transparent',
    borderRadius: 'var(--radius-md)',
    textDecoration: 'none',
    transition: 'all var(--transition-fast)',
    marginBottom: 'var(--space-2)'
  })
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(3px)',
              zIndex: 98
            }}
          />
          
          <motion.div
            className="sidebar"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100%',
              width: '280px',
              backgroundColor: 'white',
              boxShadow: 'var(--shadow-lg)',
              padding: 'var(--space-6)',
              zIndex: 99,
              overflowY: 'auto'
            }}
          >
            <div className="sidebar-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 'var(--space-6)'
            }}>
              <h3 style={{ margin: 0 }}>Menu</h3>
              <button 
                onClick={toggleSidebar}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.25rem',
                  cursor: 'pointer',
                  color: 'var(--color-gray-700)'
                }}
              >
                <FaTimes />
              </button>
            </div>
            
            <nav className="sidebar-nav">
              <Link to="/" style={linkStyle('/')}>
                <FaHome style={{ marginRight: 'var(--space-3)', fontSize: '1.25rem' }} />
                Home
              </Link>
              
              <Link to="/explore" style={linkStyle('/explore')}>
                <FaGlobeAmericas style={{ marginRight: 'var(--space-3)', fontSize: '1.25rem' }} />
                Explore Destinations
              </Link>
              
              <Link to="/trips" style={linkStyle('/trips')}>
                <FaSuitcase style={{ marginRight: 'var(--space-3)', fontSize: '1.25rem' }} />
                My Trips
              </Link>
              
              <Link to="/checklist" style={linkStyle('/checklist')}>
                <FaListAlt style={{ marginRight: 'var(--space-3)', fontSize: '1.25rem' }} />
                Travel Checklist
              </Link>
              
              <div style={{ 
                height: '1px', 
                backgroundColor: 'var(--color-gray-200)',
                margin: 'var(--space-4) 0'
              }} />
              
              <Link to="/favorites" style={linkStyle('/favorites')}>
                <FaRegBookmark style={{ marginRight: 'var(--space-3)', fontSize: '1.25rem' }} />
                Saved Places
              </Link>
              
              <Link to="/settings" style={linkStyle('/settings')}>
                <FaCog style={{ marginRight: 'var(--space-3)', fontSize: '1.25rem' }} />
                Settings
              </Link>
              
              <Link to="/help" style={linkStyle('/help')}>
                <FaQuestionCircle style={{ marginRight: 'var(--space-3)', fontSize: '1.25rem' }} />
                Help & Support
              </Link>
            </nav>
            
            <div className="sidebar-footer" style={{
              marginTop: 'auto',
              paddingTop: 'var(--space-6)'
            }}>
              <p style={{ 
                fontSize: '0.875rem',
                color: 'var(--color-gray-500)',
                marginBottom: 'var(--space-2)'
              }}>
                © 2025 TravelPlanner
              </p>
              <p style={{ 
                fontSize: '0.875rem',
                color: 'var(--color-gray-500)'
              }}>
                <a href="#terms" style={{ color: 'var(--color-gray-500)' }}>Terms</a> · 
                <a href="#privacy" style={{ color: 'var(--color-gray-500)', marginLeft: 'var(--space-2)' }}>Privacy</a>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Sidebar