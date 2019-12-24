import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';

const element = <h1 className="element">Подключили React</h1>

ReactDOM.render(
    element,
    document.getElementById('root'),
);