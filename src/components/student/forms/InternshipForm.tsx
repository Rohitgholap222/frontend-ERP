// src/components/student/forms/InternshipForm.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    duration: "",
    stipend: "",
    mentor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Internship form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Internship Application Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <Input
            name="duration"
            placeholder="Duration (e.g. 3 Months)"
            value={formData.duration}
            onChange={handleChange}
          />
          <Input
            name="stipend"
            placeholder="Stipend (if any)"
            value={formData.stipend}
            onChange={handleChange}
          />
          <Input
            name="mentor"
            placeholder="Mentor / Guide Name"
            value={formData.mentor}
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

export default InternshipForm;
