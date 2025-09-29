import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mic, Plus } from "lucide-react";
import { useState } from "react";

const GuestLectureForm = () => {
  const [formData, setFormData] = useState({
    speakerName: "",
    topic: "",
    description: "",
    date: "",
  });

  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.speakerName || !formData.topic) {
      toast({
        title: "Missing Info",
        description: "Speaker and Topic are required.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Guest Lecture Scheduled",
      description: `${formData.topic} by ${formData.speakerName}`,
    });
    setFormData({ speakerName: "", topic: "", description: "", date: "" });
  };

  return (
    <Card className="shadow-card max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center">
            <Mic className="h-6 w-6 text-white" />
          </div>
          <CardTitle>New Guest Lecture</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Speaker Name *</Label>
            <Input
              placeholder="Enter speaker's full name"
              className="border-gray-500"
              value={formData.speakerName}
              onChange={(e) => handleChange("speakerName", e.target.value)}
            />
          </div>
          <div>
            <Label>Topic *</Label>
            <Input
              placeholder="Enter the topic of the lecture"
              className="border-gray-500"
              value={formData.topic}
              onChange={(e) => handleChange("topic", e.target.value)}
            />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea
              placeholder="Provide a brief description about the lecture"
              className="border-gray-500"
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />
          </div>
          <div>
            <Label>Date</Label>
            <Input
              type="date"
              className="border-gray-500"
              value={formData.date}
              onChange={(e) => handleChange("date", e.target.value)}
            />
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" /> Schedule Lecture
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default GuestLectureForm;
