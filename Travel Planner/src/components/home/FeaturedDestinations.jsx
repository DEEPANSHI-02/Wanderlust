import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { FaHeart, FaRegHeart, FaMapMarkerAlt } from 'react-icons/fa'

function FeaturedDestinations() {
  const { destinations, toggleFavorite, isFavorite } = useAppContext()
  
  const featuredDestinations = destinations.slice(0, 4)
  
  return (
    <section style={{ padding: 'var(--space-16) 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--space-8)'
        }}>
          <div>
            <h2 style={{ margin: 0 }}>Featured Destinations</h2>
            <p style={{ 
              color: 'var(--color-gray-600)',
              marginTop: 'var(--space-2)'
            }}>
              Explore our handpicked destinations from around the world
            </p>
          </div>
          
          <Link to="/explore" className="button outline">
            View All Destinations
          </Link>
        </div>
        
        <div className="destinations-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--space-6)'
        }}>
          {featuredDestinations.map((destination) => (
            <motion.div 
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="destination-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                backgroundColor: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative' }}>
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }}
                />
                <button 
                  onClick={() => toggleFavorite(destination.id)}
                  aria-label={isFavorite(destination.id) ? 'Remove from favorites' : 'Add to favorites'}
                  style={{
                    position: 'absolute',
                    top: 'var(--space-3)',
                    right: 'var(--space-3)',
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-md)',
                    color: isFavorite(destination.id) ? 'var(--color-error-500)' : 'var(--color-gray-500)',
                    transition: 'all var(--transition-fast)',
                    cursor: 'pointer'
                  }}
                >
                  {isFavorite(destination.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
              </div>
              
              <div style={{ padding: 'var(--space-4)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: 'var(--color-gray-600)',
                    fontSize: '0.875rem',
                    marginBottom: 'var(--space-1)'
                  }}>
                    <FaMapMarkerAlt style={{ marginRight: 'var(--space-1)' }} />
                    {destination.country}
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{destination.name}</h3>
                </div>
                
                <p style={{ 
                  color: 'var(--color-gray-600)',
                  margin: 0,
                  marginBottom: 'var(--space-4)',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  flex: 1
                }}>
                  {destination.description}
                </p>
                
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginTop: 'auto'
                }}>
                  <div>
                    <p style={{ 
                      fontWeight: 600, 
                      color: 'var(--color-primary-600)',
                      fontSize: '1.25rem',
                      margin: 0
                    }}>
                      ${destination.budget.hotel} <span style={{ 
                        fontSize: '0.875rem', 
                        fontWeight: 'normal',
                        color: 'var(--color-gray-500)'
                      }}>/ night</span>
                    </p>
                  </div>
                  
                  <Link to={`/explore/${destination.id}`} className="button">
                    Explore
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedDestinations