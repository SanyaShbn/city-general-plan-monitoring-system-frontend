import React from 'react';
import { Typography, Box, Snackbar, Alert } from '@mui/material';
import ApplicationForm from '../../components/forms/ApplicationForm';

export default function Applications() {
  const [snack, setSnack] = React.useState({ open: false, msg: '' });

  const handleSubmit = (data) => {
    // Здесь позже добавлю вызов API
    console.log('Заявка отправлена:', data);
    setSnack({ open: true, msg: 'Заявка отправлена' });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Заявки застройщиков</Typography>
      <Typography gutterBottom>Подача заявки на включение объекта в план.</Typography>

      <ApplicationForm onSubmit={handleSubmit} />

      <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({ open: false, msg: '' })}>
        <Alert severity="success" sx={{ width: '100%' }}>{snack.msg}</Alert>
      </Snackbar>
    </Box>
  );
}
