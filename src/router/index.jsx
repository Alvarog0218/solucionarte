import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Inicio from '../pages/Inicio';
import Nosotros from '../pages/Nosotros';
import Servicios from '../pages/Servicios';
import Portafolio from '../pages/Portafolio';
import Contacto from '../pages/Contacto';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: 'nosotros',
        element: <Nosotros />,
      },
      {
        path: 'servicios',
        element: <Servicios />,
      },
      {
        path: 'portafolio',
        element: <Portafolio />,
      },
      {
        path: 'contacto',
        element: <Contacto />,
      },
    ],
  },
]);
