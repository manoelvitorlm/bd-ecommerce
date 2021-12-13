import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter';

/*
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

*/
ReactDOM.render(
  <BrowserRouter>
        <MainRouter />
  </BrowserRouter>, 
  document.getElementById('root')
);
