// src/components/student/StudentOpportunityNav.tsx
import { Link, useLocation } from "react-router-dom";

const StudentOpportunityNav = () => {
  const location = useLocation();

  const modules = [
    { to: "/student/apply/training", label: "Training / Skill Workshop" },
    { to: "/student/apply/consultancy", label: "Consultancy Work / Project" },
    { to: "/student/apply/placement", label: "Placement" },
    { to: "/student/apply/internship", label: "Internship" },
    { to: "/student/apply/guest-lecture", label: "Guest Lecture" },
    { to: "/student/apply/industrial-visit", label: "Industrial Visit" },
  ];

  return (
    <div className="flex gap-4 flex-wrap border-b pb-2">
      {modules.map((mod) => {
        const isActive = location.pathname === mod.to;
        return (
          <Link
            key={mod.to}
            to={mod.to}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            {mod.label}
          </Link>
        );
      })}
    </div>
  );
};

export default StudentOpportunityNav;
