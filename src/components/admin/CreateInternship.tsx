import { useState } from "react";
import InternshipForm from "@/components/forms/InternshipForm";
import PlacementForm from "@/components/forms/PlacementForm";
import WorkshopForm from "@/components/forms/WorkshopForm";
import ConsultancyForm from "@/components/forms/ConsultancyForm";
import GuestLectureForm from "@/components/forms/GuestLectureForm";
import IndustrialVisitForm from "@/components/forms/IndustrialVisitForm";
import { Button } from "@/components/ui/button"; // correct



const CreateInternship = () => {
  const [activeTab, setActiveTab] = useState("Internship");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Internship":
        return <InternshipForm />;
      case "Placement":
        return <PlacementForm />;
      case "Trainning/Skill Workshop":
        return <WorkshopForm />;
      case "Consultancy Work/Project":
        return <ConsultancyForm />;
      case "Guest Lecture":
        return <GuestLectureForm />;
      case "Industrial Visit":
        return <IndustrialVisitForm />;
      default:
        return (
          <div className="p-6 border rounded-md text-center text-gray-600 bg-gray-50 shadow-sm">
            Content for <b>{activeTab}</b> goes here
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Navigation */}
      <div className="border-b pb-3">
        <nav className="flex justify-center space-x-6 border-y py-3 bg-gray-50 rounded-md shadow-sm">
          {[
            "Trainning/Skill Workshop",
            "Consultancy Work/Project",
            "Placement",
            "Internship",
            "Guest Lecture",
            "Industrial Visit",
          ].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "ghost"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </nav>
      </div>

      {/* Dynamic Content */}
      <div className="max-w-3xl mx-auto mt-6">{renderTabContent()}</div>
    </div>
  );
};

export default CreateInternship;

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";
// import { Building2, Plus } from "lucide-react";
// import { useState } from "react";

// const CreateInternship = () => {
//   const [activeTab, setActiveTab] = useState("Internship"); // 👈 Track selected tab

//   const [formData, setFormData] = useState({
//     companyName: "",
//     title: "",
//     description: "",
//     eligibility: "",
//     openings: "",
//   });

//   const { toast } = useToast();

//   const handleInputChange = (field: string, value: string) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (
//       !formData.companyName ||
//       !formData.title ||
//       !formData.description ||
//       !formData.eligibility ||
//       !formData.openings
//     ) {
//       toast({
//         title: "Missing Information",
//         description: "Please fill in all required fields.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (parseInt(formData.openings) <= 0) {
//       toast({
//         title: "Invalid Openings",
//         description: "Number of openings must be greater than 0.",
//         variant: "destructive",
//       });
//       return;
//     }

//     toast({
//       title: "Internship Created!",
//       description: `Successfully created internship posting for ${formData.companyName}.`,
//     });

//     setFormData({
//       companyName: "",
//       title: "",
//       description: "",
//       eligibility: "",
//       openings: "",
//     });
//   };

//   return (
//     <div className="space-y-6">
//       {/* ✅ Navigation Bar */}
//       <div className="border-b pb-3">
//         {/* <h1 className="text-2xl font-bold text-center mb-3">
//           Create Internship
//         </h1> */}
//         <nav className="flex justify-center space-x-6 border-y py-3 bg-gray-50 rounded-md shadow-sm">
//           {["Trainning/Skill Workshop", "Consultancy Work/Project", "Placement", "Internship", "Guest Lecture", "Industrial Visit"].map(
//             (tab) => (
//               <Button
//                 key={tab}
//                 variant={activeTab === tab ? "default" : "ghost"}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab}
//               </Button>
//             )
//           )}
//         </nav>
//       </div>

//       {/* ✅ Content area changes with tab */}
//       <div className="max-w-3xl mx-auto mt-6">
//         {activeTab === "Internship" ? (
//           // Show Internship Form
//           <Card className="shadow-card max-w-2xl mx-auto">
//             <CardHeader>
//               <div className="flex items-center space-x-3">
//                 <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
//                   <Building2 className="h-6 w-6 text-primary-foreground" />
//                 </div>
//                 <div>
//                   <CardTitle>New Internship Posting</CardTitle>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Company Information */}
//                 <div className="space-y-4">
//                   <h3 className="text-lg font-semibold">Company Information</h3>
//                   <div className="space-y-2">
//                     <Label htmlFor="companyName">Company Name *</Label>
//                     <Input
//                       id="companyName"
//                       value={formData.companyName}
//                       onChange={(e) =>
//                         handleInputChange("companyName", e.target.value)
//                       }
//                       placeholder="Enter Company Name"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Position Details */}
//                 <div className="space-y-4">
//                   <h3 className="text-lg font-semibold">Position Details</h3>
//                   <div className="space-y-2">
//                     <Label htmlFor="title">Internship Title *</Label>
//                     <Input
//                       id="title"
//                       value={formData.title}
//                       onChange={(e) =>
//                         handleInputChange("title", e.target.value)
//                       }
//                       placeholder="Enter Internship Title"
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="description">Description *</Label>
//                     <Textarea
//                       id="description"
//                       value={formData.description}
//                       onChange={(e) =>
//                         handleInputChange("description", e.target.value)
//                       }
//                       placeholder="Describe the internship role, responsibilities, and what the intern will learn..."
//                       rows={4}
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="eligibility">Eligibility Criteria *</Label>
//                     <Textarea
//                       id="eligibility"
//                       value={formData.eligibility}
//                       onChange={(e) =>
//                         handleInputChange("eligibility", e.target.value)
//                       }
//                       placeholder="e.g., Required skills, academic background, prerequisites..."
//                       rows={3}
//                       required
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <Label htmlFor="openings">Number of Openings *</Label>
//                     <Input
//                       id="openings"
//                       type="number"
//                       min="1"
//                       value={formData.openings}
//                       onChange={(e) =>
//                         handleInputChange("openings", e.target.value)
//                       }
//                       placeholder="Enter Number of Openings"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="flex justify-end space-x-4 pt-6">
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() =>
//                       setFormData({
//                         companyName: "",
//                         title: "",
//                         description: "",
//                         eligibility: "",
//                         openings: "",
//                       })
//                     }
//                   >
//                     Clear Form
//                   </Button>
//                   <Button
//                     type="submit"
//                     className="bg-gradient-primary hover:bg-primary-dark"
//                   >
//                     <Plus className="h-4 w-4 mr-2" />
//                     Create Internship
//                   </Button>
//                 </div>
//               </form>
//             </CardContent>
//           </Card>
//         ) : (
//           // Show Placeholder for other tabs
//           <div className="p-6 border rounded-md text-center text-gray-600 bg-gray-50 shadow-sm">
//             Content for <b>{activeTab}</b> goes here
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CreateInternship;
