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

// Моковые данные отклонений
const mockRows = [
  {
    id: 1,
    object: "Школа №1",
    deviationDays: 0,
    plannedValue: 2025,
    actualValue: 2025,
    calculatedAt: "2025-10-10 12:10",
    status: "ON_TIME",
    comment: "Сроки в норме",
  },
  {
    id: 2,
    object: "Больница",
    deviationDays: 12,
    plannedValue: 2025,
    actualValue: 2025,
    calculatedAt: "2025-10-12 09:30",
    status: "DELAYED",
    comment: "Просрочка по подрядчику",
  },
  {
    id: 3,
    object: "Детский сад",
    deviationDays: 35,
    plannedValue: 2025,
    actualValue: 2026,
    calculatedAt: "2025-10-14 15:45",
    status: "CRITICAL_DELAY",
    comment: "Срыв графика, требуется корректировка плана",
  },
];

// Цвета и подписи статусов
const statusColors = {
  ON_TIME: "success",
  DELAYED: "warning",
  CRITICAL_DELAY: "error",
};

const statusLabels = {
  ON_TIME: "В срок",
  DELAYED: "Задержка",
  CRITICAL_DELAY: "Критическая задержка",
};

// Определение колонок таблицы
const columns = [
  { field: "object", headerName: "Объект", flex: 1, minWidth: 200 },
  {
    field: "status",
    headerName: "Статус",
    width: 200,
    renderCell: (params) => (
      <Chip
        label={statusLabels[params.value]}
        color={statusColors[params.value]}
        variant="outlined"
      />
    ),
  },
  { field: "deviationDays", headerName: "Отклонение (дни)", width: 160, type: "number" },
  { field: "plannedValue", headerName: "Плановое", width: 120, type: "number" },
  { field: "actualValue", headerName: "Фактическое", width: 120, type: "number" },
  { field: "calculatedAt", headerName: "Дата вычисления", width: 190 },
  { field: "comment", headerName: "Комментарий", flex: 1, minWidth: 220 },
];

export default function Deviations() {
  const [filters, setFilters] = React.useState({
    q: "",
    status: "",
    minDays: "",
    maxDays: "",
  });

  const handleChange = (field) => (e) =>
    setFilters((prev) => ({ ...prev, [field]: e.target.value }));

  // Фильтрация по поиску, статусу и диапазону дней
  const filteredRows = mockRows.filter((r) => {
    const byQ = filters.q
      ? r.object.toLowerCase().includes(filters.q.toLowerCase()) ||
        r.comment.toLowerCase().includes(filters.q.toLowerCase())
      : true;
    const byStatus = filters.status ? r.status === filters.status : true;
    const byMin = filters.minDays !== "" ? r.deviationDays >= Number(filters.minDays) : true;
    const byMax = filters.maxDays !== "" ? r.deviationDays <= Number(filters.maxDays) : true;
    return byQ && byStatus && byMin && byMax;
  });

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Анализ отклонений
      </Typography>

      {/* Фильтры */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              label="Поиск"
              value={filters.q}
              onChange={handleChange("q")}
              fullWidth
              placeholder="Объект или комментарий"
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <TextField
              label="Статус"
              value={filters.status}
              onChange={handleChange("status")}
              select
              fullWidth
              sx={{ minWidth: 220 }}
            >
              <MenuItem value="">Все</MenuItem>
              <MenuItem value="ON_TIME">В срок</MenuItem>
              <MenuItem value="DELAYED">Задержка</MenuItem>
              <MenuItem value="CRITICAL_DELAY">Критическая задержка</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              label="Мин. дни"
              type="number"
              value={filters.minDays}
              onChange={handleChange("minDays")}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <TextField
              label="Макс. дни"
              type="number"
              value={filters.maxDays}
              onChange={handleChange("maxDays")}
              fullWidth
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Таблица */}
      <DataTable rows={filteredRows} columns={columns} />
    </Box>
  );
}
