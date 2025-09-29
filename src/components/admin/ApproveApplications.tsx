import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, XCircle, Search, FileText, Download, User } from 'lucide-react';
import { mockApplications } from '../../data/mockData';
import { useToast } from '@/hooks/use-toast';

const ApproveApplications = () => {
  const [applications, setApplications] = useState(mockApplications);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();

  const handleApprove = (appId: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.app_id === appId ? { ...app, status: 'Approved' as const } : app
      )
    );
    toast({
      title: "Application Approved",
      description: "The student has been notified of the approval.",
    });
  };

  const handleReject = (appId: number) => {
    setApplications(prev => 
      prev.map(app => 
        app.app_id === appId ? { ...app, status: 'Rejected' as const } : app
      )
    );
    toast({
      title: "Application Rejected",
      description: "The student has been notified of the rejection.",
      variant: "destructive",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-success text-success-foreground';
      case 'Rejected': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-warning text-warning-foreground';
    }
  };

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.student?.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.student?.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.internship?.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.internship?.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || app.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Approve Applications</h1>
        <p className="text-muted-foreground">Review and approve student internship applications.</p>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search by student or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Applications</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Application Cards */}
      <div className="space-y-4">
        {filteredApplications.map((application) => (
          <Card key={application.app_id} className="shadow-card">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">
                      {application.student?.first_name} {application.student?.last_name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{application.student?.email}</p>
                    <p className="text-sm text-muted-foreground">{application.student?.course}</p>
                  </div>
                </div>
                <Badge className={getStatusColor(application.status)}>
                  {application.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Internship Details</h4>
                  <div className="space-y-1">
                    <p className="font-medium">{application.internship?.title}</p>
                    <p className="text-sm text-muted-foreground">{application.internship?.company_name}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2">Student Information</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Course: {application.student?.course}</p>
                    <p>Graduation: {application.student?.graduation_year}</p>
                    <p>Location: {application.student?.location}</p>
                    <p>Mobile: {application.student?.mobile}</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Application Details</h4>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>Applied: {new Date(application.applied_date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>ID: #{application.app_id}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                
                {application.status === 'Pending' && (
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleReject(application.app_id)}
                      className="text-destructive hover:bg-destructive hover:text-destructive-foreground"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleApprove(application.app_id)}
                      className="bg-success hover:bg-success/90 text-success-foreground"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Add
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-sm font-semibold">No applications found</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Try adjusting your search criteria or filter settings.
          </p>
        </div>
      )}
    </div>
  );
};

export default ApproveApplications;