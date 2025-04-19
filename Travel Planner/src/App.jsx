import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import TripsPage from './pages/TripsPage'
import TripDetailsPage from './pages/TripDetailsPage'
import CreateTripPage from './pages/CreateTripPage'
import ChecklistPage from './pages/ChecklistPage'

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="trips" element={<TripsPage />} />
          <Route path="trips/:id" element={<TripDetailsPage />} />
          <Route path="trips/create" element={<CreateTripPage />} />
          <Route path="checklist" element={<ChecklistPage />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App