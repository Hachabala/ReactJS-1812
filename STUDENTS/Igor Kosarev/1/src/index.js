import React from 'react'
import ReactDom from 'react-dom'
import './styles/style.css'

const el = React.createElement(
  'h1', { className: 'h1' },
  'Welcome to React world!'
)

ReactDom.render(
  el,
  document.querySelector('#app')
)