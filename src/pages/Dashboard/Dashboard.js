import { Typography, Box } from '@mui/material';
import MapView from '../../components/map/MapView';

export default function Dashboard() {
  const demoMarkers = [
    { position: [53.9, 27.55], title: 'Школа №1' },
    { position: [53.91, 27.57], title: 'Больница' },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Дашборд</Typography>
      <Typography gutterBottom>Карта и сводные KPI.</Typography>
      <MapView markers={demoMarkers} />
    </Box>
  );
}
