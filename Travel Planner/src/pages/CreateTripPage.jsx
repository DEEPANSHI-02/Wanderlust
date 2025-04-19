import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext'
import { 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaUserFriends, 
  FaDollarSign,
  FaPlus,
  FaSave,
  FaTimes
} from 'react-icons/fa'

function CreateTripPage() {
  const navigate = useNavigate()
  const { createTrip } = useAppContext()
  
  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    travelers: 1,
    budget: '',
    notes: '',
    itinerary: []
  })
  
  const [currentStep, setCurrentStep] = useState(1)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleAddItineraryDay = () => {
    setFormData(prev => ({
      ...prev,
      itinerary: [...prev.itinerary, { day: prev.itinerary.length + 1, activities: [] }]
    }))
  }
  
  const handleAddActivity = (dayIndex) => {
    const updatedItinerary = [...formData.itinerary]
    updatedItinerary[dayIndex].activities.push({ name: '', time: '', notes: '' })
    
    setFormData(prev => ({
      ...prev,
      itinerary: updatedItinerary
    }))
  }
  
  const handleActivityChange = (dayIndex, activityIndex, field, value) => {
    const updatedItinerary = [...formData.itinerary]
    updatedItinerary[dayIndex].activities[activityIndex][field] = value
    
    setFormData(prev => ({
      ...prev,
      itinerary: updatedItinerary
    }))
  }
  
  const handleRemoveActivity = (dayIndex, activityIndex) => {
    const updatedItinerary = [...formData.itinerary]
    updatedItinerary[dayIndex].activities.splice(activityIndex, 1)
    
    setFormData(prev => ({
      ...prev,
      itinerary: updatedItinerary
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create the trip
    const tripId = createTrip(formData)
    
    // Navigate to the trip details page
    navigate(`/trips/${tripId}`)
  }
  
  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }
  
  const prevStep = () => {
    setCurrentStep(prev => prev - 1)
  }
  
  return (
    <div className="create-trip-page" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Create New Trip</h1>
          <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--space-6)' }}>
            Plan your next adventure and keep all your travel details in one place
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-6)'
          }}>
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative',
                width: '33%'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: currentStep >= 1 ? 'var(--color-primary-500)' : 'var(--color-gray-300)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 'var(--space-2)',
                transition: 'background-color var(--transition-fast)'
              }}>
                1
              </div>
              <p style={{ 
                margin: 0,
                fontWeight: currentStep === 1 ? 'bold' : 'normal',
                color: currentStep >= 1 ? 'var(--color-gray-900)' : 'var(--color-gray-500)'
              }}>
                Basic Info
              </p>
              
              {/* Connector line */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '-50%',
                width: '100%',
                height: '2px',
                backgroundColor: currentStep > 1 ? 'var(--color-primary-500)' : 'var(--color-gray-300)',
                zIndex: -1,
                transition: 'background-color var(--transition-fast)'
              }} />
            </div>
            
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                flexDirection: 'column',
                position: 'relative',
                width: '33%'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: currentStep >= 2 ? 'var(--color-primary-500)' : 'var(--color-gray-300)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 'var(--space-2)',
                transition: 'background-color var(--transition-fast)'
              }}>
                2
              </div>
              <p style={{ 
                margin: 0,
                fontWeight: currentStep === 2 ? 'bold' : 'normal',
                color: currentStep >= 2 ? 'var(--color-gray-900)' : 'var(--color-gray-500)'
              }}>
                Itinerary
              </p>
              
              {/* Connector line */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '-50%',
                width: '100%',
                height: '2px',
                backgroundColor: currentStep > 2 ? 'var(--color-primary-500)' : 'var(--color-gray-300)',
                zIndex: -1,
                transition: 'background-color var(--transition-fast)'
              }} />
            </div>
            
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center',
                flexDirection: 'column',
                width: '33%'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: currentStep >= 3 ? 'var(--color-primary-500)' : 'var(--color-gray-300)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                marginBottom: 'var(--space-2)',
                transition: 'background-color var(--transition-fast)'
              }}>
                3
              </div>
              <p style={{ 
                margin: 0,
                fontWeight: currentStep === 3 ? 'bold' : 'normal',
                color: currentStep >= 3 ? 'var(--color-gray-900)' : 'var(--color-gray-500)'
              }}>
                Review & Save
              </p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Trip Info */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Trip Details</h2>
                
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="title" style={{ 
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontWeight: 500
                  }}>
                    Trip Title*
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Summer Vacation in Italy"
                    required
                  />
                </div>
                
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <label htmlFor="destination" style={{ 
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontWeight: 500
                  }}>
                    Destination*
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FaMapMarkerAlt style={{ 
                      position: 'absolute',
                      left: 'var(--space-3)',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--color-gray-500)'
                    }} />
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="Where are you going?"
                      required
                      style={{ paddingLeft: 'var(--space-8)' }}
                    />
                  </div>
                </div>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div>
                    <label htmlFor="startDate" style={{ 
                      display: 'block',
                      marginBottom: 'var(--space-2)',
                      fontWeight: 500
                    }}>
                      Start Date*
                    </label>
                    <div style={{ position: 'relative' }}>
                      <FaCalendarAlt style={{ 
                        position: 'absolute',
                        left: 'var(--space-3)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--color-gray-500)'
                      }} />
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                        style={{ paddingLeft: 'var(--space-8)' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="endDate" style={{ 
                      display: 'block',
                      marginBottom: 'var(--space-2)',
                      fontWeight: 500
                    }}>
                      End Date*
                    </label>
                    <div style={{ position: 'relative' }}>
                      <FaCalendarAlt style={{ 
                        position: 'absolute',
                        left: 'var(--space-3)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--color-gray-500)'
                      }} />
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                        style={{ paddingLeft: 'var(--space-8)' }}
                      />
                    </div>
                  </div>
                </div>
                
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginBottom: 'var(--space-4)'
                }}>
                  <div>
                    <label htmlFor="travelers" style={{ 
                      display: 'block',
                      marginBottom: 'var(--space-2)',
                      fontWeight: 500
                    }}>
                      Number of Travelers
                    </label>
                    <div style={{ position: 'relative' }}>
                      <FaUserFriends style={{ 
                        position: 'absolute',
                        left: 'var(--space-3)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--color-gray-500)'
                      }} />
                      <input
                        type="number"
                        id="travelers"
                        name="travelers"
                        min="1"
                        value={formData.travelers}
                        onChange={handleChange}
                        style={{ paddingLeft: 'var(--space-8)' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" style={{ 
                      display: 'block',
                      marginBottom: 'var(--space-2)',
                      fontWeight: 500
                    }}>
                      Budget
                    </label>
                    <div style={{ position: 'relative' }}>
                      <FaDollarSign style={{ 
                        position: 'absolute',
                        left: 'var(--space-3)',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--color-gray-500)'
                      }} />
                      <input
                        type="number"
                        id="budget"
                        name="budget"
                        min="0"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Total budget amount"
                        style={{ paddingLeft: 'var(--space-8)' }}
                      />
                    </div>
                  </div>
                </div>
                
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <label htmlFor="notes" style={{ 
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontWeight: 500
                  }}>
                    Notes
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any additional notes or details about your trip"
                    rows="4"
                  />
                </div>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'flex-end'
                }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={nextStep}
                    className="button"
                  >
                    Continue to Itinerary
                  </motion.button>
                </div>
              </motion.div>
            )}
            
            {/* Step 2: Itinerary */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Plan Your Itinerary</h2>
                
                {formData.itinerary.length === 0 ? (
                  <div style={{
                    textAlign: 'center',
                    padding: 'var(--space-8)',
                    border: '2px dashed var(--color-gray-300)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: 'var(--space-6)'
                  }}>
                    <p style={{ fontSize: '1.125rem', marginBottom: 'var(--space-4)' }}>
                      Start planning your day-by-day activities
                    </p>
                    <button
                      type="button"
                      onClick={handleAddItineraryDay}
                      className="button"
                    >
                      Add First Day
                    </button>
                  </div>
                ) : (
                  <div style={{ marginBottom: 'var(--space-6)' }}>
                    {formData.itinerary.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        style={{
                          marginBottom: 'var(--space-6)',
                          padding: 'var(--space-4)',
                          border: '1px solid var(--color-gray-200)',
                          borderRadius: 'var(--radius-lg)'
                        }}
                      >
                        <h3 style={{ marginBottom: 'var(--space-4)' }}>Day {day.day}</h3>
                        
                        {day.activities.length === 0 ? (
                          <div style={{
                            textAlign: 'center',
                            padding: 'var(--space-4)',
                            backgroundColor: 'var(--color-gray-50)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--space-4)'
                          }}>
                            <p style={{ marginBottom: 'var(--space-3)' }}>
                              No activities planned for this day
                            </p>
                          </div>
                        ) : (
                          day.activities.map((activity, activityIndex) => (
                            <div
                              key={activityIndex}
                              style={{
                                display: 'grid',
                                gridTemplateColumns: '100px 1fr auto',
                                gap: 'var(--space-3)',
                                marginBottom: 'var(--space-3)',
                                padding: 'var(--space-3)',
                                backgroundColor: 'var(--color-gray-50)',
                                borderRadius: 'var(--radius-md)',
                                alignItems: 'center'
                              }}
                            >
                              <input
                                type="time"
                                value={activity.time}
                                onChange={(e) => handleActivityChange(dayIndex, activityIndex, 'time', e.target.value)}
                                style={{ fontSize: '0.9rem' }}
                              />
                              
                              <div>
                                <input
                                  type="text"
                                  value={activity.name}
                                  onChange={(e) => handleActivityChange(dayIndex, activityIndex, 'name', e.target.value)}
                                  placeholder="Activity name"
                                  style={{ marginBottom: 'var(--space-2)' }}
                                />
                                <input
                                  type="text"
                                  value={activity.notes}
                                  onChange={(e) => handleActivityChange(dayIndex, activityIndex, 'notes', e.target.value)}
                                  placeholder="Notes (optional)"
                                  style={{ fontSize: '0.9rem' }}
                                />
                              </div>
                              
                              <button
                                type="button"
                                onClick={() => handleRemoveActivity(dayIndex, activityIndex)}
                                aria-label="Remove activity"
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: 'var(--color-error-500)',
                                  cursor: 'pointer',
                                  padding: 'var(--space-1)'
                                }}
                              >
                                <FaTimes />
                              </button>
                            </div>
                          ))
                        )}
                        
                        <button
                          type="button"
                          onClick={() => handleAddActivity(dayIndex)}
                          className="button outline"
                          style={{
                            width: '100%',
                            marginTop: 'var(--space-3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--space-2)'
                          }}
                        >
                          <FaPlus /> Add Activity
                        </button>
                      </div>
                    ))}
                    
                    <button
                      type="button"
                      onClick={handleAddItineraryDay}
                      className="button secondary"
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--space-2)'
                      }}
                    >
                      <FaPlus /> Add Another Day
                    </button>
                  </div>
                )}
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="button outline"
                  >
                    Back
                  </button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={nextStep}
                    className="button"
                  >
                    Review Trip
                  </motion.button>
                </div>
              </motion.div>
            )}
            
            {/* Step 3: Review & Save */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <h2 style={{ marginBottom: 'var(--space-6)' }}>Review Your Trip</h2>
                
                <div style={{ marginBottom: 'var(--space-6)' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-4)' }}>
                    {formData.title}
                  </h3>
                  
                  <div style={{ display: 'grid', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaMapMarkerAlt style={{ marginRight: 'var(--space-2)', color: 'var(--color-primary-500)' }} />
                      <span style={{ fontWeight: 500 }}>Destination:</span>
                      <span style={{ marginLeft: 'var(--space-2)' }}>{formData.destination}</span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaCalendarAlt style={{ marginRight: 'var(--space-2)', color: 'var(--color-primary-500)' }} />
                      <span style={{ fontWeight: 500 }}>Dates:</span>
                      <span style={{ marginLeft: 'var(--space-2)' }}>
                        {new Date(formData.startDate).toLocaleDateString()} to {new Date(formData.endDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaUserFriends style={{ marginRight: 'var(--space-2)', color: 'var(--color-primary-500)' }} />
                      <span style={{ fontWeight: 500 }}>Travelers:</span>
                      <span style={{ marginLeft: 'var(--space-2)' }}>{formData.travelers}</span>
                    </div>
                    
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <FaDollarSign style={{ marginRight: 'var(--space-2)', color: 'var(--color-primary-500)' }} />
                      <span style={{ fontWeight: 500 }}>Budget:</span>
                      <span style={{ marginLeft: 'var(--space-2)' }}>
                        {formData.budget ? `$${formData.budget}` : 'Not specified'}
                      </span>
                    </div>
                  </div>
                  
                  {formData.notes && (
                    <div style={{ marginBottom: 'var(--space-6)' }}>
                      <h4>Notes</h4>
                      <p style={{ 
                        backgroundColor: 'var(--color-gray-50)',
                        padding: 'var(--space-3)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-gray-700)'
                      }}>
                        {formData.notes}
                      </p>
                    </div>
                  )}
                  
                  {formData.itinerary.length > 0 && (
                    <div>
                      <h4 style={{ marginBottom: 'var(--space-3)' }}>Itinerary Summary</h4>
                      
                      <div style={{ 
                        display: 'grid',
                        gap: 'var(--space-4)'
                      }}>
                        {formData.itinerary.map((day, dayIndex) => (
                          <div 
                            key={dayIndex}
                            style={{
                              padding: 'var(--space-3)',
                              backgroundColor: 'var(--color-gray-50)',
                              borderRadius: 'var(--radius-md)'
                            }}
                          >
                            <h5 style={{ margin: '0 0 var(--space-2) 0' }}>Day {day.day}</h5>
                            
                            {day.activities.length > 0 ? (
                              <ul style={{ 
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                fontSize: '0.9rem'
                              }}>
                                {day.activities.map((activity, activityIndex) => (
                                  <li key={activityIndex} style={{ 
                                    marginBottom: 'var(--space-2)',
                                    display: 'flex',
                                    gap: 'var(--space-2)'
                                  }}>
                                    <span style={{ fontWeight: 500, minWidth: '60px' }}>
                                      {activity.time}
                                    </span>
                                    <span style={{ flex: 1 }}>
                                      {activity.name}
                                      {activity.notes && (
                                        <span style={{ 
                                          display: 'block',
                                          fontSize: '0.8rem',
                                          color: 'var(--color-gray-600)',
                                          marginTop: '2px'
                                        }}>
                                          {activity.notes}
                                        </span>
                                      )}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                No activities planned for this day
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <button
                    type="button"
                    onClick={prevStep}
                    className="button outline"
                  >
                    Back
                  </button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="button accent"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)'
                    }}
                  >
                    <FaSave /> Save Trip
                  </motion.button>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default CreateTripPage