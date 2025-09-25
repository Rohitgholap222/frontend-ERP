import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Consultancy from "./Consultancy";
import CreateInternship from "../CreateInternship";
import GuestLecture from "./GuestLecture";
import IndustrialVisit from "./IndustrialVisit";
import Placement from "../Placement";
import Training from "../Training";

const ActivitiesPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Activities Management</h1>

      <Tabs defaultValue="internship" className="w-full">
        {/* Navigation Bar */}
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="training">Training / Skill Workshop</TabsTrigger>
          <TabsTrigger value="consultancy">Consultancy Project</TabsTrigger>
          <TabsTrigger value="placement">Placement</TabsTrigger>
          <TabsTrigger value="internship">Internship</TabsTrigger>
          <TabsTrigger value="guest">Guest Lecture</TabsTrigger>
          <TabsTrigger value="industrial">Industrial Visit</TabsTrigger>
        </TabsList>

        {/* Tab Contents */}
        <TabsContent value="training"><Training /></TabsContent>
        <TabsContent value="consultancy"><Consultancy /></TabsContent>
        <TabsContent value="placement"><Placement /></TabsContent>
        <TabsContent value="internship"><CreateInternship /></TabsContent>
        <TabsContent value="guest"><GuestLecture /></TabsContent>
        <TabsContent value="industrial"><IndustrialVisit /></TabsContent>
      </Tabs>
    </div>
  );
};

export default ActivitiesPage;
