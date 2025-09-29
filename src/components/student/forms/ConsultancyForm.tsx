import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Building2, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";

const mockPosts = [
  { id: 2, title: "AI Consultancy Project", description: "Work on AI solutions", eligibility: "CS/IT", openings: 5, location: "Onsite" },
];

const ConsultancyForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = mockPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (postId: number) => alert(`Applied for consultancy post ID: ${postId}`);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Apply for Consultancy Work / Project</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input placeholder="Search posts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="shadow-card hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <CardDescription className="font-medium text-foreground">{post.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary">
                    <Users className="h-3 w-3 mr-1" />
                    {post.openings} openings
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">{post.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Eligibility Criteria:</h4>
                  <p className="text-sm text-muted-foreground">{post.eligibility}</p>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {post.location}
                  </div>
                  <Button onClick={() => handleApply(post.id)} className="bg-gradient-primary hover:bg-primary-dark">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Building2 className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No posts found</h3>
        </div>
      )}
    </div>
  );
};

export default ConsultancyForm;
