import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

const el = React.createElement (
    'h1',
    {className: 'red'},
    'Hello React same new'
)

ReactDom.render (
    el,
    document.querySelector('#app')
)