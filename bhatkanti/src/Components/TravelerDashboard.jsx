
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MenuItem, FormControl, Select, Card, CardContent, CardMedia, Button, Typography, CircularProgress, Box } from '@mui/material';
// import axios from 'axios';
// import '../style_sheets/TravelerDashboard.css'; // Import CSS

// const locations = {
//   Mumbai: [
//     { id: 1, img: 'https://via.placeholder.com/150', description: 'Marine Drive - A popular promenade in Mumbai.' },
//     { id: 2, img: 'https://via.placeholder.com/150', description: 'Gateway of India - Historic monument and popular tourist spot.' },
//   ],
//   Pune: [
//     { id: 1, img: 'https://via.placeholder.com/150', description: 'Shaniwarwada - Historical fortification in Pune.' },
//     { id: 2, img: 'https://via.placeholder.com/150', description: 'Osho Ashram - Meditation center and spiritual retreat.' },
//   ],
//   Nashik: [
//     { id: 1, img: 'https://via.placeholder.com/150', description: 'Sula Vineyard - Famous for wine tasting and vineyard tours.' },
//     { id: 2, img: 'https://via.placeholder.com/150', description: 'Pandav Leni - Ancient Buddhist caves and sculptures.' },
//   ],
// };

// const API_KEY = 'bdffb4c737704d16b15211821241608'; // Replace with your API key

// const TravelerDashboard = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleAddToWishlist = (item) => {
//     setWishlist([...wishlist, item]);
//   };

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleKnowMoreClick = () => {
//     navigate('/login');
//   };

//   useEffect(() => {
//     if (city) {
//       setLoading(true);
//       axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
//         .then(response => {
//           setWeather(response.data.current);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching weather data:', error);
//           setWeather(null); // Clear weather data on error
//           setLoading(false);
//         });
//     }
//   }, [city]);

//   return (
//     <div className="traveler-page">
//       {/* Upper Flex Section */}
//       <div className="upper-flex-section">
//         <div className="upper-flex-left">
//           <h2 className="guide-heading">Book our Guide Services</h2>
//         </div>
//         <div className="upper-flex-right">
//           <p className="travel-info">
//             Discover amazing places with our expert guides. Experience the beauty and culture of the destination with ease and comfort.
//           </p>
//           <Button variant="contained" color="primary" className="booking-button">
//             Booking
//           </Button>
//         </div>
//       </div>

//       {/* City Selection and Location Cards */}
//       <div className="dropdown-container">
//         <FormControl fullWidth>
//           <Select
//             value={city}
//             onChange={handleCityChange}
//             displayEmpty
//             renderValue={(selected) => (selected ? selected : 'Select a City')}
//           >
//             <MenuItem value="Mumbai">Mumbai</MenuItem>
//             <MenuItem value="Pune">Pune</MenuItem>
//             <MenuItem value="Nashik">Nashik</MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
//         {loading && <CircularProgress />}
//         {weather && (
//           <Box className="weather-info" sx={{ textAlign: 'right' }}>
//             <Typography variant="h6">{city}</Typography>
//             <img src={`http:${weather.condition.icon}`} alt={weather.condition.text} style={{ width: '50px', height: '50px' }} />
//             <Typography variant="body1">Temperature: {weather.temp_c}°C</Typography>
//             <Typography variant="body1">Weather: {weather.condition.text}</Typography>
//           </Box>
//         )}
//       </Box>

//       <div className="cards-container">
//         {city && locations[city].map((location) => (
//           <Card key={location.id} className="location-card">
//             <CardMedia
//               component="img"
//               alt="Location Image"
//               height="140"
//               image={location.img}
//             />
//             <CardContent>
//               <Typography variant="body2" color="textSecondary">
//                 {location.description}
//               </Typography>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleKnowMoreClick}
//                 style={{ marginTop: '10px' }}
//               >
//                 Know More
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Wishlist Section */}
//       {/* <section className="wishlist-section">
//         <h2 className="heading-traveler-page">Your Wishlist</h2>
//         <div className="wishlist-cards">
//           {wishlist.length > 0 ? (
//             wishlist.map((item, index) => (
//               <div key={index} className="wishlist-card">
//                 <p>{item}</p>
//               </div>
//             ))
//           ) : (
//             <p>Your wishlist is empty. Add some items!</p>
//           )}
//         </div>
//       </section> */}
//     </div>
//   );
// };

