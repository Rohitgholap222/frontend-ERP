import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Factory, Plus } from "lucide-react";
import { useState } from "react";

const IndustrialVisitForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    purpose: "",
    date: "",
  });

  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.date) {
      toast({
        title: "Missing Info",
        description: "Company name and Date are required.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Industrial Visit Planned",
      description: `${formData.companyName} on ${formData.date}`,
    });
    setFormData({ companyName: "", location: "", purpose: "", date: "" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Industrial Visit</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Company Name *</Label>
            <Input value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)} />
          </div>
          <div>
            <Label>Location</Label>
            <Input value={formData.location} onChange={(e) => handleChange("location", e.target.value)} />
          </div>
          <div>
            <Label>Purpose</Label>
            <Textarea value={formData.purpose} onChange={(e) => handleChange("purpose", e.target.value)} />
          </div>
          <div>
            <Label>Date *</Label>
            <Input type="date" value={formData.date} onChange={(e) => handleChange("date", e.target.value)} />
          </div>
          <Button type="submit"><Plus className="h-4 w-4 mr-2" />Plan Visit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default IndustrialVisitForm;
