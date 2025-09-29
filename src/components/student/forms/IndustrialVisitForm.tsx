// src/components/student/forms/IndustrialVisitForm.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const IndustrialVisitForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    visitDate: "",
    facultyCoordinator: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Industrial Visit form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Industrial Visit Application Form</CardTitle>
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
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <Input
            type="date"
            name="visitDate"
            value={formData.visitDate}
            onChange={handleChange}
          />
          <Input
            name="facultyCoordinator"
            placeholder="Faculty Coordinator Name"
            value={formData.facultyCoordinator}
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

export default IndustrialVisitForm;
