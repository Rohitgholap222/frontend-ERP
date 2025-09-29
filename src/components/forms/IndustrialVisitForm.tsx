import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Building2, Plus } from "lucide-react";
import { useState } from "react";

const IndustrialVisitForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    date: "",
    coordinator: "",
    objectives: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.companyName ||
      !formData.location ||
      !formData.date ||
      !formData.coordinator ||
      !formData.objectives
    ) {
      toast({
        title: "Missing Info",
        description: "All fields are required.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Industrial Visit Added!",
      description: `${formData.companyName} – ${formData.location}`,
    });
    setFormData({
      companyName: "",
      location: "",
      date: "",
      coordinator: "",
      objectives: "",
    });
  };

  return (
    <Card className="shadow-card max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <CardTitle>Industrial Visit</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Company Name *</Label>
            <Input
              placeholder="Enter company name"
              className="border-gray-500"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
            />
          </div>

          <div>
            <Label>Location *</Label>
            <Input
              placeholder="Enter visit location"
              className="border-gray-500"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
            />
          </div>

          <div>
            <Label>Date *</Label>
            <Input
              type="date"
              className="border-gray-500"
              value={formData.date}
              onChange={(e) => handleInputChange("date", e.target.value)}
            />
          </div>

          <div>
            <Label>Coordinator *</Label>
            <Input
              placeholder="Enter coordinator name"
              className="border-gray-500"
              value={formData.coordinator}
              onChange={(e) => handleInputChange("coordinator", e.target.value)}
            />
          </div>

          <div>
            <Label>Objectives *</Label>
            <Textarea
              placeholder="Enter main objectives of the visit"
              className="border-gray-500"
              value={formData.objectives}
              onChange={(e) => handleInputChange("objectives", e.target.value)}
            />
          </div>

          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setFormData({
                  companyName: "",
                  location: "",
                  date: "",
                  coordinator: "",
                  objectives: "",
                })
              }
            >
              Clear
            </Button>
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" /> Add Visit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default IndustrialVisitForm;
