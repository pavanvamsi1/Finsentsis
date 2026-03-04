import About from "./pages/About/About";
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
        <Route path="/about" element={<About />} />
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