import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Users, Building2, Plus, Calendar } from 'lucide-react';
import { mockAllotments, mockApplications, mockInternships } from '../../data/mockData';
import { useToast } from '@/hooks/use-toast';

const AllotmentPage = () => {
  const [allotments, setAllotments] = useState(mockAllotments);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedInternship, setSelectedInternship] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Get approved applications that haven't been allotted yet
  const approvedApplications = mockApplications.filter(
    app => app.status === 'Approved' && 
    !allotments.some(allot => allot.student_id === app.student_id && allot.internship_id === app.internship_id)
  );

  const availableStudents = approvedApplications.map(app => ({
    id: app.student_id,
    name: `${app.student?.first_name} ${app.student?.last_name}`,
    application: app
  }));

  const handleCreateAllotment = () => {
    if (!selectedStudent || !selectedInternship) {
      toast({
        title: "Missing Information",
        description: "Please select both a student and an internship.",
        variant: "destructive",
      });
      return;
    }

    const studentApp = approvedApplications.find(
      app => app.student_id === parseInt(selectedStudent) && 
      app.internship_id === parseInt(selectedInternship)
    );

    if (!studentApp) {
      toast({
        title: "Invalid Selection",
        description: "The selected student must have an approved application for the selected internship.",
        variant: "destructive",
      });
      return;
    }

    const newAllotment = {
      allotment_id: allotments.length + 1,
      student_id: parseInt(selectedStudent),
      internship_id: parseInt(selectedInternship),
      allotted_date: new Date().toISOString(),
      student: studentApp.student,
      internship: studentApp.internship
    };

    setAllotments(prev => [...prev, newAllotment]);
    setSelectedStudent('');
    setSelectedInternship('');
    setIsDialogOpen(false);

    toast({
      title: "Allotment Created",
      description: "Student has been successfully allotted to the internship.",
    });
  };

  const getStudentInternships = (studentId: string) => {
    return approvedApplications
      .filter(app => app.student_id === parseInt(studentId))
      .map(app => app.internship!)
      .filter(Boolean);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Allotments</h1>
          <p className="text-muted-foreground">Manage student internship allotments and placements.</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary hover:bg-primary-dark">
              <Plus className="h-4 w-4 mr-2" />
              Create Allotment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Allotment</DialogTitle>
              <DialogDescription>
                Assign an approved student to an internship position.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Student</label>
                <Select value={selectedStudent} onValueChange={(value) => {
                  setSelectedStudent(value);
                  setSelectedInternship(''); // Reset internship selection
                }}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a student" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableStudents.map((student) => (
                      <SelectItem key={student.id} value={student.id.toString()}>
                        {student.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Internship</label>
                <Select 
                  value={selectedInternship} 
                  onValueChange={setSelectedInternship}
                  disabled={!selectedStudent}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose an internship" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectedStudent && getStudentInternships(selectedStudent).map((internship) => (
                      <SelectItem key={internship.internship_id} value={internship.internship_id.toString()}>
                        {internship.title} - {internship.company_name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateAllotment}>
                  Create Allotment
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{allotments.length}</p>
                <p className="text-xs text-muted-foreground">Total Allotments</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">
                  {new Set(allotments.map(a => a.internship_id)).size}
                </p>
                <p className="text-xs text-muted-foreground">Companies Involved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">{approvedApplications.length}</p>
                <p className="text-xs text-muted-foreground">Pending Allotments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Allotments */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Current Allotments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {allotments.map((allotment) => (
              <div key={allotment.allotment_id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      {allotment.student?.first_name} {allotment.student?.last_name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {allotment.internship?.title} - {allotment.internship?.company_name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Allotted: {new Date(allotment.allotted_date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary">Active</Badge>
              </div>
            ))}
          </div>

          {allotments.length === 0 && (
            <div className="text-center py-8">
              <Users className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-2 text-sm font-semibold">No allotments yet</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Create your first student allotment to get started.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Pending Approved Applications */}
      {approvedApplications.length > 0 && (
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Pending Allotments</CardTitle>
            <p className="text-sm text-muted-foreground">
              Approved applications waiting for allotment
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {approvedApplications.map((application) => (
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
                        {application.internship?.title} - {application.internship?.company_name}
                      </p>
                    </div>
                  </div>
                  <Badge className="bg-success text-success-foreground">
                    Approved
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AllotmentPage;