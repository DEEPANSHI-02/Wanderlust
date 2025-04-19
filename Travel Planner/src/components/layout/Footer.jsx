import { FaHeart, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer style={{
      backgroundColor: 'white',
      padding: 'var(--space-8) var(--space-4)',
      borderTop: '1px solid var(--color-gray-200)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--space-8)'
        }}>
          <div>
            <h4>TravelPlanner</h4>
            <p style={{ color: 'var(--color-gray-600)' }}>
              Plan your perfect trip with ease. Discover amazing destinations and create unforgettable memories.
            </p>
            <div style={{ 
              display: 'flex',
              gap: 'var(--space-4)',
              marginTop: 'var(--space-4)'
            }}>
              <a href="#twitter" aria-label="Twitter" style={{
                color: 'var(--color-gray-600)',
                fontSize: '1.25rem',
                transition: 'color var(--transition-fast)'
              }}>
                <FaTwitter />
              </a>
              <a href="#facebook" aria-label="Facebook" style={{
                color: 'var(--color-gray-600)',
                fontSize: '1.25rem',
                transition: 'color var(--transition-fast)'
              }}>
                <FaFacebook />
              </a>
              <a href="#instagram" aria-label="Instagram" style={{
                color: 'var(--color-gray-600)',
                fontSize: '1.25rem',
                transition: 'color var(--transition-fast)'
              }}>
                <FaInstagram />
              </a>
            </div>
          </div>
          
          <div>
            <h5>Links</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#home" style={{ color: 'var(--color-gray-600)' }}>Home</a>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#explore" style={{ color: 'var(--color-gray-600)' }}>Explore</a>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#about" style={{ color: 'var(--color-gray-600)' }}>About Us</a>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#contact" style={{ color: 'var(--color-gray-600)' }}>Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5>Resources</h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#help" style={{ color: 'var(--color-gray-600)' }}>Help Center</a>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#blog" style={{ color: 'var(--color-gray-600)' }}>Travel Blog</a>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#faq" style={{ color: 'var(--color-gray-600)' }}>FAQ</a>
              </li>
              <li style={{ marginBottom: 'var(--space-2)' }}>
                <a href="#privacy" style={{ color: 'var(--color-gray-600)' }}>Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5>Subscribe to Our Newsletter</h5>
            <p style={{ color: 'var(--color-gray-600)', marginBottom: 'var(--space-3)' }}>
              Stay updated with travel tips and exclusive offers.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{ flex: 1 }}
              />
              <button className="accent">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div style={{
          marginTop: 'var(--space-8)',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--color-gray-200)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}>
          <p style={{ 
            color: 'var(--color-gray-500)',
            fontSize: '0.875rem',
            margin: 0
          }}>
            © 2025 TravelPlanner. All rights reserved.
          </p>
          <p style={{ 
            color: 'var(--color-gray-500)',
            fontSize: '0.875rem',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-1)'
          }}>
            Made with <FaHeart style={{ color: 'var(--color-error-500)' }} /> for travelers worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer