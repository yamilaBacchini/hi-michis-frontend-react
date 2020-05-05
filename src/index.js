import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import MenuToolBar from "./components/shared/MenuToolBar";

ReactDOM.render(<MenuToolBar />, document.getElementById('menuToolBar'));

ReactDOM.render(<Home />, document.getElementById('root'));