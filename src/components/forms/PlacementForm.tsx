import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const PlacementForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    officeAddress: "",
    website: "",
    year: "",
    industry: "",
    size: "",
    parentGroup: "",
    employeeStrength: "",
    presence: "",
    hrName: "",
    hrDesignation: "",
    hrEmail: "",
    hrMobile: "",
    profilesOffered: "",
    eligibleBranches: "",
    vacancies: "",
    internship: "",
    ctc: "",
    bond: "",
    selectionStages: "",
    timeline: "",
    agreement: "",
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.companyName || !formData.officeAddress || !formData.website) {
      toast({
        title: "Missing Information",
        description: "Please fill at least Company Name, Address, and Website.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Placement Drive Added!",
      description: `${formData.companyName} – ${formData.profilesOffered || "Profile Not Specified"}`,
    });

    setFormData({
      companyName: "",
      officeAddress: "",
      website: "",
      year: "",
      industry: "",
      size: "",
      parentGroup: "",
      employeeStrength: "",
      presence: "",
      hrName: "",
      hrDesignation: "",
      hrEmail: "",
      hrMobile: "",
      profilesOffered: "",
      eligibleBranches: "",
      vacancies: "",
      internship: "",
      ctc: "",
      bond: "",
      selectionStages: "",
      timeline: "",
      agreement: "",
    });
  };

  return (
    <Card className="shadow-card max-w-5xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-primary-foreground" />
          </div>
          <CardTitle>New Placement Drive</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Company Details */}
          <div>
            <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">Company Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Company Name *</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter company name (e.g., TCS)"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Office Address *</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter registered office address"
                  value={formData.officeAddress}
                  onChange={(e) => handleInputChange("officeAddress", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Website URL *</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter company website (e.g., www.tcs.com)"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label>Year of Establishment</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter year (e.g., 1995)"
                  value={formData.year}
                  onChange={(e) => handleInputChange("year", e.target.value)}
                />
              </div>
              <div>
                <Label>Industry Type / Sector</Label>
                <Input
                  className="border-gray-400"
                  placeholder="e.g., IT, Core, Manufacturing"
                  value={formData.industry}
                  onChange={(e) => handleInputChange("industry", e.target.value)}
                />
              </div>
              <div>
                <Label>Company Size</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Small / Medium / Large"
                  value={formData.size}
                  onChange={(e) => handleInputChange("size", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Organization Profile */}
          <div>
            <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">Organization Profile</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Parent Group / Subsidiaries</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter parent group if any"
                  value={formData.parentGroup}
                  onChange={(e) => handleInputChange("parentGroup", e.target.value)}
                />
              </div>
              <div>
                <Label>Employee Strength</Label>
                <Input
                  className="border-gray-400"
                  placeholder="e.g., 200 employees"
                  value={formData.employeeStrength}
                  onChange={(e) => handleInputChange("employeeStrength", e.target.value)}
                />
              </div>
              <div>
                <Label>Company Presence</Label>
                <Input
                  className="border-gray-400"
                  placeholder="e.g., PAN India, Global"
                  value={formData.presence}
                  onChange={(e) => handleInputChange("presence", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* HR Contact */}
          <div>
            <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">Primary HR - Contact Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter HR name"
                  value={formData.hrName}
                  onChange={(e) => handleInputChange("hrName", e.target.value)}
                />
              </div>
              <div>
                <Label>Designation</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter HR designation"
                  value={formData.hrDesignation}
                  onChange={(e) => handleInputChange("hrDesignation", e.target.value)}
                />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  className="border-gray-400"
                  placeholder="Enter HR email"
                  value={formData.hrEmail}
                  onChange={(e) => handleInputChange("hrEmail", e.target.value)}
                />
              </div>
              <div>
                <Label>Mobile</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter HR mobile number"
                  value={formData.hrMobile}
                  onChange={(e) => handleInputChange("hrMobile", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Recruitment */}
          <div>
            <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">Recruitment Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Profiles Offered</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter job roles (e.g., Software Developer)"
                  value={formData.profilesOffered}
                  onChange={(e) => handleInputChange("profilesOffered", e.target.value)}
                />
              </div>
              <div>
                <Label>Eligible Branches</Label>
                <Input
                  className="border-gray-400"
                  placeholder="e.g., CS, IT, ECE"
                  value={formData.eligibleBranches}
                  onChange={(e) => handleInputChange("eligibleBranches", e.target.value)}
                />
              </div>
              <div>
                <Label>Number of Vacancies</Label>
                <Input
                  type="number"
                  className="border-gray-400"
                  placeholder="Enter total vacancies"
                  value={formData.vacancies}
                  onChange={(e) => handleInputChange("vacancies", e.target.value)}
                />
              </div>
              <div>
                <Label>Internship Opportunities</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Yes / No"
                  value={formData.internship}
                  onChange={(e) => handleInputChange("internship", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Compensation */}
          <div>
            <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">Compensation & Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>CTC</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Enter CTC (e.g., 4,00,000 per annum)"
                  value={formData.ctc}
                  onChange={(e) => handleInputChange("ctc", e.target.value)}
                />
              </div>
              <div>
                <Label>Bond / Service Agreement</Label>
                <Input
                  className="border-gray-400"
                  placeholder="Yes / No / Details"
                  value={formData.bond}
                  onChange={(e) => handleInputChange("bond", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Hiring Process */}
          <div>
            <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">Hiring Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Selection Stages</Label>
                <Textarea
                  className="border-gray-400"
                  placeholder="e.g., Online Test, GD, Technical, HR"
                  value={formData.selectionStages}
                  onChange={(e) => handleInputChange("selectionStages", e.target.value)}
                />
              </div>
              <div>
                <Label>Expected Timeline</Label>
                <Input
                  className="border-gray-400"
                  placeholder="e.g., 4 weeks"
                  value={formData.timeline}
                  onChange={(e) => handleInputChange("timeline", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Compliance */}
          <div>
            <h3 className="text-xl font-bold text-primary border-b pb-2 mb-4">Compliance & Documents</h3>
            <Label>Any MoU or Agreement Required</Label>
            <Input
              className="border-gray-400"
              placeholder="Yes / No / Details"
              value={formData.agreement}
              onChange={(e) => handleInputChange("agreement", e.target.value)}
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
                  officeAddress: "",
                  website: "",
                  year: "",
                  industry: "",
                  size: "",
                  parentGroup: "",
                  employeeStrength: "",
                  presence: "",
                  hrName: "",
                  hrDesignation: "",
                  hrEmail: "",
                  hrMobile: "",
                  profilesOffered: "",
                  eligibleBranches: "",
                  vacancies: "",
                  internship: "",
                  ctc: "",
                  bond: "",
                  selectionStages: "",
                  timeline: "",
                  agreement: "",
                })
              }
            >
              Clear
            </Button>
            <Button type="submit">
              <Plus className="h-4 w-4 mr-2" /> Add Placement
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PlacementForm;
