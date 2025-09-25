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
    <Card>
      <CardHeader>
        <CardTitle>New Guest Lecture</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Speaker Name *</Label>
            <Input value={formData.speakerName} onChange={(e) => handleChange("speakerName", e.target.value)} />
          </div>
          <div>
            <Label>Topic *</Label>
            <Input value={formData.topic} onChange={(e) => handleChange("topic", e.target.value)} />
          </div>
          <div>
            <Label>Description</Label>
            <Textarea value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
          </div>
          <div>
            <Label>Date</Label>
            <Input type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)} />
          </div>
          <Button type="submit"><Plus className="h-4 w-4 mr-2" />Schedule Lecture</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GuestLectureForm;
