import { motion } from 'framer-motion'
import { 
  FaSearch, 
  FaMapMarkedAlt, 
  FaCalendarAlt, 
  FaPlane 
} from 'react-icons/fa'

function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch />,
      title: 'Discover',
      description: 'Browse through hundreds of handpicked destinations from around the world.'
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Plan',
      description: 'Create your itinerary day by day with activities, accommodations, and transportation.'
    },
    {
      icon: <FaMapMarkedAlt />,
      title: 'Organize',
      description: 'Keep all your travel details in one place with checklists, budgets, and notes.'
    },
    {
      icon: <FaPlane />,
      title: 'Travel',
      description: 'Enjoy your journey with all your plans accessible anytime, anywhere.'
    },
  ]
  
  return (
    <section style={{
      padding: 'var(--space-16) 0',
      backgroundColor: 'var(--color-gray-50)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}>
          <h2>How It Works</h2>
          <p style={{ 
            color: 'var(--color-gray-600)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            TravelPlanner makes it easy to create your perfect trip in just a few simple steps
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-8)'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                backgroundColor: 'var(--color-primary-50)',
                color: 'var(--color-primary-500)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto var(--space-4)'
              }}>
                {step.icon}
              </div>
              
              <h3>{step.title}</h3>
              <p style={{ color: 'var(--color-gray-600)' }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button"
            style={{
              padding: 'var(--space-3) var(--space-6)',
              fontSize: '1.125rem'
            }}
          >
            Start Planning
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks