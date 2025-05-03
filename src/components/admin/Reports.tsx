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
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';

const mockReportData = [
  { id: 1, name: 'Monthly Revenue Report', type: 'Financial', date: '2024-03-01', status: 'Available' },
  { id: 2, name: 'Car Utilization Report', type: 'Operations', date: '2024-03-01', status: 'Available' },
  { id: 3, name: 'Customer Satisfaction Report', type: 'Customer', date: '2024-03-01', status: 'Available' },
  { id: 4, name: 'Maintenance Schedule Report', type: 'Operations', date: '2024-03-01', status: 'Available' },
];

export default function Reports() {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4">
          Reports
        </Typography>
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
        >
          Generate New Report
        </Button>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Available Reports
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Report Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Date Generated</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockReportData.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.name}</TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.date}</TableCell>
                      <TableCell>{report.status}</TableCell>
                      <TableCell align="right">
                        <Button
                          size="small"
                          startIcon={<DownloadIcon />}
                          variant="outlined"
                        >
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Report Generation History
              </Typography>
              <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography color="text.secondary">
                  Report generation history chart will be displayed here
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Most Downloaded Reports
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { name: 'Monthly Revenue Report', downloads: 156 },
                  { name: 'Car Utilization Report', downloads: 98 },
                  { name: 'Customer Satisfaction Report', downloads: 87 },
                  { name: 'Maintenance Schedule Report', downloads: 65 },
                ].map((report, index) => (
                  <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography>{report.name}</Typography>
                    <Typography color="primary">{report.downloads} downloads</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
} 