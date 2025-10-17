import { Paper, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function MonthlyTrendChart({ 
  data, 
  title = "Динамика ввода в эксплуатацию новых объектов (2024 год)" 
}) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="schools" 
            stroke="#8884d8" 
            strokeWidth={3}
            name="Школы"
          />
          <Line 
            type="monotone" 
            dataKey="hospitals" 
            stroke="#82ca9d" 
            strokeWidth={3}
            name="Больницы"
          />
          <Line 
            type="monotone" 
            dataKey="kindergartens" 
            stroke="#ffc658" 
            strokeWidth={3}
            name="Детские сады"
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
