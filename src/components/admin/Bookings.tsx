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
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

// Mock data for bookings
const bookings = [
  {
    id: 1,
    customer: 'John Doe',
    car: 'Toyota Camry',
    startDate: '2024-03-20',
    endDate: '2024-03-25',
    status: 'Active',
    totalPrice: '$250',
  },
  {
    id: 2,
    customer: 'Jane Smith',
    car: 'Honda CR-V',
    startDate: '2024-03-18',
    endDate: '2024-03-22',
    status: 'Completed',
    totalPrice: '$260',
  },
  {
    id: 3,
    customer: 'Mike Johnson',
    car: 'Tesla Model 3',
    startDate: '2024-03-25',
    endDate: '2024-03-30',
    status: 'Pending',
    totalPrice: '$400',
  },
  {
    id: 4,
    customer: 'Sarah Wilson',
    car: 'BMW X5',
    startDate: '2024-03-15',
    endDate: '2024-03-20',
    status: 'Cancelled',
    totalPrice: '$450',
  },
];

const statusColors = {
  Active: 'success',
  Completed: 'info',
  Pending: 'warning',
  Cancelled: 'error',
} as const;

export default function Bookings() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Bookings Management
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {/* Add booking logic */}}
        >
          New Booking
        </Button>
      </Box>

      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Car</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Total Price</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.customer}</TableCell>
                    <TableCell>{booking.car}</TableCell>
                    <TableCell>{booking.startDate}</TableCell>
                    <TableCell>{booking.endDate}</TableCell>
                    <TableCell>
                      <Chip
                        label={booking.status}
                        color={statusColors[booking.status as keyof typeof statusColors]}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{booking.totalPrice}</TableCell>
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
    </Box>
  );
} 