import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import Login from "@/pages/auth/Login";
import Index from "@/pages/Index";
import StudentsPage from "@/pages/students/Index";
import TeachersPage from "@/pages/teachers/Index";
import ClassesPage from "@/pages/classes/Index";
import HomeworkPage from "@/pages/homework/Index";
import AttendancePage from "@/pages/attendance/Index";
import FeesPage from "@/pages/fees/Index";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              }
            />
            <Route
              path="/students"
              element={
                <ProtectedRoute>
                  <StudentsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers"
              element={
                <ProtectedRoute>
                  <TeachersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/classes"
              element={
                <ProtectedRoute>
                  <ClassesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/homework"
              element={
                <ProtectedRoute>
                  <HomeworkPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/attendance"
              element={
                <ProtectedRoute>
                  <AttendancePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/fees"
              element={
                <ProtectedRoute>
                  <FeesPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;