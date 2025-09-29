// src/components/student/PostList.tsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlacementForm from "./forms/PlacementForm"; // import module-specific forms
import InternshipForm from "./forms/InternshipForm";
import GuestLectureForm from "./forms/GuestLectureForm";
import IndustrialVisitForm from "./forms/IndustrialVisitForm";

interface Post {
  id: number;
  title: string;
  description: string;
  eligibility: string;
  location: string;
}

const PostList = () => {
  const { module } = useParams<{ module: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch posts from backend API
    fetch(`/api/student/posts?module=${module}`)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, [module]);

  const renderForm = (postId: number) => {
    switch (module) {
      case "placement":
        return <PlacementForm postId={postId} />;
      case "internship":
        return <InternshipForm postId={postId} />;
      case "guest-lecture":
        return <GuestLectureForm postId={postId} />;
      case "industrial-visit":
        return <IndustrialVisitForm postId={postId} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Posts for {module?.replace("-", " ")}</h1>

      {posts.length === 0 && <p>No posts available</p>}

      {posts.map((post) => (
        <div
          key={post.id}
          className="border rounded-md p-4 shadow-sm space-y-2"
        >
          <h2 className="font-semibold text-lg">{post.title}</h2>
          <p>{post.description}</p>
          <p className="text-sm text-muted-foreground">Eligibility: {post.eligibility}</p>
          <p className="text-sm text-muted-foreground">Location: {post.location}</p>

          <button
            onClick={() =>
              setSelectedPostId(selectedPostId === post.id ? null : post.id)
            }
            className="px-3 py-1 bg-primary text-white rounded-md"
          >
            {selectedPostId === post.id ? "Close Form" : "Apply"}
          </button>

          {selectedPostId === post.id && renderForm(post.id)}
        </div>
      ))}
    </div>
  );
};

export default PostList;
