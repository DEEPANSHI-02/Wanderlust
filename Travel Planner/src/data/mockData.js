// Mock destinations data
export const mockDestinations = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light dazzles with its iconic Eiffel Tower, world-class museums, and charming cafés. Experience romance, art, and culture in this beautiful European capital.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    weather: {
      temp: 22,
      condition: 'Partly Cloudy',
      humidity: 65,
      wind: 8
    },
    activities: [
      'Visit the Eiffel Tower',
      'Explore the Louvre Museum',
      'Walk along the Seine River',
      'Visit Notre-Dame Cathedral',
      'Stroll through Montmartre'
    ],
    budget: {
      currency: 'EUR',
      hotel: 150,
      food: 50,
      transportation: 20,
      activities: 40
    }
  },
  {
    id: '2',
    name: 'Tokyo',
    country: 'Japan',
    description: 'A city where tradition meets futuristic innovation. Tokyo offers ancient temples, cutting-edge technology, incredible food, and vibrant street life that will captivate all travelers.',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop',
    weather: {
      temp: 26,
      condition: 'Clear',
      humidity: 70,
      wind: 5
    },
    activities: [
      'Explore Shibuya Crossing',
      'Visit Tokyo Skytree',
      'Experience Senso-ji Temple',
      'Tour the Imperial Palace',
      'Shop in Harajuku'
    ],
    budget: {
      currency: 'JPY',
      hotel: 120,
      food: 40,
      transportation: 15,
      activities: 35
    }
  },
  {
    id: '3',
    name: 'New York City',
    country: 'United States',
    description: 'The city that never sleeps offers world-famous attractions, incredible dining, amazing shopping, and endless entertainment options throughout its diverse neighborhoods.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
    weather: {
      temp: 18,
      condition: 'Rainy',
      humidity: 72,
      wind: 12
    },
    activities: [
      'See Times Square',
      'Visit Central Park',
      'Explore the Metropolitan Museum of Art',
      'Walk across Brooklyn Bridge',
      'Experience the Statue of Liberty'
    ],
    budget: {
      currency: 'USD',
      hotel: 200,
      food: 60,
      transportation: 25,
      activities: 50
    }
  },
  {
    id: '4',
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City is a living museum of ancient history, Renaissance art, and vibrant culture. Explore ruins, savor delicious cuisine, and enjoy the passionate Italian lifestyle.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
    weather: {
      temp: 24,
      condition: 'Sunny',
      humidity: 55,
      wind: 6
    },
    activities: [
      'Tour the Colosseum',
      'Visit the Vatican Museums',
      'Throw a coin in Trevi Fountain',
      'Explore the Roman Forum',
      'Wander through Trastevere'
    ],
    budget: {
      currency: 'EUR',
      hotel: 140,
      food: 45,
      transportation: 15,
      activities: 35
    }
  },
  {
    id: '5',
    name: 'Bali',
    country: 'Indonesia',
    description: 'This tropical paradise offers stunning beaches, lush rice terraces, and vibrant spiritual culture. Relax in luxury resorts or explore ancient temples and traditional villages.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2038&auto=format&fit=crop',
    weather: {
      temp: 31,
      condition: 'Sunny',
      humidity: 80,
      wind: 7
    },
    activities: [
      'Visit Uluwatu Temple',
      'Relax on Kuta Beach',
      'Explore Ubud Monkey Forest',
      'Tour rice terraces',
      'Experience Balinese dance'
    ],
    budget: {
      currency: 'IDR',
      hotel: 80,
      food: 25,
      transportation: 10,
      activities: 30
    }
  },
  {
    id: '6',
    name: 'Barcelona',
    country: 'Spain',
    description: 'A vibrant coastal city known for its stunning architecture, delicious cuisine, beautiful beaches, and energetic atmosphere. Experience Gaudi\'s masterpieces and Mediterranean charm.',
    image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop',
    weather: {
      temp: 25,
      condition: 'Sunny',
      humidity: 60,
      wind: 8
    },
    activities: [
      'Tour Sagrada Familia',
      'Stroll along La Rambla',
      'Visit Park Güell',
      'Explore Gothic Quarter',
      'Relax on Barceloneta Beach'
    ],
    budget: {
      currency: 'EUR',
      hotel: 130,
      food: 40,
      transportation: 15,
      activities: 30
    }
  }
];

// Template for a new trip
export const tripTemplate = {
  title: '',
  destination: '',
  startDate: '',
  endDate: '',
  travelers: 1,
  budget: 0,
  itinerary: [],
  notes: '',
  expenses: []
};

// Template for a checklist item
export const checklistItemTemplate = {
  name: '',
  checked: false,
  category: 'essentials'
};

// Categories for checklist items
export const checklistCategories = [
  'essentials',
  'clothing',
  'toiletries',
  'electronics',
  'medical',
  'misc'
];