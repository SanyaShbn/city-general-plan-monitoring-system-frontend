import { Paper, Typography, Box, Grid } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

export default function ObjectsTypesPieChart({ 
  data, 
  title = "Структура объектов по типам" 
}) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      
      <Grid container spacing={3}>
        {/* Диаграмма */}
        <Grid item xs={12} md={6}>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [value, 'объектов']} />
            </PieChart>
          </ResponsiveContainer>
        </Grid>

        {/* Статистика */}
        <Grid item xs={12} md={6}>
          <Box sx={{ pt: 2 }}>
            {data.map((item, index) => (
              <Box 
                key={index} 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2,
                  p: 1,
                  borderRadius: 1,
                  bgcolor: 'grey.50'
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    bgcolor: item.color,
                    borderRadius: 1,
                    mr: 2
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" fontWeight="medium">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.value} объектов ({Math.round(item.value / total * 100)}%)
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
