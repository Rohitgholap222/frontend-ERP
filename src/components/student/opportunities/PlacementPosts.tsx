// src/components/student/opportunities/PlacementPosts.tsx
import { useState } from "react";
import PlacementForm from "../forms/PlacementForm";

const mockPlacements = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Google",
    location: "Bangalore",
    eligibility: "BE Computer/IT",
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "TCS",
    location: "Pune",
    eligibility: "Any Graduate with SQL skills",
  },
];

const PlacementPosts = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {mockPlacements.map((post) => (
        <div
          key={post.id}
          className="border p-4 rounded-md shadow-sm space-y-2"
        >
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-sm text-muted-foreground">{post.company}</p>
          <p className="text-sm">Location: {post.location}</p>
          <p className="text-sm">Eligibility: {post.eligibility}</p>

          <button
            onClick={() => setSelectedId(post.id)}
            className="bg-primary text-white px-3 py-1 rounded-md"
          >
            Apply
          </button>

          {/* Show Apply Form if this post is selected */}
          {selectedId === post.id && <PlacementForm postId={post.id} />}
        </div>
      ))}
    </div>
  );
};

export default PlacementPosts;
