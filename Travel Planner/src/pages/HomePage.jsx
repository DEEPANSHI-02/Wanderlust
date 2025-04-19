import Hero from '../components/home/Hero'
import FeaturedDestinations from '../components/home/FeaturedDestinations'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <FeaturedDestinations />
      <HowItWorks />
      
      <section style={{
        padding: 'var(--space-16) 0',
        backgroundColor: 'white'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-8)',
            alignItems: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <h2>Take Control of Your Travel Experience</h2>
              <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--space-6)' }}>
                With TravelPlanner, you can organize every aspect of your journey in one place. From planning itineraries to tracking expenses, we've got you covered.
              </p>
              
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                marginBottom: 'var(--space-6)'
              }}>
                {['Detailed itinerary planning', 'Budget tracking and management', 'Customizable packing lists', 'Weather forecasts for destinations'].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--space-3)'
                  }}>
                    <span style={{
                      display: 'inline-block',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-100)',
                      color: 'var(--color-primary-600)',
                      marginRight: 'var(--space-3)',
                      flexShrink: 0,
                      textAlign: 'center',
                      lineHeight: '20px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <button className="button accent" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)'
              }}>
                Start Planning <FaArrowRight />
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
                alt="Travel planning on the go"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-xl)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      <section style={{
        padding: 'var(--space-16) 0',
        backgroundColor: 'var(--color-primary-600)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ color: 'white' }}>Ready to Plan Your Next Adventure?</h2>
          <p style={{ 
            maxWidth: '700px', 
            margin: 'var(--space-4) auto var(--space-8)',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Join thousands of travelers who use TravelPlanner to create unforgettable experiences around the world.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button"
            style={{
              backgroundColor: 'white',
              color: 'var(--color-primary-600)',
              padding: 'var(--space-3) var(--space-6)',
              fontSize: '1.125rem'
            }}
          >
            Get Started — It's Free
          </motion.button>
        </div>
      </section>
    </div>
  )
}

export default HomePage