import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

const el = React.createElement (
    'h1',
    {className:'firstname'},
    'Hello React again and again'
)

ReactDom.render(
    el,
    document.querySelector('#app')
)