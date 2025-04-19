import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'London, UK',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'TravelPlanner completely transformed how I organize my trips. The itinerary builder is intuitive, and I love being able to keep track of my budget in real-time. Its become my go-to travel companion!' ,
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'As someone who travels frequently for both work and leisure, having all my travel plans in one place has been a game-changer. The checklist feature ensures I never forget anything important.',
      rating: 5
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      location: 'Barcelona, Spain',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'I have planned three family vacations using TravelPlanner, and each one has been smoother than the last. The destination recommendations are spot on, and the interface is so easy to use!',
      rating: 4
    }
  ]
  
  const [activeIndex, setActiveIndex] = useState(0)
  
  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  const handleNext = () => {
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }
  
  return (
    <section style={{
      padding: 'var(--space-16) 0',
      background: 'linear-gradient(to right, var(--color-primary-50), var(--color-primary-100))'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2>What Our Travelers Say</h2>
          <p style={{ 
            color: 'var(--color-gray-600)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Hear from people who have used TravelPlanner to create their perfect journey
          </p>
        </div>
        
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          padding: '0 var(--space-8)'
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: 'white',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-8)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-6)',
                margin: '0 auto'
              }}
            >
              <FaQuoteLeft style={{ 
                fontSize: '2rem',
                color: 'var(--color-primary-300)'
              }} />
              
              <p style={{ 
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--color-gray-700)',
                margin: 0
              }}>
                {testimonials[activeIndex].text}
              </p>
              
              <div style={{ 
                display: 'flex',
                alignItems: 'center',
                marginTop: 'var(--space-4)'
              }}>
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginRight: 'var(--space-4)'
                  }}
                />
                
                <div>
                  <h4 style={{ margin: 0 }}>{testimonials[activeIndex].name}</h4>
                  <p style={{ 
                    margin: 0,
                    color: 'var(--color-gray-500)',
                    fontSize: '0.875rem'
                  }}>
                    {testimonials[activeIndex].location}
                  </p>
                  
                  <div style={{ display: 'flex', marginTop: 'var(--space-1)' }}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i}
                        style={{ 
                          color: i < testimonials[activeIndex].rating 
                            ? 'var(--color-warning-500)' 
                            : 'var(--color-gray-300)',
                          marginRight: '2px'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              cursor: 'pointer',
              zIndex: 2
            }}
          >
            <FaArrowLeft />
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-md)',
              cursor: 'pointer',
              zIndex: 2
            }}
          >
            <FaArrowRight />
          </button>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-2)',
            marginTop: 'var(--space-6)'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  backgroundColor: index === activeIndex 
                    ? 'var(--color-primary-500)' 
                    : 'var(--color-gray-300)',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials