import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Plus } from "lucide-react";
import { useState } from "react";

const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    clientName: "",
    projectTitle: "",
    description: "",
    duration: "",
  });

  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.projectTitle) {
      toast({
        title: "Missing Info",
        description: "Please fill all required fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Consultancy Project Created",
      description: `${formData.projectTitle} for ${formData.clientName}`,
    });
    setFormData({ clientName: "", projectTitle: "", description: "", duration: "" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Consultancy Work / Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Client Name *</Label>
            <Input value={formData.clientName} onChange={(e) => handleChange("clientName", e.target.value)} />
          </div>
          <div>
            <Label>Project Title *</Label>
            <Input value={formData.projectTitle} onChange={(e) => handleChange("projectTitle", e.target.value)} />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
          </div>
          <div>
            <Label>Duration (in months)</Label>
            <Input value={formData.duration} onChange={(e) => handleChange("duration", e.target.value)} />
          </div>
          <Button type="submit"><Plus className="h-4 w-4 mr-2" />Create Project</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultancyForm;
