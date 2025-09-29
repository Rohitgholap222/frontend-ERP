import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    client: "",
    description: "",
    facultyLead: "",
    budget: "",
    deadline: "",
  });

  const { toast } = useToast();
  const handleInputChange = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.projectTitle || !formData.client || !formData.description || !formData.facultyLead || !formData.budget || !formData.deadline) {
      toast({ title: "Missing Information", description: "Fill all fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Consultancy Project Added!", description: `Project: ${formData.projectTitle}` });
    setFormData({ projectTitle: "", client: "", description: "", facultyLead: "", budget: "", deadline: "" });
  };

  return (
    <Card className="shadow-card max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle>New Consultancy Project</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Label>Project Title *</Label>
          <Input value={formData.projectTitle} onChange={(e) => handleInputChange("projectTitle", e.target.value)} placeholder="Enter Project Title" />

          <Label>Client *</Label>
          <Input value={formData.client} onChange={(e) => handleInputChange("client", e.target.value)} placeholder="Enter Client Name" />

          <Label>Description *</Label>
          <Textarea value={formData.description} onChange={(e) => handleInputChange("description", e.target.value)} placeholder="Project scope, deliverables..." />

          <Label>Faculty Lead *</Label>
          <Input value={formData.facultyLead} onChange={(e) => handleInputChange("facultyLead", e.target.value)} placeholder="Enter Faculty Lead Name" />

          <Label>Budget *</Label>
          <Input type="number" value={formData.budget} onChange={(e) => handleInputChange("budget", e.target.value)} placeholder="Enter Budget in INR" />

          <Label>Deadline *</Label>
          <Input type="date" value={formData.deadline} onChange={(e) => handleInputChange("deadline", e.target.value)} />

          <div className="flex justify-end space-x-4 pt-6">
            <Button type="button" variant="outline" onClick={() => setFormData({ projectTitle: "", client: "", description: "", facultyLead: "", budget: "", deadline: "" })}>
              Clear
            </Button>
            <Button type="submit"><Plus className="h-4 w-4 mr-2" /> Add Project</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultancyForm;
