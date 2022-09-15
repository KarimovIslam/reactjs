import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cards from './cards.jsx';
import Fruit from './fruit.jsx'; 
import './fruitstyle.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fruit/>
  </React.StrictMode>
);

