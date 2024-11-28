import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import App from './App.jsx'
import ViewProducts from './components/ViewProducts.jsx';
import AddProduct from './components/AddProduct.jsx';
import ViewCourses from './components/ViewCourses.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Link to="/">Home</Link> |
    <Link to="/products">View Products</Link> |
    <Link to="/addproduct">Add Product</Link> |
    <Link to="/courses">View Courses</Link> |
  {/* <a href="/addproduct"> Add Product with Hyperlink</a> */}
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ViewProducts />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/courses" element={<ViewCourses />} />
    </Routes>

  </BrowserRouter>,
)

function Home(){
  return (
    <h2>Home Component/Page</h2>
  )
}
