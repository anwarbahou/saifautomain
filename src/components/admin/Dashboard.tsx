import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Divider,
} from '@mui/material';
import {
  DirectionsCar as CarIcon,
  BookOnline as BookingIcon,
  People as CustomerIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const StatCard = ({ title, value, icon, color }: { title: string; value: string; icon: React.ReactNode; color: string }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{ 
          backgroundColor: `${color}15`, 
          borderRadius: '50%', 
          p: 1,
          mr: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </Box>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
    </CardContent>
  </Card>
);

const RecentActivity = () => (
  <Card>
    <CardHeader title="Recent Activity" />
    <Divider />
    <CardContent>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {[1, 2, 3, 4, 5].map((item) => (
          <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ 
              backgroundColor: 'primary.main', 
              borderRadius: '50%', 
              width: 8, 
              height: 8 
            }} />
            <Typography>
              New booking #1234 was created
            </Typography>
          </Box>
        ))}
      </Box>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard Overview
      </Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
        <Box>
          <StatCard
            title="Total Cars"
            value="24"
            icon={<CarIcon sx={{ color: '#2196f3' }} />}
            color="#2196f3"
          />
        </Box>
        <Box>
          <StatCard
            title="Active Bookings"
            value="12"
            icon={<BookingIcon sx={{ color: '#4caf50' }} />}
            color="#4caf50"
          />
        </Box>
        <Box>
          <StatCard
            title="Total Customers"
            value="156"
            icon={<CustomerIcon sx={{ color: '#ff9800' }} />}
            color="#ff9800"
          />
        </Box>
        <Box>
          <StatCard
            title="Revenue"
            value="$12,450"
            icon={<TrendingUpIcon sx={{ color: '#f44336' }} />}
            color="#f44336"
          />
        </Box>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, mt: 3 }}>
        <Box>
          <Card>
            <CardHeader 
              title="Revenue Overview" 
              action={
                <IconButton>
                  <TrendingUpIcon />
                </IconButton>
              }
            />
            <Divider />
            <CardContent>
              <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary">
                  Chart will be displayed here
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Box>
          <RecentActivity />
        </Box>
      </Box>
    </Box>
  );
} 