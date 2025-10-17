import { Typography, Box, Grid, Paper } from "@mui/material";
import MapView from "../../components/map/MapView";
import DistrictsBarChart from "../../components/charts/DistrictsBarChart";
import MonthlyTrendChart from "../../components/charts/MonthlyTrendChart";
import ObjectsTypesPieChart from "../../components/charts/ObjectsTypesPieChart";

export default function Dashboard() {
  const demoMarkers = [
    { position: [53.9, 27.55], title: "Школа №1" },
    { position: [53.91, 27.57], title: "Больница" },
    { position: [53.89, 27.56], title: "Детский сад №15" },
    { position: [53.92, 27.58], title: "Поликлиника №3" },
    { position: [53.895, 27.565], title: "Спортивный комплекс" },
  ];

  // Данные для столбчатой диаграммы
  const districtsData = [
    { name: "Центральный", schools: 15, hospitals: 8, kindergartens: 12 },
    { name: "Советский", schools: 22, hospitals: 12, kindergartens: 18 },
    { name: "Первомайский", schools: 18, hospitals: 6, kindergartens: 15 },
    { name: "Партизанский", schools: 25, hospitals: 10, kindergartens: 20 },
    { name: "Заводской", schools: 20, hospitals: 9, kindergartens: 16 },
    { name: "Ленинский", schools: 19, hospitals: 7, kindergartens: 14 },
    { name: "Октябрьский", schools: 16, hospitals: 5, kindergartens: 11 },
    { name: "Московский", schools: 21, hospitals: 8, kindergartens: 17 },
    { name: "Фрунзенский", schools: 17, hospitals: 6, kindergartens: 13 }
  ];

  // Данные для линейного графика
  const monthlyData = [
    { month: "Янв", schools: 2, hospitals: 0, kindergartens: 1 },
    { month: "Фев", schools: 1, hospitals: 1, kindergartens: 2 },
    { month: "Мар", schools: 3, hospitals: 0, kindergartens: 2 },
    { month: "Апр", schools: 2, hospitals: 1, kindergartens: 1 },
    { month: "Май", schools: 1, hospitals: 0, kindergartens: 3 },
    { month: "Июн", schools: 4, hospitals: 1, kindergartens: 2 },
    { month: "Июл", schools: 2, hospitals: 0, kindergartens: 1 },
    { month: "Авг", schools: 5, hospitals: 1, kindergartens: 4 },
    { month: "Сен", schools: 3, hospitals: 2, kindergartens: 2 },
    { month: "Окт", schools: 2, hospitals: 0, kindergartens: 1 },
    { month: "Ноя", schools: 1, hospitals: 1, kindergartens: 2 },
    { month: "Дек", schools: 2, hospitals: 0, kindergartens: 1 }
  ];

  // Данные для круговой диаграммы
  const pieData = [
    { name: "Школы", value: 173, color: "#8884d8" },
    { name: "Больницы", value: 65, color: "#82ca9d" },
    { name: "Детские сады", value: 135, color: "#ffc658" },
    { name: "Поликлиники", value: 89, color: "#ff7c7c" },
    { name: "Спортивные объекты", value: 45, color: "#8dd1e1" }
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
        Мониторинг социально-значимых объектов г. Минска
      </Typography>

      <Grid container spacing={3}>
        {/* Карта - занимает верхнюю часть */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3, width: '500px' }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Карта объектов
            </Typography>
            <MapView markers={demoMarkers} />
          </Paper>
        </Grid>

        {/* KPI карточки */}
        <Grid item xs={12} lg={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ 
                p: 3, 
                textAlign: 'center', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                color: 'white' 
              }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>507</Typography>
                <Typography variant="body1">Всего объектов</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h5" color="success.main" sx={{ fontWeight: 'bold' }}>478</Typography>
                <Typography variant="body2">Активных</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h5" color="warning.main" sx={{ fontWeight: 'bold' }}>29</Typography>
                <Typography variant="body2">На ремонте</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="subtitle1" gutterBottom>Последние события</Typography>
                <Typography variant="body2" color="text.secondary">
                  Больница №3 → На ремонте
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Школа №45 → Активна
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Спортивный комплекс → Открыт
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Столбчатая диаграмма */}
        <Grid item xs={12} lg={6}>
          <DistrictsBarChart data={districtsData} />
        </Grid>

        {/* Круговая диаграмма */}
        <Grid item xs={12} lg={6}>
          <ObjectsTypesPieChart data={pieData} />
        </Grid>

        {/* Линейный график */}
        <Grid item xs={12}>
          <MonthlyTrendChart data={monthlyData} />
        </Grid>
      </Grid>
    </Box>
  );
}
