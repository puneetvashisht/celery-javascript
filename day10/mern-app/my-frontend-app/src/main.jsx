
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ViewEmployees from './components/ViewEmployees.jsx';
import AddEmployee from './components/AddEmployee.jsx';
import UpdateEmployee from './components/UpdateEmployee.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="employees" element={<ViewEmployees />} />
        <Route path="addemployee" element={<AddEmployee />} />
        <Route path="updateemployee/:empId" element={<UpdateEmployee   />} />
      </Route>
  </Routes>
</BrowserRouter>
,
)

function Home() {
  return <h1>Home Page</h1>
}

function Settings() {
  return <h1>Settings Page</h1>
}
