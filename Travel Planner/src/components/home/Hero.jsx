import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa'

function Hero() {
  return (
    <div className="hero" style={{
      background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=2070&auto=format&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: 'var(--space-20) var(--space-4)',
      textAlign: 'center',
      borderRadius: 'var(--radius-lg)',
      margin: 'var(--space-4)',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hero-content"
        style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 700,
          marginBottom: 'var(--space-6)'
        }}>
          Your Journey Begins Here
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          marginBottom: 'var(--space-8)',
          lineHeight: 1.6,
          maxWidth: '700px',
          margin: '0 auto var(--space-8)'
        }}>
          Discover amazing destinations, plan your trips with ease, and create unforgettable memories around the world.
        </p>
        
        <motion.div 
          className="search-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            backgroundColor: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-6)',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-xl)'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-4)'
          }}>
            <div className="input-group" style={{ position: 'relative' }}>
              <FaMapMarkerAlt style={{ 
                position: 'absolute',
                left: 'var(--space-3)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-primary-500)'
              }} />
              <input 
                type="text" 
                placeholder="Where to?" 
                style={{
                  paddingLeft: 'var(--space-8)'
                }}
              />
            </div>
            
            <div className="input-group" style={{ position: 'relative' }}>
              <FaCalendarAlt style={{ 
                position: 'absolute',
                left: 'var(--space-3)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-primary-500)'
              }} />
              <input 
                type="text" 
                placeholder="When?" 
                style={{
                  paddingLeft: 'var(--space-8)'
                }}
              />
            </div>
            
            <div className="input-group">
              <select defaultValue="">
                <option value="" disabled>Travelers</option>
                <option value="1">1 Traveler</option>
                <option value="2">2 Travelers</option>
                <option value="3">3 Travelers</option>
                <option value="4">4+ Travelers</option>
              </select>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="button"
            style={{
              width: '100%',
              padding: 'var(--space-3) var(--space-4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'var(--space-2)',
              fontSize: '1.125rem'
            }}
          >
            <FaSearch /> Search Destinations
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            marginTop: 'var(--space-8)',
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-6)',
            flexWrap: 'wrap'
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              margin: 0,
              lineHeight: 1.2
            }}>500+</p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500
            }}>Destinations</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              margin: 0,
              lineHeight: 1.2
            }}>10k+</p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500
            }}>Happy Travelers</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700',
              margin: 0,
              lineHeight: 1.2
            }}>98%</p>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 500
            }}>Satisfaction Rate</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero