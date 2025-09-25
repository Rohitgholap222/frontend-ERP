import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/training", label: "Training/Skill Workshop" },
    { path: "/consultancy", label: "Consultancy Work/Project" },
    { path: "/placement", label: "Placement" },
    { path: "/internship", label: "Internship" },
    { path: "/guest", label: "Guest Lecture" },
    { path: "/industrial", label: "Industrial Visit" },
  ];

  return (
    <nav className="flex justify-center space-x-6 border-y py-3 bg-gray-50 rounded-md shadow-sm">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`px-4 py-2 rounded ${
            location.pathname === item.path
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-200"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
