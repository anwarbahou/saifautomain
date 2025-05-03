import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';

export default function Settings() {
  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Settings
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              General Settings
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Company Name"
                defaultValue="Saif Auto"
                fullWidth
              />
              <TextField
                label="Email Address"
                defaultValue="contact@saifauto.com"
                fullWidth
              />
              <TextField
                label="Phone Number"
                defaultValue="+1 234 567 890"
                fullWidth
              />
              <TextField
                label="Address"
                defaultValue="123 Main Street, City, Country"
                fullWidth
                multiline
                rows={2}
              />
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Notification Settings
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Email Notifications"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="SMS Notifications"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Booking Confirmations"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Maintenance Alerts"
              />
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Booking Settings
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Default Booking Duration</InputLabel>
                <Select
                  defaultValue="1"
                  label="Default Booking Duration"
                >
                  <MenuItem value="1">1 Day</MenuItem>
                  <MenuItem value="3">3 Days</MenuItem>
                  <MenuItem value="7">1 Week</MenuItem>
                  <MenuItem value="14">2 Weeks</MenuItem>
                  <MenuItem value="30">1 Month</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Minimum Booking Notice (hours)"
                type="number"
                defaultValue="24"
                fullWidth
              />
              <TextField
                label="Maximum Advance Booking (days)"
                type="number"
                defaultValue="30"
                fullWidth
              />
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Payment Settings
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControl fullWidth>
                <InputLabel>Default Currency</InputLabel>
                <Select
                  defaultValue="USD"
                  label="Default Currency"
                >
                  <MenuItem value="USD">USD ($)</MenuItem>
                  <MenuItem value="EUR">EUR (€)</MenuItem>
                  <MenuItem value="GBP">GBP (£)</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Security Deposit Amount"
                type="number"
                defaultValue="500"
                fullWidth
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Enable Online Payments"
              />
            </Box>
          </CardContent>
        </Card>

        <Box sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="outlined">
              Reset to Default
            </Button>
            <Button variant="contained">
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
} 