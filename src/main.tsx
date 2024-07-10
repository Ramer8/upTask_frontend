import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   {/* <h1 className='text-6xl text-blue-600 font-bold'>Hello Peopple</h1> */}
   <Router/>
  </React.StrictMode>,
)
