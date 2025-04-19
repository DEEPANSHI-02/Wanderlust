import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext'
import { 
  FaPlus, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUserFriends, 
  FaEllipsisH,
  FaSuitcase,
  FaTrashAlt,
  FaPencilAlt
} from 'react-icons/fa'
import { format } from 'date-fns'

function TripsPage() {
  const { trips, deleteTrip } = useAppContext()
  const [activeMenu, setActiveMenu] = useState(null)
  
  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id)
  }
  
  const handleDelete = (e, id) => {
    e.stopPropagation()
    if (window.confirm('Are you sure you want to delete this trip?')) {
      deleteTrip(id)
      setActiveMenu(null)
    }
  }
  
  return (
    <div className="trips-page" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container">
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--space-8)'
        }}>
          <div>
            <h1>My Trips</h1>
            <p style={{ color: 'var(--color-gray-600)' }}>
              Manage and organize all your travel plans in one place
            </p>
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
              <FaPlus /> Create New Trip
            </motion.button>
          </Link>
        </div>
        
        {trips.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-12) var(--space-4)',
            backgroundColor: 'var(--color-gray-50)',
            borderRadius: 'var(--radius-lg)',
            marginTop: 'var(--space-8)'
          }}>
            <div style={{
              fontSize: '4rem',
              color: 'var(--color-gray-300)',
              marginBottom: 'var(--space-4)'
            }}>
              <FaSuitcase />
            </div>
            <h2>No trips planned yet</h2>
            <p style={{ color: 'var(--color-gray-600)', maxWidth: '500px', margin: '0 auto var(--space-6)' }}>
              Start planning your next adventure and keep all your travel details organized in one place.
            </p>
            <Link to="/trips/create" style={{ textDecoration: 'none' }}>
              <button className="button">
                Plan Your First Trip
              </button>
            </Link>
          </div>
        ) : (
          <div className="trips-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {trips.map((trip) => (
              <motion.div 
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{ position: 'relative' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2070&auto=format&fit=crop" 
                    alt={trip.title}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 'var(--space-3)',
                    right: 'var(--space-3)',
                  }}>
                    <button
                      onClick={() => toggleMenu(trip.id)}
                      aria-label="Trip options"
                      style={{
                        background: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '36px',
                        height: '36px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-md)',
                        cursor: 'pointer'
                      }}
                    >
                      <FaEllipsisH />
                    </button>
                    
                    {activeMenu === trip.id && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: 'var(--space-2)',
                        backgroundColor: 'white',
                        borderRadius: 'var(--radius-md)',
                        boxShadow: 'var(--shadow-lg)',
                        zIndex: 10,
                        width: '150px'
                      }}>
                        <Link 
                          to={`/trips/${trip.id}/edit`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-2)',
                            padding: 'var(--space-3)',
                            textDecoration: 'none',
                            color: 'var(--color-gray-700)',
                            borderBottom: '1px solid var(--color-gray-200)'
                          }}
                        >
                          <FaPencilAlt /> Edit Trip
                        </Link>
                        <button
                          onClick={(e) => handleDelete(e, trip.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-2)',
                            padding: 'var(--space-3)',
                            backgroundColor: 'transparent',
                            border: 'none',
                            width: '100%',
                            textAlign: 'left',
                            color: 'var(--color-error-500)',
                            cursor: 'pointer'
                          }}
                        >
                          <FaTrashAlt /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={{ padding: 'var(--space-4)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ margin: '0 0 var(--space-2) 0' }}>{trip.title}</h3>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--color-gray-600)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    <FaMapMarkerAlt style={{ marginRight: 'var(--space-2)', flexShrink: 0 }} />
                    <span>{trip.destination}</span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--color-gray-600)',
                    marginBottom: 'var(--space-2)'
                  }}>
                    <FaCalendarAlt style={{ marginRight: 'var(--space-2)', flexShrink: 0 }} />
                    <span>
                      {trip.startDate && trip.endDate ? (
                        `${format(new Date(trip.startDate), 'MMM d')} - ${format(new Date(trip.endDate), 'MMM d, yyyy')}`
                      ) : (
                        'Dates not set'
                      )}
                    </span>
                  </div>
                  
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--color-gray-600)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    <FaUserFriends style={{ marginRight: 'var(--space-2)', flexShrink: 0 }} />
                    <span>{trip.travelers} {trip.travelers === 1 ? 'Traveler' : 'Travelers'}</span>
                  </div>
                  
                  {trip.notes && (
                    <p style={{ 
                      color: 'var(--color-gray-600)',
                      margin: '0 0 var(--space-4) 0',
                      fontSize: '0.9rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>
                      {trip.notes}
                    </p>
                  )}
                  
                  <Link 
                    to={`/trips/${trip.id}`} 
                    style={{ 
                      marginTop: 'auto',
                      textDecoration: 'none'
                    }}
                  >
                    <button className="button" style={{ width: '100%' }}>
                      View Trip
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default TripsPage