import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { carService, Car } from '../../services/carService';
import CarCard from './CarCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import HeroSection from './HeroSection';
import Navbar from '../layout/Navbar';

const carTypes = ['All', 'Sedan', 'SUV', 'Luxury', 'Electric', 'Truck', 'Sports'];
const transmissions = ['All', 'Automatic', 'Manual'];
const fuels = ['All', 'Gasoline', 'Diesel', 'Electric', 'Hybrid'];
const seatOptions = [2, 4, 5, 6, 7, 8];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchPage: React.FC = () => {
  const query = useQuery();
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [type, setType] = useState(query.get('type') || 'All');
  const [transmission, setTransmission] = useState('All');
  const [fuel, setFuel] = useState('All');
  const [seats, setSeats] = useState<number | 'All'>('All');
  const [price, setPrice] = useState<number[]>([0, 200]);
  const [sort, setSort] = useState('price_asc');

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      setError(null);
      try {
        let data = await carService.getAvailableCars();
        if (type !== 'All') data = data.filter(car => car.type === type);
        if (transmission !== 'All') data = data.filter(car => car.transmission === transmission);
        if (fuel !== 'All') data = data.filter(car => car.fuel_type === fuel);
        if (seats !== 'All') data = data.filter(car => car.seats === seats);
        data = data.filter(car => car.price_per_day >= price[0] && car.price_per_day <= price[1]);
        if (sort === 'price_asc') data = data.sort((a, b) => a.price_per_day - b.price_per_day);
        if (sort === 'price_desc') data = data.sort((a, b) => b.price_per_day - a.price_per_day);
        if (sort === 'year_desc') data = data.sort((a, b) => b.year - a.year);
        setCars(data);
      } catch (err) {
        setError('Failed to load cars.');
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, [type, transmission, fuel, seats, price, sort]);

  const minPrice = 0;
  const maxPrice = 200;

  return (
    <>
      <Navbar />
      <HeroSection />
      <Box sx={{ width: '100%', maxWidth: 1300, mx: 'auto', mt: 4, px: { xs: 1, sm: 2, md: 3 }, pb: 6 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            mb: 4,
            alignItems: { md: 'flex-end' },
            justifyContent: 'center',
            background: '#fff',
            borderRadius: 3,
            boxShadow: 2,
            p: 3
          }}
        >
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel>Type</InputLabel>
            <Select value={type} label="Type" onChange={e => setType(e.target.value)}>
              {carTypes.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel>Transmission</InputLabel>
            <Select value={transmission} label="Transmission" onChange={e => setTransmission(e.target.value)}>
              {transmissions.map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 140 }}>
            <InputLabel>Fuel</InputLabel>
            <Select value={fuel} label="Fuel" onChange={e => setFuel(e.target.value)}>
              {fuels.map(f => <MenuItem key={f} value={f}>{f}</MenuItem>)}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel>Seats</InputLabel>
            <Select
              value={seats}
              label="Seats"
              onChange={e => setSeats(e.target.value === 'All' ? 'All' : Number(e.target.value))}
            >
              <MenuItem value="All">All</MenuItem>
              {seatOptions.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
            </Select>
          </FormControl>
          <Box sx={{ minWidth: 220, px: 2 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>Price per day ($)</Typography>
            <Slider
              value={price}
              onChange={(_, v) => setPrice(v as number[])}
              valueLabelDisplay="auto"
              min={minPrice}
              max={maxPrice}
              step={1}
              sx={{ mt: 1 }}
            />
          </Box>
          <FormControl sx={{ minWidth: 160 }}>
            <InputLabel>Sort by</InputLabel>
            <Select value={sort} label="Sort by" onChange={e => setSort(e.target.value)}>
              <MenuItem value="price_asc">Price: Low to High</MenuItem>
              <MenuItem value="price_desc">Price: High to Low</MenuItem>
              <MenuItem value="year_desc">Newest</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {loading ? (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" sx={{ textAlign: 'center', mt: 4 }}>{error}</Typography>
        ) : cars.length === 0 ? (
          <Typography sx={{ textAlign: 'center', mt: 4, color: 'text.secondary' }}>
            No cars found matching your criteria.
          </Typography>
        ) : (
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mt: 1, justifyContent: 'center' }}>
            {cars.map(car => (
              <Grid item key={car.id} xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
                <Box sx={{ width: '100%', display: 'flex' }}>
                  <CarCard car={car} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default SearchPage;
