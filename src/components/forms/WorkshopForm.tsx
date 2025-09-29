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

    if (!formData.title || !formData.organizer || !formData.description || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Workshop Created Successfully!",
      description: `${formData.title} organized by ${formData.organizer}`,
    });

    setFormData({
      title: "",
      organizer: "",
      description: "",
      skills: "",
      date: "",
    });
  };

  return (
    <Card className="shadow-card max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle>New Training / Workshop</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label>Workshop Title *</Label>
              <Input
                placeholder="Enter workshop title (e.g., React Bootcamp)"
                className="border-gray-400"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>

            <div>
              <Label>Organizer *</Label>
              <Input
                placeholder="Enter organizer name (e.g., Training Dept.)"
                className="border-gray-400"
                value={formData.organizer}
                onChange={(e) => handleChange("organizer", e.target.value)}
              />
            </div>

            <div>
              <Label>Description *</Label>
              <Textarea
                placeholder="Enter workshop details (e.g., Hands-on React and APIs)"
                className="border-gray-400"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            <div>
              <Label>Skills Covered</Label>
              <Input
                placeholder="Enter skills (e.g., React, TypeScript, APIs)"
                className="border-gray-400"
                value={formData.skills}
                onChange={(e) => handleChange("skills", e.target.value)}
              />
            </div>

            <div>
              <Label>Date *</Label>
              <Input
                type="date"
                className="border-gray-400"
                value={formData.date}
                onChange={(e) => handleChange("date", e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setFormData({
                  title: "",
                  organizer: "",
                  description: "",
                  skills: "",
                  date: "",
                })
              }
            >
              Clear
            </Button>
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" /> Create Workshop
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default WorkshopForm;
