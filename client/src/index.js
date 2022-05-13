
import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { store } from './redux/store/store';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
// const root = createRoot(container);
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Provider store={store}>
         <App />
       </Provider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// root.render(
  
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>

// );
