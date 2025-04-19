import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext'
import { format } from 'date-fns'
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUserFriends, 
  FaDollarSign,
  FaEdit,
  FaTrashAlt,
  FaPlus,
  FaCheck,
  FaTimes,
  FaListAlt
} from 'react-icons/fa'

function TripDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getTrip, updateTrip, deleteTrip } = useAppContext()
  
  const trip = getTrip(id)
  
  // If trip not found, redirect to trips page
  if (!trip) {
    navigate('/trips')
    return null
  }
  
  const [activeTab, setActiveTab] = useState('overview')
  
  const handleDeleteTrip = () => {
    if (window.confirm('Are you sure you want to delete this trip? This action cannot be undone.')) {
      deleteTrip(id)
      navigate('/trips')
    }
  }
  
  return (
    <div className="trip-details-page" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-6)'
          }}>
            <div>
              <div style={{ marginBottom: 'var(--space-2)' }}>
                <Link 
                  to="/trips"
                  style={{
                    color: 'var(--color-gray-600)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                    fontSize: '0.9rem'
                  }}
                >
                  ← Back to My Trips
                </Link>
              </div>
              <h1 style={{ margin: 0 }}>{trip.title}</h1>
            </div>
            
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <Link 
                to={`/trips/${id}/edit`}
                className="button outline"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                <FaEdit /> Edit Trip
              </Link>
              
              <button 
                onClick={handleDeleteTrip}
                className="button outline"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'var(--color-error-500)',
                  borderColor: 'var(--color-error-500)'
                }}
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
          
          <div style={{
            position: 'relative',
            width: '100%',
            height: '250px',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            marginBottom: 'var(--space-6)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
              alt={trip.destination}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              padding: 'var(--space-4) var(--space-6)',
              background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)'
            }}>
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                <FaMapMarkerAlt />
                <span>{trip.destination}</span>
              </div>
              
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                <FaCalendarAlt />
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
                gap: 'var(--space-2)'
              }}>
                <FaUserFriends />
                <span>{trip.travelers} {trip.travelers === 1 ? 'Traveler' : 'Travelers'}</span>
              </div>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            borderBottom: '1px solid var(--color-gray-200)',
            marginBottom: 'var(--space-6)'
          }}>
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                border: 'none',
                background: 'none',
                padding: 'var(--space-3) var(--space-5)',
                borderBottom: activeTab === 'overview' ? '2px solid var(--color-primary-500)' : 'none',
                color: activeTab === 'overview' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
                fontWeight: activeTab === 'overview' ? 600 : 400,
                cursor: 'pointer'
              }}
            >
              Overview
            </button>
            
            <button
              onClick={() => setActiveTab('itinerary')}
              style={{
                border: 'none',
                background: 'none',
                padding: 'var(--space-3) var(--space-5)',
                borderBottom: activeTab === 'itinerary' ? '2px solid var(--color-primary-500)' : 'none',
                color: activeTab === 'itinerary' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
                fontWeight: activeTab === 'itinerary' ? 600 : 400,
                cursor: 'pointer'
              }}
            >
              Itinerary
            </button>
            
            <button
              onClick={() => setActiveTab('expenses')}
              style={{
                border: 'none',
                background: 'none',
                padding: 'var(--space-3) var(--space-5)',
                borderBottom: activeTab === 'expenses' ? '2px solid var(--color-primary-500)' : 'none',
                color: activeTab === 'expenses' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
                fontWeight: activeTab === 'expenses' ? 600 : 400,
                cursor: 'pointer'
              }}
            >
              Expenses
            </button>
            
            <button
              onClick={() => setActiveTab('checklist')}
              style={{
                border: 'none',
                background: 'none',
                padding: 'var(--space-3) var(--space-5)',
                borderBottom: activeTab === 'checklist' ? '2px solid var(--color-primary-500)' : 'none',
                color: activeTab === 'checklist' ? 'var(--color-primary-500)' : 'var(--color-gray-700)',
                fontWeight: activeTab === 'checklist' ? 600 : 400,
                cursor: 'pointer'
              }}
            >
              Packing List
            </button>
          </div>
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'var(--space-6)'
            }}>
              <div>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Trip Details</h3>
                  
                  <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaMapMarkerAlt style={{ marginRight: 'var(--space-3)', color: 'var(--color-primary-500)' }} />
                      <div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>Destination</div>
                        <div style={{ fontWeight: 500 }}>{trip.destination}</div>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaCalendarAlt style={{ marginRight: 'var(--space-3)', color: 'var(--color-primary-500)' }} />
                      <div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>Dates</div>
                        <div style={{ fontWeight: 500 }}>
                          {trip.startDate && trip.endDate ? (
                            `${format(new Date(trip.startDate), 'MMM d, yyyy')} - ${format(new Date(trip.endDate), 'MMM d, yyyy')}`
                          ) : (
                            'Dates not set'
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaUserFriends style={{ marginRight: 'var(--space-3)', color: 'var(--color-primary-500)' }} />
                      <div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>Travelers</div>
                        <div style={{ fontWeight: 500 }}>{trip.travelers} {trip.travelers === 1 ? 'Traveler' : 'Travelers'}</div>
                      </div>
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaDollarSign style={{ marginRight: 'var(--space-3)', color: 'var(--color-primary-500)' }} />
                      <div>
                        <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-500)' }}>Total Budget</div>
                        <div style={{ fontWeight: 500 }}>
                          {trip.budget ? `$${trip.budget}` : 'Not specified'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {trip.notes && (
                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-6)',
                    boxShadow: 'var(--shadow-md)'
                  }}>
                    <h3 style={{ marginBottom: 'var(--space-4)' }}>Notes</h3>
                    <p style={{ 
                      backgroundColor: 'var(--color-gray-50)',
                      padding: 'var(--space-4)',
                      borderRadius: 'var(--radius-md)',
                      margin: 0
                    }}>
                      {trip.notes}
                    </p>
                  </div>
                )}
              </div>
              
              <div>
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)',
                  marginBottom: 'var(--space-6)'
                }}>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Weather Forecast</h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-6)',
                    backgroundColor: 'var(--color-gray-50)',
                    borderRadius: 'var(--radius-md)',
                    margin: 0
                  }}>
                    <p style={{ textAlign: 'center' }}>
                      Weather forecast will be available 7 days before your trip.
                    </p>
                  </div>
                </div>
                
                <div style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  <h3 style={{ marginBottom: 'var(--space-4)' }}>Countdown</h3>
                  
                  {trip.startDate ? (
                    <div style={{
                      textAlign: 'center',
                      padding: 'var(--space-6)',
                      backgroundColor: 'var(--color-primary-50)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-primary-700)'
                    }}>
                      <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                        {Math.max(0, Math.ceil((new Date(trip.startDate) - new Date()) / (1000 * 60 * 60 * 24)))}
                      </div>
                      <div>Days until your trip</div>
                    </div>
                  ) : (
                    <p style={{ textAlign: 'center' }}>
                      Set your trip dates to see the countdown.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {/* Itinerary Tab */}
          {activeTab === 'itinerary' && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-6)'
              }}>
                <h3 style={{ margin: 0 }}>Trip Itinerary</h3>
                <Link 
                  to={`/trips/${id}/edit?tab=itinerary`}
                  className="button outline"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <FaEdit /> Edit Itinerary
                </Link>
              </div>
              
              {trip.itinerary && trip.itinerary.length > 0 ? (
                <div style={{ 
                  display: 'grid',
                  gap: 'var(--space-6)'
                }}>
                  {trip.itinerary.map((day, dayIndex) => (
                    <div 
                      key={dayIndex}
                      style={{
                        padding: 'var(--space-4)',
                        backgroundColor: 'var(--color-gray-50)',
                        borderRadius: 'var(--radius-md)'
                      }}
                    >
                      <h4 style={{ margin: '0 0 var(--space-3) 0' }}>
                        Day {day.day} - {
                          trip.startDate && (
                            format(
                              new Date(
                                new Date(trip.startDate).setDate(
                                  new Date(trip.startDate).getDate() + dayIndex
                                )
                              ),
                              'EEEE, MMMM d, yyyy'
                            )
                          )
                        }
                      </h4>
                      
                      {day.activities.length > 0 ? (
                        <div style={{ 
                          display: 'grid',
                          gap: 'var(--space-3)'
                        }}>
                          {day.activities.map((activity, activityIndex) => (
                            <div 
                              key={activityIndex}
                              style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 'var(--space-3)',
                                padding: 'var(--space-3)',
                                backgroundColor: 'white',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-sm)'
                              }}
                            >
                              <div style={{
                                backgroundColor: 'var(--color-primary-100)',
                                color: 'var(--color-primary-700)',
                                padding: 'var(--space-1) var(--space-2)',
                                borderRadius: 'var(--radius-md)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                minWidth: '80px',
                                textAlign: 'center'
                              }}>
                                {activity.time || 'No time'}
                              </div>
                              
                              <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 500 }}>{activity.name}</div>
                                {activity.notes && (
                                  <div style={{ 
                                    color: 'var(--color-gray-600)',
                                    fontSize: '0.875rem',
                                    marginTop: 'var(--space-1)'
                                  }}>
                                    {activity.notes}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div style={{
                          textAlign: 'center',
                          padding: 'var(--space-4)',
                          backgroundColor: 'white',
                          borderRadius: 'var(--radius-md)',
                          color: 'var(--color-gray-600)'
                        }}>
                          <p style={{ margin: 0 }}>No activities planned for this day</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: 'var(--space-8)',
                  backgroundColor: 'var(--color-gray-50)',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <p style={{ marginBottom: 'var(--space-4)' }}>
                    No itinerary has been created for this trip yet.
                  </p>
                  <Link 
                    to={`/trips/${id}/edit?tab=itinerary`}
                    className="button"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}
                  >
                    <FaPlus /> Create Itinerary
                  </Link>
                </div>
              )}
            </div>
          )}
          
          {/* Expenses Tab */}
          {activeTab === 'expenses' && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-6)'
              }}>
                <h3 style={{ margin: 0 }}>Trip Expenses</h3>
                <button 
                  className="button"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <FaPlus /> Add Expense
                </button>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: 'var(--space-8)',
                backgroundColor: 'var(--color-gray-50)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  color: 'var(--color-primary-500)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <FaDollarSign />
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  No expenses have been tracked for this trip yet.
                </p>
                <button className="button">
                  Start Tracking Expenses
                </button>
              </div>
            </div>
          )}
          
          {/* Checklist Tab */}
          {activeTab === 'checklist' && (
            <div style={{
              backgroundColor: 'white',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-6)',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-6)'
              }}>
                <h3 style={{ margin: 0 }}>Packing List</h3>
                <Link 
                  to="/checklist"
                  className="button outline"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)'
                  }}
                >
                  <FaListAlt /> Go to Full Checklist
                </Link>
              </div>
              
              <div style={{
                textAlign: 'center',
                padding: 'var(--space-8)',
                backgroundColor: 'var(--color-gray-50)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  color: 'var(--color-primary-500)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <FaListAlt />
                </div>
                <p style={{ marginBottom: 'var(--space-4)' }}>
                  Create a custom packing list for your trip to make sure you don't forget anything important.
                </p>
                <Link to="/checklist" className="button">
                  Manage Packing List
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default TripDetailsPage