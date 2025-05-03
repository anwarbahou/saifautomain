import {
  Box,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  DirectionsCar as CarIcon,
  People as PeopleIcon,
  ShowChart as ChartIcon,
} from '@mui/icons-material';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Box
            sx={{
              backgroundColor: `${color}15`,
              borderRadius: '50%',
              p: 1,
              mr: 2,
            }}
          >
            {icon}
          </Box>
          <Typography variant="h6" color="text.secondary">
            {title}
          </Typography>
        </Box>
        <Typography variant="h4">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Analytics() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Analytics Overview
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 3, mb: 3 }}>
        <StatCard
          title="Total Revenue"
          value="$45,231"
          icon={<TrendingUpIcon sx={{ color: '#2196f3' }} />}
          color="#2196f3"
        />
        <StatCard
          title="Active Cars"
          value="24"
          icon={<CarIcon sx={{ color: '#4caf50' }} />}
          color="#4caf50"
        />
        <StatCard
          title="Total Customers"
          value="1,234"
          icon={<PeopleIcon sx={{ color: '#ff9800' }} />}
          color="#ff9800"
        />
        <StatCard
          title="Growth Rate"
          value="+15.3%"
          icon={<ChartIcon sx={{ color: '#f44336' }} />}
          color="#f44336"
        />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Revenue Trends
            </Typography>
            <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography color="text.secondary">
                Revenue chart will be displayed here
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Top Performing Cars
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { name: 'Toyota Camry', bookings: 156 },
                { name: 'Honda Civic', bookings: 98 },
                { name: 'Tesla Model 3', bookings: 87 },
                { name: 'BMW 3 Series', bookings: 65 },
              ].map((car, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>{car.name}</Typography>
                  <Typography color="primary">{car.bookings} bookings</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
} 