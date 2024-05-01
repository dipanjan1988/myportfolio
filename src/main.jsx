import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='experience' element={<Experience />} />
//       <Route path='technology' element={<Tech />} />
//       <Route path='work' element={<Works />} />
//       <Route path='feedbacks' element={<Feedbacks />} />
//       <Route path='contact' element={<Contact />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
    <Routes>
    <Route path='/*' element={<Layout />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