// export default TravelerDashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MenuItem, FormControl, Select, Card, CardContent, CardMedia, Button, Typography, CircularProgress, Box } from '@mui/material';
// import axios from 'axios';
// import Navbar from './Navbar'; // Assuming you have a Navbar component
// import '../style_sheets/TravelerDashboard.css'; // Import CSS

// const locations = {
//   Mumbai: [
//     { id: 1, img: 'https://via.placeholder.com/150', description: 'Marine Drive - A popular promenade in Mumbai.' },
//     { id: 2, img: 'https://via.placeholder.com/150', description: 'Gateway of India - Historic monument and popular tourist spot.' },
//   ],
//   Pune: [
//     { id: 1, img: 'https://via.placeholder.com/150', description: 'Shaniwarwada - Historical fortification in Pune.' },
//     { id: 2, img: 'https://via.placeholder.com/150', description: 'Osho Ashram - Meditation center and spiritual retreat.' },
//   ],
//   Nashik: [
//     { id: 1, img: 'https://via.placeholder.com/150', description: 'Sula Vineyard - Famous for wine tasting and vineyard tours.' },
//     { id: 2, img: 'https://via.placeholder.com/150', description: 'Pandav Leni - Ancient Buddhist caves and sculptures.' },
//   ],
// };

// const API_KEY = 'bdffb4c737704d16b15211821241608'; // Replace with your API key

// const TravelerDashboard = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [city, setCity] = useState('');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleAddToWishlist = (item) => {
//     // Example API call to add item to wishlist
//     axios.post('/api/wishlist', { item })
//       .then(response => {
//         setWishlist([...wishlist, response.data]);
//       })
//       .catch(error => console.error('Error adding to wishlist:', error));
//   };

//   const handleCityChange = (event) => {
//     setCity(event.target.value);
//   };

//   const handleKnowMoreClick = () => {
//     navigate('/login');
//   };

//   const handleWishlistButtonClick = () => {
//     navigate('/wishlist');
//   };

//   useEffect(() => {
//     if (city) {
//       setLoading(true);
//       axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
//         .then(response => {
//           setWeather(response.data.current);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching weather data:', error);
//           setWeather(null); // Clear weather data on error
//           setLoading(false);
//         });
//     }
//   }, [city]);

//   return (
//     <div>
//       {/* Navbar Component with Wishlist Button */}
//       <Navbar>
//         <Button variant="contained" color="secondary" onClick={handleWishlistButtonClick}>
//           Wishlist
//         </Button>
//       </Navbar>

//       {/* City Selection Dropdown below Navbar */}
//       <div className="dropdown-container" style={{ marginTop: '20px' }}>
//         <FormControl fullWidth>
//           <Select
//             value={city}
//             onChange={handleCityChange}
//             displayEmpty
//             renderValue={(selected) => (selected ? selected : 'Select a City')}
//           >
//             <MenuItem value="Mumbai">Mumbai</MenuItem>
//             <MenuItem value="Pune">Pune</MenuItem>
//             <MenuItem value="Nashik">Nashik</MenuItem>
//           </Select>
//         </FormControl>
//       </div>

//       <div className="traveler-page">
//         {/* Upper Flex Section */}
//         <div className="upper-flex-section">
//           <div className="upper-flex-left">
//             <h2 className="guide-heading">Book our Guide Services</h2>
//           </div>
//           <div className="upper-flex-right">
//             <p className="travel-info">
//               Discover amazing places with our expert guides. Experience the beauty and culture of the destination with ease and comfort.
//             </p>
//             <Button variant="contained" color="primary" className="booking-button">
//               Booking
//             </Button>
//           </div>
//         </div>

//         {/* Weather Information and Location Cards */}
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
//           {loading && <CircularProgress />}
//           {weather && (
//             <Box className="weather-info" sx={{ textAlign: 'right' }}>
//               <Typography variant="h6">{city}</Typography>
//               <img src={`http:${weather.condition.icon}`} alt={weather.condition.text} style={{ width: '50px', height: '50px' }} />
//               <Typography variant="body1">Temperature: {weather.temp_c}°C</Typography>
//               <Typography variant="body1">Weather: {weather.condition.text}</Typography>
//             </Box>
//           )}
//         </Box>

