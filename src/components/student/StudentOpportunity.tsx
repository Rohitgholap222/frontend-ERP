// src/components/student/StudentOpportunity.tsx
import StudentOpportunityNav from "@/components/student/StudentOpportunityNav";



const StudentOpportunity = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Student Opportunity</h1>
      <p className="text-muted-foreground">
        Select a module below to view available posts and apply.
      </p>

      {/* Top module navigation bar */}
      <StudentOpportunityNav />
    </div>
  );
};

export default StudentOpportunity;




// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Building2, MapPin, Search, Users } from 'lucide-react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { mockInternships } from '../../data/mockData';

// const StudentOpportunity = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const navigate = useNavigate();

//   const filteredInternships = mockInternships.filter(
//     internship =>
//       internship.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       internship.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleApply = (internshipId: number) => {
//     navigate(`/student/apply/${internshipId}`);
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold tracking-tight">Available Internships</h1>
//         {/* <p className="text-muted-foreground">Discover and apply to exciting internship opportunities.</p> */}
//       </div>

//       {/* Search */}
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//         <Input
//           placeholder="Search internships by company or title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="pl-10"
//         />
//       </div>

//       {/* Internship Cards */}
//       <div className="grid gap-6 md:grid-cols-2">
//         {filteredInternships.map((internship) => (
//           <Card key={internship.internship_id} className="shadow-card hover:shadow-md transition-shadow">
//             <CardHeader>
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
//                     <Building2 className="h-6 w-6 text-primary-foreground" />
//                   </div>
//                   <div>
//                     <CardTitle className="text-lg">{internship.title}</CardTitle>
//                     <CardDescription className="font-medium text-foreground">
//                       {internship.company_name}
//                     </CardDescription>
//                   </div>
//                 </div>
//                 <Badge variant="secondary">
//                   <Users className="h-3 w-3 mr-1" />
//                   {internship.openings} openings
//                 </Badge>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <p className="text-sm text-muted-foreground line-clamp-3">
//                 {internship.description}
//               </p>
              
//               <div className="space-y-2">
//                 <h4 className="text-sm font-semibold">Eligibility Criteria:</h4>
//                 <p className="text-sm text-muted-foreground">{internship.eligibility}</p>
//               </div>

//               <div className="flex justify-between items-center pt-4">
//                 <div className="flex items-center text-sm text-muted-foreground">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   Remote/Hybrid
//                 </div>
//                 <Button 
//                   onClick={() => handleApply(internship.internship_id)}
//                   className="bg-gradient-primary hover:bg-primary-dark"
//                 >
//                   Apply Now
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {filteredInternships.length === 0 && (
//         <div className="text-center py-12">
//           <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
//           <h3 className="mt-2 text-sm font-semibold text-gray-900">No internships found</h3>
//           <p className="mt-1 text-sm text-muted-foreground">
//             Try adjusting your search criteria.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentOpportunity;