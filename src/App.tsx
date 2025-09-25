import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/admin/AdminDashboard";
import AllotmentPage from "./components/admin/AllotmentPage";
import ApproveApplications from "./components/admin/ApproveApplications";
import CreateInternship from "./components/admin/CreateInternship";
import Layout from "./components/Layout";
import ApplicationForm from "./components/student/ApplicationForm";
import ApplicationStatus from "./components/student/ApplicationStatus";
import InternshipList from "./components/student/InternshipList";
import StudentDashboard from "./components/student/StudentDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Login */}
          {/* <Route path="/" element={<LoginPage />} /> */}
          
          {/* Student Routes */}
          <Route path="/" element={
            <Layout userRole="student">
              <StudentDashboard />
            </Layout>
          } />
          <Route path="/student/internships" element={
            <Layout userRole="student">
              <InternshipList />
            </Layout>
          } />
          <Route path="/student/apply/:internshipId" element={
            <Layout userRole="student">
              <ApplicationForm />
            </Layout>
          } />
          <Route path="/student/applications" element={
            <Layout userRole="student">
              <ApplicationStatus />
            </Layout>
          } />
          

          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={
            <Layout userRole="admin">
              <AdminDashboard />
            </Layout>
          } />
          <Route path="/admin/applications" element={
            <Layout userRole="admin">
              <ApproveApplications />
            </Layout>
          } />
          <Route path="/admin/allotments" element={
            <Layout userRole="admin">
              <AllotmentPage />
            </Layout>
          } />
          <Route path="/admin/create-internship" element={
            <Layout userRole="admin">
              <CreateInternship />
            </Layout>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
