import { Paper, Typography } from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export default function DistrictsBarChart({ data, title = "Распределение объектов по районам" }) {
  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            angle={-45}
            textAnchor="end"
            height={80}
            fontSize={12}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="schools" fill="#8884d8" name="Школы" />
          <Bar dataKey="hospitals" fill="#82ca9d" name="Больницы" />
          <Bar dataKey="kindergartens" fill="#ffc658" name="Детские сады" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
}
