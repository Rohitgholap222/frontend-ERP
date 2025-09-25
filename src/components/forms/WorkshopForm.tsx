import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Plus } from "lucide-react";
import { useState } from "react";

const WorkshopForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    organizer: "",
    description: "",
    skills: "",
    date: "",
  });

  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.organizer || !formData.description) {
      toast({
        title: "Missing Info",
        description: "Please complete all fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Workshop Created",
      description: `${formData.title} by ${formData.organizer}`,
    });
    setFormData({ title: "", organizer: "", description: "", skills: "", date: "" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Training / Workshop</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Workshop Title *</Label>
            <Input value={formData.title} onChange={(e) => handleChange("title", e.target.value)} />
          </div>
          <div>
            <Label>Organizer *</Label>
            <Input value={formData.organizer} onChange={(e) => handleChange("organizer", e.target.value)} />
          </div>
          <div>
            <Label>Description *</Label>
            <Textarea value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
          </div>
          <div>
            <Label>Skills Covered</Label>
            <Input value={formData.skills} onChange={(e) => handleChange("skills", e.target.value)} />
          </div>
          <div>
            <Label>Date</Label>
            <Input type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)} />
          </div>
          <Button type="submit"><Plus className="h-4 w-4 mr-2" />Create Workshop</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default WorkshopForm;
