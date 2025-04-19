import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext'
import { 
  FaSearch, 
  FaFilter, 
  FaHeart, 
  FaRegHeart, 
  FaMapMarkerAlt,
  FaThermometerHalf,
  FaWind
} from 'react-icons/fa'

function ExplorePage() {
  const { destinations, toggleFavorite, isFavorite } = useAppContext()
  
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredDestinations, setFilteredDestinations] = useState(destinations)
  const [showFilters, setShowFilters] = useState(false)
  
  // Filter destinations when search term changes
  useEffect(() => {
    const results = destinations.filter(destination => 
      destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredDestinations(results)
  }, [searchTerm, destinations])
  
  return (
    <div className="explore-page" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Explore Destinations</h1>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--space-6)' }}>
            Discover amazing places around the world and start planning your next adventure
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-4)',
            marginBottom: 'var(--space-6)'
          }}>
            <div className="search-box" style={{ 
              position: 'relative',
              flex: 1
            }}>
              <input 
                type="text" 
                placeholder="Search destinations..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  padding: 'var(--space-3) var(--space-3)',
                  paddingLeft: 'var(--space-10)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-gray-300)',
                  fontSize: '1rem',
                  width: '100%'
                }}
              />
              <FaSearch style={{ 
                position: 'absolute',
                left: 'var(--space-4)',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--color-gray-500)'
              }} />
            </div>
            
            <button 
              className="button outline"
              onClick={() => setShowFilters(!showFilters)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}
            >
              <FaFilter /> Filters
            </button>
          </div>
          
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                marginBottom: 'var(--space-6)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <h3 style={{ marginBottom: 'var(--space-4)' }}>Filter Options</h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-6)'
              }}>
                <div>
                  <label htmlFor="region" style={{ 
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontWeight: 500
                  }}>
                    Region
                  </label>
                  <select id="region">
                    <option value="">All Regions</option>
                    <option value="europe">Europe</option>
                    <option value="asia">Asia</option>
                    <option value="northAmerica">North America</option>
                    <option value="southAmerica">South America</option>
                    <option value="africa">Africa</option>
                    <option value="oceania">Oceania</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" style={{ 
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontWeight: 500
                  }}>
                    Budget Range
                  </label>
                  <select id="budget">
                    <option value="">Any Budget</option>
                    <option value="budget">Budget-friendly ($100/night)</option>
                    <option value="moderate">Moderate ($100-$200/night)</option>
                    <option value="luxury">Luxury ($200/night)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="activities" style={{ 
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontWeight: 500
                  }}>
                    Travel Style
                  </label>
                  <select id="activities">
                    <option value="">All Styles</option>
                    <option value="beach">Beach & Relaxation</option>
                    <option value="adventure">Adventure & Outdoors</option>
                    <option value="culture">Culture & History</option>
                    <option value="food">Food & Culinary</option>
                    <option value="wildlife">Wildlife & Nature</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="weather" style={{ 
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontWeight: 500
                  }}>
                    Weather
                  </label>
                  <select id="weather">
                    <option value="">Any Weather</option>
                    <option value="warm">Warm ( 25°C)</option>
                    <option value="mild">Mild (15-25°C)</option>
                    <option value="cool">Cool ( 15°C)</option>
                  </select>
                </div>
              </div>
              
              <div style={{ 
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 'var(--space-3)',
                marginTop: 'var(--space-6)'
              }}>
                <button className="button outline">Reset</button>
                <button className="button">Apply Filters</button>
              </div>
            </motion.div>
          )}
          
          <div className="destinations-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {filteredDestinations.map((destination) => (
              <motion.div 
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)',
                      backgroundColor: 'var(--color-gray-100)',
                      padding: 'var(--space-1) var(--space-2)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem'
                    }}>
                      <FaThermometerHalf style={{ color: 'var(--color-primary-500)' }} /> 
                      {destination.weather.temp}°C
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-1)',
                      backgroundColor: 'var(--color-gray-100)',
                      padding: 'var(--space-1) var(--space-2)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.875rem'
                    }}>
                      <FaWind style={{ color: 'var(--color-primary-500)' }} /> 
                      {destination.weather.condition}
                    </div>
                  </div>
                  
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
                    
                    <button className="button">View Details</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredDestinations.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-12) var(--space-4)',
              backgroundColor: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-lg)',
              marginTop: 'var(--space-8)'
            }}>
              <h3>No destinations found</h3>
              <p style={{ color: 'var(--color-gray-600)' }}>
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button 
                className="button"
                onClick={() => {
                  setSearchTerm('')
                  setShowFilters(false)
                }}
                style={{ marginTop: 'var(--space-4)' }}
              >
                Reset Search
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ExplorePage