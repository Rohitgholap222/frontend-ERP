import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminDashboard from "./components/admin/AdminDashboard";
import AllotmentPage from "./components/admin/AllotmentPage";
import ApproveApplications from "./components/admin/ApproveApplications";
import IndustryCollaboration from "./components/admin/IndustryCollaboration";
import Companies from "./components/admin/Companies";

import Layout from "./components/Layout";
import ApplicationStatus from "./components/student/ApplicationStatus";
import StudentDashboard from "./components/student/StudentDashboard";
import StudentOpportunity from "./components/student/StudentOpportunity";

import TrainingForm from "./components/student/forms/TrainingForm";
import ConsultancyForm from "./components/student/forms/ConsultancyForm";
import PlacementForm from "./components/student/forms/PlacementForm";
import InternshipForm from "./components/student/forms/InternshipForm";
import GuestLectureForm from "./components/student/forms/GuestLectureForm";
import IndustrialVisitForm from "./components/student/forms/IndustrialVisitForm";

import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
// import Companies from "./components/admin/Companies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Login */}
          <Route path="/" element={<LoginPage />} />

          {/* Student Routes */}
          <Route
            path="/student/dashboard"
            element={
              <Layout userRole="student">
                <StudentDashboard />
              </Layout>
            }
          />

          <Route
            path="/student/internships"
            element={
              <Layout userRole="student">
                <StudentOpportunity />
              </Layout>
            }
          />

          {/* Forms for each module */}
          <Route
            path="/student/apply/training"
            element={
              <Layout userRole="student">
                <TrainingForm />
              </Layout>
            }
          />
          <Route
            path="/student/apply/consultancy"
            element={
              <Layout userRole="student">
                <ConsultancyForm />
              </Layout>
            }
          />
          <Route
            path="/student/apply/placement"
            element={
              <Layout userRole="student">
                <PlacementForm />
              </Layout>
            }
          />
          <Route
            path="/student/apply/internship"
            element={
              <Layout userRole="student">
                <InternshipForm />
              </Layout>
            }
          />
          <Route
            path="/student/apply/guest-lecture"
            element={
              <Layout userRole="student">
                <GuestLectureForm />
              </Layout>
            }
          />
          <Route
            path="/student/apply/industrial-visit"
            element={
              <Layout userRole="student">
                <IndustrialVisitForm />
              </Layout>
            }
          />

          <Route
            path="/student/applications"
            element={
              <Layout userRole="student">
                <ApplicationStatus />
              </Layout>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <Layout userRole="admin">
                <AdminDashboard />
              </Layout>
            }
          />
          <Route
            path="/admin/applications"
            element={
              <Layout userRole="admin">
                <ApproveApplications />
              </Layout>
            }
          />
          <Route
            path="/admin/allotments"
            element={
              <Layout userRole="admin">
                <AllotmentPage />
              </Layout>
            }
          />
          <Route
            path="/admin/industry-collaboration"
            element={
              <Layout userRole="admin">
                <IndustryCollaboration />
              </Layout>
            } 
          />
          <Route 
            path="/admin/companies"
            element={
              <Layout userRole="admin" >
                <div className="min-h-screen bg-gray-50">
                    <Companies />
                </div>
                
              </Layout>
            }
            />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
