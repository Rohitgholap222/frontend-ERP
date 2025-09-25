import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Users, Plus } from "lucide-react";
import { useState } from "react";

const PlacementForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    jobRole: "",
    ctc: "",
    location: "",
  });

  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.jobRole || !formData.ctc) {
      toast({
        title: "Missing Info",
        description: "Please complete all required fields.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Placement Added",
      description: `${formData.jobRole} at ${formData.companyName}`,
    });
    setFormData({ companyName: "", jobRole: "", ctc: "", location: "" });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Placement Opportunity</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Company Name *</Label>
            <Input value={formData.companyName} onChange={(e) => handleChange("companyName", e.target.value)} />
          </div>
          <div>
            <Label>Job Role *</Label>
            <Input value={formData.jobRole} onChange={(e) => handleChange("jobRole", e.target.value)} />
          </div>
          <div>
            <Label>CTC (in LPA) *</Label>
            <Input value={formData.ctc} onChange={(e) => handleChange("ctc", e.target.value)} />
          </div>
          <div>
            <Label>Location</Label>
            <Input value={formData.location} onChange={(e) => handleChange("location", e.target.value)} />
          </div>
          <Button type="submit"><Plus className="h-4 w-4 mr-2" />Create Placement</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PlacementForm;
