import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import Objects from './pages/Objects/Objects';
import Deviations from './pages/Deviations/Deviations';
import ExportPage from './pages/Export/ExportPage';
import Milestones from './pages/Milestones/Milestones';
import Applications from './pages/Applications/Applications';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/objects', element: <Objects /> },
      { path: '/deviations', element: <Deviations /> },
      { path: '/export', element: <ExportPage /> },
      { path: '/milestones', element: <Milestones /> },
      { path: '/applications', element: <Applications /> },
    ],
  },
]);

export default router;
