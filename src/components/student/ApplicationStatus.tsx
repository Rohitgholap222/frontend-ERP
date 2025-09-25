import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, FileText, XCircle } from 'lucide-react';
import { mockApplications } from '../../data/mockData';

const ApplicationStatus = () => {
  const studentApplications = mockApplications.filter(app => app.student_id === 1);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="h-4 w-4" />;
      case 'Rejected': return <XCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-success text-success-foreground';
      case 'Rejected': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-warning text-warning-foreground';
    }
  };

  const getStatusDescription = (status: string) => {
    switch (status) {
      case 'Approved': return 'Congratulations! Your application has been approved.';
      case 'Rejected': return 'Unfortunately, your application was not selected.';
      default: return 'Your application is currently under review.';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Applications</h1>
        {/* <p className="text-muted-foreground">Track the status of your internship applications.</p> */}
      </div>

      <div className="space-y-4">
        {studentApplications.map((application) => (
          <Card key={application.app_id} className="shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{application.internship?.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{application.internship?.company_name}</p>
                  </div>
                </div>
                <Badge className={`${getStatusColor(application.status)} flex items-center gap-1`}>
                  {getStatusIcon(application.status)}
                  {application.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Application Details</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Applied: {new Date(application.applied_date).toLocaleDateString()}</p>
                    <p>Application ID: #{application.app_id}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Status</h4>
                  <p className="text-sm text-muted-foreground">
                    {getStatusDescription(application.status)}
                  </p>
                </div>
              </div>

              {/* <div className="flex items-center justify-between pt-4 border-t">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                {application.status === 'Approved' && (
                  <Button size="sm" className="bg-gradient-primary">
                    View Offer Details
                  </Button>
                )}
              </div> */}
            </CardContent>
          </Card>
        ))}
      </div>

      {studentApplications.length === 0 && (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-sm font-semibold">No applications yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Start by browsing available internships and applying to ones that interest you.
          </p>
          <Button className="mt-4 bg-gradient-primary">
            Browse Internships
          </Button>
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;