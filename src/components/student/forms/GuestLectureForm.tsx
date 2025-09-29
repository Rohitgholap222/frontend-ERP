// src/components/student/forms/GuestLectureForm.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GuestLectureForm = () => {
  const [formData, setFormData] = useState({
    lecturerName: "",
    topic: "",
    date: "",
    duration: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Guest Lecture form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Guest Lecture Application Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="lecturerName"
            placeholder="Lecturer Name"
            value={formData.lecturerName}
            onChange={handleChange}
          />
          <Input
            name="topic"
            placeholder="Lecture Topic"
            value={formData.topic}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <Input
            name="duration"
            placeholder="Duration (e.g. 2 hours)"
            value={formData.duration}
            onChange={handleChange}
          />
          <Button type="submit" className="w-full">
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GuestLectureForm;
