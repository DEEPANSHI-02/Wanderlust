import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../context/AppContext'
import { 
  FaCheck, 
  FaTimes, 
  FaPlus,
  FaSuitcase
} from 'react-icons/fa'

function ChecklistPage() {
  const { checklists, toggleChecklistItem, addChecklistItem, removeChecklistItem, addChecklistCategory } = useAppContext()
  
  const [newCategory, setNewCategory] = useState('')
  const [newItems, setNewItems] = useState({})
  
  const handleToggleItem = (category, itemId) => {
    toggleChecklistItem(category, itemId)
  }
  
  const handleAddItem = (category) => {
    if (newItems[category] && newItems[category].trim() !== '') {
      addChecklistItem(category, newItems[category])
      setNewItems({
        ...newItems,
        [category]: ''
      })
    }
  }
  
  const handleRemoveItem = (category, itemId) => {
    removeChecklistItem(category, itemId)
  }
  
  const handleAddCategory = () => {
    if (newCategory.trim() !== '') {
      addChecklistCategory(newCategory.toLowerCase().replace(/\s+/g, '_'))
      setNewCategory('')
    }
  }
  
  const handleNewItemChange = (category, value) => {
    setNewItems({
      ...newItems,
      [category]: value
    })
  }
  
  return (
    <div className="checklist-page" style={{ padding: 'var(--space-8) 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="checklist-header" style={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-6)'
          }}>
            <div>
              <h1>Travel Checklist</h1>
              <p style={{ color: 'var(--color-gray-600)' }}>
                Keep track of everything you need to pack for your trips
              </p>
            </div>
          </div>
          
          <div style={{
            backgroundColor: 'var(--color-primary-50)',
            padding: 'var(--space-4) var(--space-6)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--space-8)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              marginBottom: 'var(--space-3)'
            }}>
              <div style={{ fontSize: '1.5rem', color: 'var(--color-primary-600)' }}>
                <FaSuitcase />
              </div>
              <h3 style={{ margin: 0, color: 'var(--color-primary-700)' }}>Add New Category</h3>
            </div>
            
            <div style={{
              display: 'flex',
              gap: 'var(--space-3)'
            }}>
              <input
                type="text"
                placeholder="Enter new category name"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                style={{ flex: 1 }}
              />
              <button 
                onClick={handleAddCategory}
                className="button"
                disabled={!newCategory.trim()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)'
                }}
              >
                <FaPlus /> Add Category
              </button>
            </div>
          </div>
          
          <div className="checklist-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {Object.entries(checklists).map(([category, items]) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="checklist-card"
                style={{
                  backgroundColor: 'white',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'var(--space-6)',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <h3 style={{ 
                  marginTop: 0,
                  marginBottom: 'var(--space-4)',
                  textTransform: 'capitalize'
                }}>
                  {category.replace(/_/g, ' ')}
                </h3>
                
                <div className="checklist-items" style={{
                  marginBottom: 'var(--space-4)'
                }}>
                  {items.length === 0 ? (
                    <p style={{ 
                      color: 'var(--color-gray-500)',
                      textAlign: 'center',
                      padding: 'var(--space-4)'
                    }}>
                      No items in this category yet
                    </p>
                  ) : (
                    <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                      {items.map(item => (
                        <div 
                          key={item.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 'var(--space-2) var(--space-3)',
                            backgroundColor: item.checked ? 'var(--color-gray-100)' : 'white',
                            borderRadius: 'var(--radius-md)',
                            border: '1px solid var(--color-gray-200)'
                          }}
                        >
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 'var(--space-3)'
                          }}>
                            <button
                              onClick={() => handleToggleItem(category, item.id)}
                              style={{
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 'var(--radius-sm)',
                                border: item.checked 
                                  ? 'none' 
                                  : '1px solid var(--color-gray-300)',
                                backgroundColor: item.checked 
                                  ? 'var(--color-primary-500)' 
                                  : 'transparent',
                                color: 'white',
                                cursor: 'pointer'
                              }}
                            >
                              {item.checked && <FaCheck />}
                            </button>
                            
                            <span style={{
                              textDecoration: item.checked ? 'line-through' : 'none',
                              color: item.checked ? 'var(--color-gray-500)' : 'var(--color-gray-900)'
                            }}>
                              {item.name}
                            </span>
                          </div>
                          
                          <button
                            onClick={() => handleRemoveItem(category, item.id)}
                            aria-label={`Remove ${item.name}`}
                            style={{
                              backgroundColor: 'transparent',
                              border: 'none',
                              color: 'var(--color-gray-500)',
                              cursor: 'pointer',
                              padding: 'var(--space-2)',
                              borderRadius: 'var(--radius-sm)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <FaTimes />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="add-item" style={{
                  display: 'flex',
                  gap: 'var(--space-2)'
                }}>
                  <input
                    type="text"
                    placeholder="Add new item"
                    value={newItems[category] || ''}
                    onChange={(e) => handleNewItemChange(category, e.target.value)}
                    style={{ flex: 1 }}
                  />
                  <button 
                    onClick={() => handleAddItem(category)}
                    className="button"
                    disabled={!newItems[category] || !newItems[category].trim()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      padding: 'var(--space-2)'
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ChecklistPage