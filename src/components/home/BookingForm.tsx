import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  InputAdornment,
  Switch,
  FormControlLabel,
  Snackbar,
  Alert
} from '@mui/material';
import {
  LocationOn as LocationIcon
} from '@mui/icons-material';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { useNavigate } from 'react-router-dom';

interface BookingFormProps {
  className?: string;
  sx?: any;
}

const BookingForm: React.FC<BookingFormProps> = ({ className, sx = {} }) => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [differentReturn, setDifferentReturn] = useState(false);
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [pickupTime, setPickupTime] = useState<Dayjs | null>(null);
  const [dropoffDate, setDropoffDate] = useState<Dayjs | null>(null);
  const [dropoffTime, setDropoffTime] = useState<Dayjs | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      pickupLocation,
      dropoffLocation: differentReturn ? dropoffLocation : pickupLocation,
      pickupDate: pickupDate ? pickupDate.format('YYYY-MM-DD') : '',
      pickupTime: pickupTime ? pickupTime.format('HH:mm') : '',
      dropoffDate: dropoffDate ? dropoffDate.format('YYYY-MM-DD') : '',
      dropoffTime: dropoffTime ? dropoffTime.format('HH:mm') : ''
    });
    navigate(`/search?${params.toString()}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          width: '100%',
          mx: 'auto',
          mt: 3,
          ...sx
        }}
        className={className}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500, color: 'text.secondary' }}>
              Pickup and Return
            </Typography>
            <TextField
              fullWidth
              placeholder="Airport, city or address"
              value={pickupLocation}
              onChange={e => setPickupLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationIcon color="action" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 3, fontSize: 18, bgcolor: '#fff' }
              }}
            />
            <FormControlLabel
              control={
                <Switch
                  checked={differentReturn}
                  onChange={e => setDifferentReturn(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography sx={{ color: '#888', fontWeight: 500, fontSize: 15 }}>
                  Different return location
                </Typography>
              }
              sx={{ mt: 1 }}
            />
            {differentReturn && (
              <TextField
                fullWidth
                placeholder="Return location"
                value={dropoffLocation}
                onChange={e => setDropoffLocation(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationIcon color="action" />
                    </InputAdornment>
                  ),
                  sx: { borderRadius: 3, fontSize: 18, bgcolor: '#fff' }
                }}
                sx={{ mt: 1 }}
              />
            )}
            <Typography variant="caption" sx={{ mt: 1, color: '#222', fontWeight: 500, cursor: 'pointer' }}>
              Apply a business rate
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500, color: 'text.secondary' }}>
                Pickup Date & Time
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                <DatePicker
                  label="Date"
                  value={pickupDate}
                  onChange={setPickupDate}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                />
                <TimePicker
                  label="Time"
                  value={pickupTime}
                  onChange={setPickupTime}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                />
              </Box>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500, color: 'text.secondary' }}>
                Return Date & Time
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1 }}>
                <DatePicker
                  label="Date"
                  value={dropoffDate}
                  onChange={setDropoffDate}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                />
                <TimePicker
                  label="Time"
                  value={dropoffTime}
                  onChange={setDropoffTime}
                  slotProps={{ textField: { fullWidth: true, required: true } }}
                />
              </Box>
            </Box>
          </Box>

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              fontWeight: 700,
              fontSize: 18,
              borderRadius: 3,
              px: 4,
              py: 1.5,
              alignSelf: 'flex-start'
            }}
          >
            See available cars
          </Button>
        </Box>
        <Snackbar open={success} autoHideDuration={4000} onClose={() => setSuccess(false)}>
          <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
            Booking created successfully!
          </Alert>
        </Snackbar>
        <Snackbar open={!!error} autoHideDuration={4000} onClose={() => setError(null)}>
          <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      </Paper>
    </LocalizationProvider>
  );
};

export default BookingForm;
