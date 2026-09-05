// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard'; // ✅ Admin Dashboard
import PrivateRoute from './components/PrivateRoute'; // 👈 Add this
import AddProperty from "./pages/AddProperty";
import EditProperty from './pages/EditProperty';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/edit-property/:id" element={<EditProperty />} />
        <Route path="/admin/add-property" element={<AddProperty />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}

export default App;
