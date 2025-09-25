import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, CheckCircle, Clock, FileText } from 'lucide-react';
import { mockApplications } from '../../data/mockData';
import StatCard from '../StatCard';

const StudentDashboard = () => {
  const studentApplications = mockApplications.filter(app => app.student_id === 1);
  const pendingApps = studentApplications.filter(app => app.status === 'Pending').length;
  const approvedApps = studentApplications.filter(app => app.status === 'Approved').length;
  const rejectedApps = studentApplications.filter(app => app.status === 'Rejected').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-success text-success-foreground';
      case 'Rejected': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-warning text-warning-foreground';
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
       
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Applications"
          value={studentApplications.length}
          icon={<FileText className="h-4 w-4" />}
          description="Applications submitted"
        />
        <StatCard
          title="Pending"
          value={pendingApps}
          icon={<Clock className="h-4 w-4" />}
          description="Awaiting review"
        />
        <StatCard
          title="Approved"
          value={approvedApps}
          icon={<CheckCircle className="h-4 w-4" />}
          description="Successfully approved"
        />
        <StatCard
          title="Companies Applied"
          value={new Set(studentApplications.map(app => app.internship?.company_name)).size}
          icon={<Building2 className="h-4 w-4" />}
          description="Unique companies"
        />
      </div>

      {/* Recent Applications */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {studentApplications.map((application) => (
              <div key={application.app_id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h3 className="font-semibold">{application.internship?.title}</h3>
                  <p className="text-sm text-muted-foreground">{application.internship?.company_name}</p>
                  <p className="text-xs text-muted-foreground">
                    Applied: {new Date(application.applied_date).toLocaleDateString()}
                  </p>
                </div>
                <Badge className={getStatusColor(application.status)}>
                  {application.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Placement Showcase */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Placements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">JD</span>
              </div>
              <h4 className="font-semibold">Shivani Gulhane</h4>
              <p className="text-sm text-muted-foreground">Google - SWE Intern</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">JS</span>
              </div>
              <h4 className="font-semibold">Rohit Gholap</h4>
              <p className="text-sm text-muted-foreground">Microsoft - PM Intern</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AJ</span>
              </div>
              <h4 className="font-semibold">Gauri Joshi</h4>
              <p className="text-sm text-muted-foreground">Amazon - Data Science</p>
            </div>
             <div className="text-center p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AJ</span>
              </div>
              <h4 className="font-semibold">Pankaj Sagvekar</h4>
              <p className="text-sm text-muted-foreground">Amazon - Data Science</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;