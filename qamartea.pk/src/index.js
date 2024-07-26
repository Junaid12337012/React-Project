import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import AboutPage from './Components/About/About';
import Dashboard from './Components/Main/Dashboard';
import MainPage from './Components/Mainpage';
import Services from './Components/Services/Services';
import Layout from './Layout';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<Layout/>}>
          <Route path='' element={<Dashboard/>} />
          <Route path='Services' element={<Services/>}   />
          <Route path='About' element={<AboutPage/>} />
          <Route path='Contact' element={<MainPage/>} />
      </Route>
    )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
