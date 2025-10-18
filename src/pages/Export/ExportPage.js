import React from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

export default function ExportPage() {
  const [params, setParams] = React.useState({
    format: "CSV",
    from: "",
    to: "",
    dataset: "objects",
  });
  const [snack, setSnack] = React.useState({ open: false, msg: "" });

  const handleChange = (field) => (e) =>
    setParams((prev) => ({ ...prev, [field]: e.target.value }));

  const handleExport = () => {
    // Здесь позже будет вызов API для генерации файла
    console.log("Экспортируем с параметрами:", params);
    setSnack({ open: true, msg: `Экспорт выполнен (${params.format})` });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Экспорт данных
      </Typography>

      <Paper sx={{ p: 3, maxWidth: 700 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Формат"
              value={params.format}
              onChange={handleChange("format")}
              select
              fullWidth
              sx={{ minWidth: 200 }}
            >
              <MenuItem value="CSV">CSV</MenuItem>
              <MenuItem value="XLSX">Excel (XLSX)</MenuItem>
              <MenuItem value="PDF">PDF</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Набор данных"
              value={params.dataset}
              onChange={handleChange("dataset")}
              select
              fullWidth
              sx={{ minWidth: 200 }}
            >
              <MenuItem value="objects">Объекты</MenuItem>
              <MenuItem value="deviations">Отклонения</MenuItem>
              <MenuItem value="milestones">Этапы</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Дата с"
              type="date"
              value={params.from}
              onChange={handleChange("from")}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              label="Дата по"
              type="date"
              value={params.to}
              onChange={handleChange("to")}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleExport}>
              Скачать
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ open: false, msg: "" })}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          {snack.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
}
