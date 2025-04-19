import { createContext, useContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { mockDestinations } from '../data/mockData'

const AppContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export function AppProvider({ children }) {
  // State for trips
  const [trips, setTrips] = useState(() => {
    const savedTrips = localStorage.getItem('trips')
    return savedTrips ? JSON.parse(savedTrips) : []
  })

  // State for destinations
  const [destinations, setDestinations] = useState(mockDestinations)
  
  // State for favorites
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites')
    return savedFavorites ? JSON.parse(savedFavorites) : []
  })
  
  // State for checklists
  const [checklists, setChecklists] = useState(() => {
    const savedChecklists = localStorage.getItem('checklists')
    return savedChecklists ? JSON.parse(savedChecklists) : {
      essentials: [
        { id: uuidv4(), name: 'Passport', checked: false },
        { id: uuidv4(), name: 'ID/Driver\'s License', checked: false },
        { id: uuidv4(), name: 'Credit/Debit Cards', checked: false },
        { id: uuidv4(), name: 'Travel Insurance', checked: false },
        { id: uuidv4(), name: 'Phone & Charger', checked: false },
      ],
      clothing: [
        { id: uuidv4(), name: 'Shirts', checked: false },
        { id: uuidv4(), name: 'Pants/Shorts', checked: false },
        { id: uuidv4(), name: 'Underwear', checked: false },
        { id: uuidv4(), name: 'Socks', checked: false },
        { id: uuidv4(), name: 'Sleepwear', checked: false },
      ],
      toiletries: [
        { id: uuidv4(), name: 'Toothbrush & Toothpaste', checked: false },
        { id: uuidv4(), name: 'Shampoo & Conditioner', checked: false },
        { id: uuidv4(), name: 'Deodorant', checked: false },
        { id: uuidv4(), name: 'Sunscreen', checked: false },
      ]
    }
  })

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('trips', JSON.stringify(trips))
  }, [trips])
  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])
  
  useEffect(() => {
    localStorage.setItem('checklists', JSON.stringify(checklists))
  }, [checklists])

  // Trip functions
  const createTrip = (tripData) => {
    const newTrip = {
      id: uuidv4(),
      ...tripData,
      createdAt: new Date().toISOString()
    }
    setTrips([...trips, newTrip])
    return newTrip.id
  }

  const updateTrip = (id, updatedData) => {
    setTrips(trips.map(trip => 
      trip.id === id ? { ...trip, ...updatedData } : trip
    ))
  }

  const deleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id))
  }

  const getTrip = (id) => {
    return trips.find(trip => trip.id === id) || null
  }

  // Favorite functions
  const toggleFavorite = (destinationId) => {
    if (favorites.includes(destinationId)) {
      setFavorites(favorites.filter(id => id !== destinationId))
    } else {
      setFavorites([...favorites, destinationId])
    }
  }
  
  const isFavorite = (destinationId) => {
    return favorites.includes(destinationId)
  }

  // Checklist functions
  const toggleChecklistItem = (category, itemId) => {
    setChecklists({
      ...checklists,
      [category]: checklists[category].map(item => 
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    })
  }
  
  const addChecklistItem = (category, name) => {
    const newItem = {
      id: uuidv4(),
      name,
      checked: false
    }
    
    setChecklists({
      ...checklists,
      [category]: [...checklists[category], newItem]
    })
  }
  
  const removeChecklistItem = (category, itemId) => {
    setChecklists({
      ...checklists,
      [category]: checklists[category].filter(item => item.id !== itemId)
    })
  }
  
  const addChecklistCategory = (category) => {
    if (!checklists[category]) {
      setChecklists({
        ...checklists,
        [category]: []
      })
    }
  }

  const value = {
    trips,
    destinations,
    favorites,
    checklists,
    createTrip,
    updateTrip,
    deleteTrip,
    getTrip,
    toggleFavorite,
    isFavorite,
    toggleChecklistItem,
    addChecklistItem,
    removeChecklistItem,
    addChecklistCategory
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}