import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createHashRouter} from 'react-router-dom';
import {VFSMutable} from './screens/VFSMutable.tsx';
import {Pdf} from './screens/Pdf.tsx';
import {Image} from './screens/Image.tsx';
import './index.css';

const router = createHashRouter([
  { path: '/vfs-mutable', element: <VFSMutable /> },
  { path: '/pdf', element: <Pdf/> },
  { path: '/image', element: <Image/>}
],
{
  basename: '/vaultdoc-poc-react'
}
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
