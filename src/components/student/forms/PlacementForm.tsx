// Example: PlacementForm.tsx
import { useParams } from "react-router-dom";

const PlacementForm = () => {
  const { postId } = useParams<{ postId: string }>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Applied for placement post ID: ${postId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 border p-4 rounded-md">
      <h2 className="text-xl font-bold">Placement Application</h2>
      <input
        type="text"
        placeholder="Full Name"
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded w-full"
        required
      />
      <button type="submit" className="px-3 py-1 bg-primary text-white rounded">
        Submit
      </button>
    </form>
  );
};

export default PlacementForm;
