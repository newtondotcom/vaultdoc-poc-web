import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import {FileExplorer} from './screens/FileExplorer.tsx';
import {VFSMutable} from './screens/VFSMutable.tsx';
import {Pdf} from './screens/Pdf.tsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/file-explorer', element: <FileExplorer /> },
  { path: '/vfs-mutable', element: <VFSMutable /> },
  { path: '/pdf', element: <Pdf/> },
]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
