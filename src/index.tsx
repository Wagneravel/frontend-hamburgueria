import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { DashBoardProvider } from './contexts/DashBoardContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
         <UserProvider>
            <DashBoardProvider>
                <App />
            </DashBoardProvider>
         </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
