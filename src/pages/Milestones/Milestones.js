import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
} from "@mui/material";
import DataTable from "../../components/common/DataTable";

// Моковые данные этапов
const mockRowsInit = [
  {
    id: 1,
    title: "Проектирование",
    description: "Разработка проектной документации",
    status: "PLANNED",
    plannedDate: "2025-11-01",
    object: "Школа №1",
  },
  {
    id: 2,
    title: "Строительство",
    description: "Основные строительные работы",
    status: "IN_PROGRESS",
    plannedDate: "2026-03-15",
    object: "Больница",
  },
  {
    id: 3,
    title: "Ввод в эксплуатацию",
    description: "Финальная стадия",
    status: "COMPLETED",
    plannedDate: "2026-09-01",
    object: "Детский сад",
  },
];

// Цвета и подписи статусов
const statusColors = {
  PLANNED: "info",
  IN_PROGRESS: "warning",
  COMPLETED: "success",
  CANCELLED: "error",
};

const statusLabels = {
  PLANNED: "Запланирован",
  IN_PROGRESS: "В работе",
  COMPLETED: "Завершён",
  CANCELLED: "Отменён",
};

// Определение колонок таблицы
const columns = [
  { field: "title", headerName: "Название", flex: 1, minWidth: 180 },
  { field: "object", headerName: "Объект", flex: 1, minWidth: 180 },
  {
    field: "status",
    headerName: "Статус",
    width: 180,
    renderCell: (params) => (
      <Chip
        label={statusLabels[params.value]}
        color={statusColors[params.value]}
        variant="outlined"
      />
    ),
  },
  { field: "plannedDate", headerName: "Плановая дата", width: 160 },
  { field: "description", headerName: "Описание", flex: 1, minWidth: 220 },
];

export default function Milestones() {
  const [rows, setRows] = React.useState(mockRowsInit);
  const [open, setOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    title: "",
    description: "",
    status: "PLANNED",
    plannedDate: "",
    object: "",
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleAdd = () => {
    setRows((prev) => [
      ...prev,
      { id: prev.length + 1, ...form },
    ]);
    setForm({
      title: "",
      description: "",
      status: "PLANNED",
      plannedDate: "",
      object: "",
    });
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Этапы реализации
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Добавить этап
        </Button>
      </Paper>

      <DataTable rows={rows} columns={columns} />

      {/* Диалог добавления этапа */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Новый этап</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <TextField
                label="Название"
                value={form.title}
                onChange={handleChange("title")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Объект"
                value={form.object}
                onChange={handleChange("object")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Статус"
                value={form.status}
                onChange={handleChange("status")}
                select
                fullWidth
              >
                <MenuItem value="PLANNED">Запланирован</MenuItem>
                <MenuItem value="IN_PROGRESS">В работе</MenuItem>
                <MenuItem value="COMPLETED">Завершён</MenuItem>
                <MenuItem value="CANCELLED">Отменён</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Плановая дата"
                type="date"
                value={form.plannedDate}
                onChange={handleChange("plannedDate")}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Описание"
                value={form.description}
                onChange={handleChange("description")}
                fullWidth
                multiline
                minRows={3}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Отмена</Button>
          <Button variant="contained" onClick={handleAdd}>
            Сохранить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
