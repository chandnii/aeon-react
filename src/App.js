// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import DashboardLayout from './layouts/DashboardLayout';
import NotFoundPage from './pages/NotFoundPage';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import AccountType from './components/Auth/Register/AccountType';
import VerificationOtp from './components/Auth/Verification/VerificationOtp';
import ConfirmationPage from './components/Auth/Confirmation';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Dashboard/Profile';
import Settings from './components/Dashboard/Settings';

function App() {
  const isLoggedIn = false; // Example, change this with your authentication logic

  return (
    <Router> 
      <Routes>
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <AuthLayout><Login /></AuthLayout>}
        />
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <AuthLayout><Register /></AuthLayout>}
        />
        <Route
          path="/account-type"
          element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <AuthLayout><AccountType /></AuthLayout>}
        />
        <Route path="/verify-email/:token" element={<AuthLayout><VerificationOtp /></AuthLayout>} />
        <Route path="/confirm/:token" element={<AuthLayout><ConfirmationPage /></AuthLayout>} />
        <Route path="/dashboard" element={isLoggedIn ? <DashboardLayout><Dashboard /></DashboardLayout> : <Navigate to="/login" />} />
        <Route path="/dashboard/profile" element={isLoggedIn ? <DashboardLayout><Profile /></DashboardLayout> : <Navigate to="/login" />} />
        <Route path="/dashboard/settings" element={isLoggedIn ? <DashboardLayout><Settings /></DashboardLayout> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
