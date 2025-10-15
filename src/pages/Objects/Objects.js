import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Paper,
  Chip,
} from "@mui/material";
import DataTable from "../../components/common/DataTable";

const mockRows = [
  {
    id: 1,
    name: "Школа №1",
    type: "SCHOOL",
    status: "ACTIVE",
    capacity: 800,
    location: "Минск, ул. Примерная, 1",
  },
  {
    id: 2,
    name: "Больница",
    type: "HOSPITAL",
    status: "MAINTENANCE",
    capacity: 300,
    location: "Минск, пр-т Победителей, 10",
  },
  {
    id: 3,
    name: "Детский сад",
    type: "KINDERGARTEN",
    status: "ACTIVE",
    capacity: 120,
    location: "Минск, ул. Солнечная, 5",
  },
];

const statusColors = {
  ACTIVE: "success",
  MAINTENANCE: "warning",
  CLOSED: "error",
};

const columns = [
  { field: "name", headerName: "Название", flex: 1 },
  { field: "type", headerName: "Тип", width: 160 },
  {
    field: "status",
    headerName: "Статус",
    width: 180,
    renderCell: (params) => (
      <Chip
        label={
          params.value === "ACTIVE"
            ? "Активен"
            : params.value === "MAINTENANCE"
            ? "На ремонте"
            : "Закрыт"
        }
        color={statusColors[params.value]}
        variant="outlined"
      />
    ),
  },
  { field: "capacity", headerName: "Мощность", width: 140, type: "number" },
  { field: "location", headerName: "Локация", flex: 1 },
];

export default function Objects() {
  const [filters, setFilters] = React.useState({ q: "", type: "", status: "" });

  const filteredRows = mockRows.filter((r) => {
    const byQ = filters.q
      ? r.name.toLowerCase().includes(filters.q.toLowerCase()) ||
        r.location.toLowerCase().includes(filters.q.toLowerCase())
      : true;
    const byType = filters.type ? r.type === filters.type : true;
    const byStatus = filters.status ? r.status === filters.status : true;
    return byQ && byType && byStatus;
  });

  const handleChange = (field) => (e) =>
    setFilters((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Объекты генплана
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Поиск"
              value={filters.q}
              onChange={handleChange("q")}
              fullWidth
              placeholder="Название или адрес"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Тип"
              value={filters.type}
              onChange={handleChange("type")}
              select
              fullWidth
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="">Все</MenuItem>
              <MenuItem value="SCHOOL">Школа</MenuItem>
              <MenuItem value="HOSPITAL">Больница</MenuItem>
              <MenuItem value="KINDERGARTEN">Детский сад</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Статус"
              value={filters.status}
              onChange={handleChange("status")}
              select
              fullWidth
              sx={{ minWidth: 150 }}
            >
              <MenuItem value="">Все</MenuItem>
              <MenuItem value="ACTIVE">Активен</MenuItem>
              <MenuItem value="MAINTENANCE">На ремонте</MenuItem>
              <MenuItem value="CLOSED">Закрыт</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Paper>

      <DataTable rows={filteredRows} columns={columns} />
    </Box>
  );
}
