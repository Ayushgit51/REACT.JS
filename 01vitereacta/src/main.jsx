
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const my = 'hkhjkhkjkhjkhjkhjkhjkhjkhjkhjkhjkhjkhj'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit google',
  my
)
createRoot(document.getElementById('root')).render(
  <>
  reactElement
  <App />
  </>
)