//         <div className="cards-container">
//           {city && locations[city].map((location) => (
//             <Card key={location.id} className="location-card">
//               <CardMedia
//                 component="img"
//                 alt="Location Image"
//                 height="140"
//                 image={location.img}
//               />
//               <CardContent>
//                 <Typography variant="body2" color="textSecondary">
//                   {location.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleAddToWishlist(location.description)}
//                   style={{ marginTop: '10px' }}
//                 >
//                   Add to Wishlist
//                 </Button>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleKnowMoreClick}
//                   style={{ marginTop: '10px', marginLeft: '10px' }}
//                 >
//                   Know More
//                 </Button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelerDashboard;








import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem, FormControl, Select, Card, CardContent, CardMedia, Button, Typography, CircularProgress, Box } from '@mui/material';
import axios from 'axios';
import '../style_sheets/TravelerDashboard.css'; // Import CSS

const locations = {
  Mumbai: [
    { id: 1, img: 'https://via.placeholder.com/150', description: 'Marine Drive - A popular promenade in Mumbai.' },
    { id: 2, img: 'https://via.placeholder.com/150', description: 'Gateway of India - Historic monument and popular tourist spot.' },
  ],
  Pune: [
    { id: 1, img: 'https://via.placeholder.com/150', description: 'Shaniwarwada - Historical fortification in Pune.' },
    { id: 2, img: 'https://via.placeholder.com/150', description: 'Osho Ashram - Meditation center and spiritual retreat.' },
  ],
  Nashik: [
    { id: 1, img: 'https://via.placeholder.com/150', description: 'Sula Vineyard - Famous for wine tasting and vineyard tours.' },
    { id: 2, img: 'https://via.placeholder.com/150', description: 'Pandav Leni - Ancient Buddhist caves and sculptures.' },
  ],
};

const API_KEY = 'bdffb4c737704d16b15211821241608'; // Replace with your API key

const TravelerDashboard = () => {
  const [wishlist, setWishlist] = useState([]);
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleKnowMoreClick = () => {
    navigate('/login');
  };

  const handleViewWishlistClick = () => {
    navigate('/wishlist');
  };

  useEffect(() => {
    if (city) {
      setLoading(true);
      axios.get(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
        .then(response => {
          setWeather(response.data.current);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching weather data:', error);
          setWeather(null); // Clear weather data on error
          setLoading(false);
        });
    }
  }, [city]);

  return (
    <div className="traveler-page">
      {/* Wishlist Button on the Page */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
        <Button variant="contained" color="secondary" onClick={handleViewWishlistClick}>
          View Wishlist
        </Button>
      </Box>

      {/* Upper Flex Section */}
      <div className="upper-flex-section">
        <div className="upper-flex-left">
          <h2 className="guide-heading">Book our Guide Services</h2>
        </div>
        <div className="upper-flex-right">
          <p className="travel-info">
            Discover amazing places with our expert guides. Experience the beauty and culture of the destination with ease and comfort.
          </p>
        </div>
      </div>

      {/* City Selection and Location Cards */}
      <div className="dropdown-container">
        <FormControl fullWidth>
          <Select
            value={city}
            onChange={handleCityChange}
            displayEmpty
            renderValue={(selected) => (selected ? selected : 'Select a City')}
          >
            <MenuItem value="Mumbai">Mumbai</MenuItem>
            <MenuItem value="Pune">Pune</MenuItem>
            <MenuItem value="Nashik">Nashik</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
        {loading && <CircularProgress />}
        {weather && (
          <Box className="weather-info" sx={{ textAlign: 'right' }}>
            <Typography variant="h6">{city}</Typography>
            <img src={`http:${weather.condition.icon}`} alt={weather.condition.text} style={{ width: '50px', height: '50px' }} />
            <Typography variant="body1">Temperature: {weather.temp_c}°C</Typography>
            <Typography variant="body1">Weather: {weather.condition.text}</Typography>
          </Box>
        )}
      </Box>

      <div className="cards-container">
        {city && locations[city].map((location) => (
          <Card key={location.id} className="location-card">
            <CardMedia
              component="img"
              alt="Location Image"
              height="140"
              image={location.img}
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {location.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleKnowMoreClick}
                style={{ marginTop: '10px' }}
              >
                Know More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TravelerDashboard;


