<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ResetPassword from "./pages/Auth/ResetPassword";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Temporary dashboard components (replace with real ones)
const AdminDashboard = () => <div>Admin Dashboard</div>;
const EmployeeDashboard = () => <div>Employee Dashboard</div>;

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Protected Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee/dashboard"
          element={
            <ProtectedRoute>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
=======
import Navbar from "./components/layout/Navbar";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
>>>>>>> main
