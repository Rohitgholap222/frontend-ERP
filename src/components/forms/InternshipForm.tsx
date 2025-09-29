import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    title: "",
    description: "",
    eligibility: "",
    openings: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.title ||
      !formData.description ||
      !formData.eligibility ||
      !formData.openings
    ) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (parseInt(formData.openings) <= 0) {
      toast({
        title: "Invalid Openings",
        description: "Number of openings must be greater than 0.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Internship Created!",
      description: `Successfully created internship posting for ${formData.companyName}.`,
    });

    setFormData({
      companyName: "",
      title: "",
      description: "",
      eligibility: "",
      openings: "",
    });
  };

  return (
    <Card className="shadow-card max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Building2 className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle>New Internship Posting</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company Information</h3>
            <Label htmlFor="companyName">Company Name *</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Enter Company Name"
              required
            />
          </div>

          {/* Position Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Position Details</h3>
            <Label htmlFor="title">Internship Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="Enter Internship Title"
              required
            />

            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                handleInputChange("description", e.target.value)
              }
              placeholder="Role responsibilities, learning outcomes..."
              rows={4}
              required
            />

            <Label htmlFor="eligibility">Eligibility Criteria *</Label>
            <Textarea
              id="eligibility"
              value={formData.eligibility}
              onChange={(e) =>
                handleInputChange("eligibility", e.target.value)
              }
              placeholder="Required skills, academic background..."
              rows={3}
              required
            />

            <Label htmlFor="openings">Number of Openings *</Label>
            <Input
              id="openings"
              type="number"
              min="1"
              value={formData.openings}
              onChange={(e) => handleInputChange("openings", e.target.value)}
              placeholder="Enter Number of Openings"
              required
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setFormData({
                  companyName: "",
                  title: "",
                  description: "",
                  eligibility: "",
                  openings: "",
                })
              }
            >
              Clear Form
            </Button>
            <Button
              type="submit"
              className="bg-gradient-primary hover:bg-primary-dark"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Internship
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default InternshipForm;
