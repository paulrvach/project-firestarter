import './style.css';
import React from 'react';
import App from './App.jsx'; // Assuming you have an App component defined in App.jsx

import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);
