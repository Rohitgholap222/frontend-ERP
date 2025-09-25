import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatCard from '../StatCard';
import { Users, FileText, CheckCircle, XCircle, Building2, TrendingUp } from 'lucide-react';
import { mockApplications, mockInternships, mockStudents, mockAllotments } from '../../data/mockData';

const AdminDashboard = () => {
  const totalStudents = mockStudents.length;
  const totalApplications = mockApplications.length;
  const totalInternships = mockInternships.length;
  const totalAllotments = mockAllotments.length;
  
  const pendingApplications = mockApplications.filter(app => app.status === 'Pending').length;
  const approvedApplications = mockApplications.filter(app => app.status === 'Approved').length;
  const rejectedApplications = mockApplications.filter(app => app.status === 'Rejected').length;

  // Mock chart data
  const applicationTrends = [
    { month: 'Jan', applications: 12, approvals: 8 },
    { month: 'Feb', applications: 19, approvals: 14 },
    { month: 'Mar', applications: 25, approvals: 18 },
    { month: 'Apr', applications: 30, approvals: 22 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        {/* <p className="text-muted-foreground">Overview of the internship management system.</p> */}
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={<Users className="h-4 w-4" />}
          trend={{ value: 12, isPositive: true }}
          description="Registered students"
        />
        <StatCard
          title="Total Applications"
          value={totalApplications}
          icon={<FileText className="h-4 w-4" />}
          trend={{ value: 8, isPositive: true }}
          description="All time applications"
        />
        <StatCard
          title="Active Internships"
          value={totalInternships}
          icon={<Building2 className="h-4 w-4" />}
          description="Available positions"
        />
        <StatCard
          title="Successful Placements"
          value={totalAllotments}
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 15, isPositive: true }}
          description="Students placed"
        />
      </div>

      {/* Application Status Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          title="Pending Reviews"
          value={pendingApplications}
          icon={<FileText className="h-4 w-4" />}
          description="Awaiting admin action"
        />
        <StatCard
          title="Approved"
          value={approvedApplications}
          icon={<CheckCircle className="h-4 w-4" />}
          description="Applications approved"
        />
        <StatCard
          title="Rejected"
          value={rejectedApplications}
          icon={<XCircle className="h-4 w-4" />}
          description="Applications rejected"
        />
      </div>

      {/* Recent Applications */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockApplications.slice(0, 5).map((application) => (
              <div key={application.app_id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold text-sm">
                      {application.student?.first_name?.[0]}{application.student?.last_name?.[0]}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {application.student?.first_name} {application.student?.last_name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Applied for {application.internship?.title} at {application.internship?.company_name}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{application.status}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(application.applied_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Company Distribution */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Top Companies by Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockInternships.map((internship) => {
              const applicationCount = mockApplications.filter(
                app => app.internship_id === internship.internship_id
              ).length;
              return (
                <div key={internship.internship_id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Building2 className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{internship.company_name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">{applicationCount}</span>
                    <span className="text-sm text-muted-foreground ml-1">applications</span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;