import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';
import { useState } from 'react';

// Mock data for cars
const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    type: 'Sedan',
    status: 'Available',
    price: '$50/day',
    location: 'New York',
  },
  {
    id: 2,
    name: 'Honda CR-V',
    type: 'SUV',
    status: 'Rented',
    price: '$65/day',
    location: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    type: 'Electric',
    status: 'Available',
    price: '$80/day',
    location: 'San Francisco',
  },
  {
    id: 4,
    name: 'BMW X5',
    type: 'SUV',
    status: 'Maintenance',
    price: '$90/day',
    location: 'Chicago',
  },
];

const statusColors = {
  Available: 'success',
  Rented: 'warning',
  Maintenance: 'error',
} as const;

export default function Cars() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Cars Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Add New Car
        </Button>
      </Box>

      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Location</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cars.map((car) => (
                  <TableRow key={car.id}>
                    <TableCell>{car.name}</TableCell>
                    <TableCell>{car.type}</TableCell>
                    <TableCell>
                      <Chip
                        label={car.status}
                        color={statusColors[car.status as keyof typeof statusColors]}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{car.price}</TableCell>
                    <TableCell>{car.location}</TableCell>
                    <TableCell align="right">
                      <IconButton
                        size="small"
                        onClick={() => {/* Edit logic */}}
                        sx={{ mr: 1 }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => {/* Delete logic */}}
                        color="error"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-car-modal"
        aria-describedby="add-car-form"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}>
          <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
            Add New Car
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Car Name"
              fullWidth
              required
            />
            <FormControl fullWidth required>
              <InputLabel>Type</InputLabel>
              <Select label="Type">
                <MenuItem value="sedan">Sedan</MenuItem>
                <MenuItem value="suv">SUV</MenuItem>
                <MenuItem value="sports">Sports</MenuItem>
                <MenuItem value="luxury">Luxury</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Price per Day"
              type="number"
              fullWidth
              required
            />
            <TextField
              label="Location"
              fullWidth
              required
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
              <Button onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained">
                Add Car
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
} 