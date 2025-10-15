import { Typography, Box, Grid, Paper } from "@mui/material";
import MapView from "../../components/map/MapView";

export default function Dashboard() {
  const demoMarkers = [
    { position: [53.9, 27.55], title: "Школа №1" },
    { position: [53.91, 27.57], title: "Больница" },
  ];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Дашборд
      </Typography>

      <Grid container spacing={2}>
        <Grid size={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Карта объектов
            </Typography>
            <MapView markers={demoMarkers} />
          </Paper>
        </Grid>
        <Grid size={4}>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="subtitle1">KPI</Typography>
            <Typography variant="body2">Объектов активных: 2</Typography>
            <Typography variant="body2">На ремонте: 1</Typography>
          </Paper>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Последние события</Typography>
            <Typography variant="body2">
              Изменение статуса: Больница → На ремонте
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}