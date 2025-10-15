import React from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, MenuItem, Button, Grid, Paper } from "@mui/material";

export default function ApplicationForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { title: "", type: "", location: "", description: "" },
  });

  const submit = (data) => {
    onSubmit?.(data);
    reset();
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box component="form" onSubmit={handleSubmit(submit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Название объекта"
              fullWidth
              {...register("title", { required: true })}
              error={!!errors.title}
              helperText={errors.title ? "Обязательное поле" : ""}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Тип"
              select
              fullWidth
              sx={{ minWidth: 150 }}
              {...register("type", { required: true })}
              error={!!errors.type}
              helperText={errors.type ? "Выберите тип" : ""}
            >
              <MenuItem value="SCHOOL">Школа</MenuItem>
              <MenuItem value="HOSPITAL">Больница</MenuItem>
              <MenuItem value="KINDERGARTEN">Детский сад</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Локация (адрес/координаты)"
              fullWidth
              {...register("location", { required: true })}
              error={!!errors.location}
              helperText={errors.location ? "Обязательное поле" : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Описание"
              fullWidth
              multiline
              minRows={3}
              {...register("description")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Отправить заявку
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
