import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter as Routes, Route , RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Test from './Test.jsx'
import Layout from './Layout.jsx'
import Test1 from './Test1.jsx'
import Videotest from './Videotest.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'




const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='' element={<Test/>}/>
        <Route path='test1' element={<Test1/>}/>
        <Route path='Videotest' element={<Videotest/>}/>
        {/* <Route path='user/:Userid' element={<User/>}/> */}
      </Route>
    )
  )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
