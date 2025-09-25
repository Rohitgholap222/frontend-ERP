import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Building2, Upload } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mockInternships } from '../../data/mockData';

const ApplicationForm = () => {
  const { internshipId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const internship = mockInternships.find(i => i.internship_id === parseInt(internshipId || '0'));
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    course: '',
    graduationYear: '',
    currentYear: '',
    location: '',
    domain: '',
    resume: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.mobile || !formData.resume) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload your resume.",
        variant: "destructive",
      });
      return;
    }

    // Simulate API call
    toast({
      title: "Application Submitted!",
      description: "Your application has been submitted successfully. You'll hear back soon!",
    });

    // Navigate back to applications
    navigate('/student/applications');
  };

  if (!internship) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Internship not found</h2>
        <Button className="mt-4" onClick={() => navigate('/student/internships')}>
          Back to Internships
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/student/internships')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Internships
        </Button>
      </div>

      {/* Internship Info */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle>{internship.title}</CardTitle>
              <CardDescription className="font-medium text-foreground">
                {internship.company_name}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{internship.description}</p>
        </CardContent>
      </Card>

      {/* Application Form */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Application Form</CardTitle>
          <CardDescription>
            Please fill out all the required information to apply for this internship.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Academic Information */}
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="course">Course *</Label>
                <Select onValueChange={(value) => handleInputChange('course', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="information-technology">Information Technology</SelectItem>
                    <SelectItem value="software-engineering">Software Engineering</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="business-administration">Business Administration</SelectItem>
                    <SelectItem value="management">Management</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="domain">Domain *</Label>
                <Select onValueChange={(value) => handleInputChange('domain', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="management">Management</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year *</Label>
                <Select onValueChange={(value) => handleInputChange('graduationYear', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2027">2027</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentYear">Current Year *</Label>
                <Select onValueChange={(value) => handleInputChange('currentYear', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    
                    <SelectItem value="3">3rd Year</SelectItem>
                    <SelectItem value="4">4th Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Your city"
                  required
                />
              </div>
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
              <Label htmlFor="resume">Resume *</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                <div className="mt-2">
                  <Label htmlFor="resume" className="cursor-pointer text-primary hover:text-primary-dark">
                    Click to upload
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">PDF, DOC, or DOCX (max 5MB)</p>
                </div>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                {formData.resume && (
                  <p className="text-sm text-success mt-2">
                    ✓ {formData.resume.name}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/student/internships')}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-gradient-primary hover:bg-primary-dark">
                Submit Application
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApplicationForm;