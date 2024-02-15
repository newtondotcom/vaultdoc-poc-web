import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {VFSMutable} from './screens/VFSMutable.tsx';
import {Pdf} from './screens/Pdf.tsx';
import {Image} from './screens/Image.tsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <VFSMutable /> },
  { path: '/pdf', element: <Pdf/> },
  { path: '/image', element: <Image/>}
]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
