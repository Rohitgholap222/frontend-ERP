import {
  Building2,
  CheckSquare,
  FileText,
  LayoutDashboard,
  PlusCircle,
  Users
} from 'lucide-react';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
  userRole: 'student' | 'admin';
}

const Layout = ({ children, userRole }: LayoutProps) => {
  const location = useLocation();

const studentNavItems = [
  { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/student/internships', label: 'Student Opportunity', icon: Building2 },
  { to: '/student/applications', label: 'My Applications', icon: FileText },

];



  const adminNavItems = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/admin/applications', icon: CheckSquare, label: 'Approve Applications' },
    { to: '/admin/allotments', icon: Users, label: 'Allotments' },
    { to: '/admin/industry-collaboration', icon: PlusCircle, label: 'Industry Collaboration' },
    { to: '/admin/companies', icon: PlusCircle, label: 'Companies' },

  ];

  const navItems = userRole === 'student' ? studentNavItems : adminNavItems;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-gradient-primary shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-20">
            <div className="flex items-center space-x-10">
             
              {/* JSPM GROUP Logo */}
              <img
                src="https://www.jspmrscoe.edu.in/Images/Logo/JSPM-logo.jpeg"   
                alt="College Logo"
                className="h-16 w-16 object-contain rounded-md"
              />
              

              <h1 className="text-xl font-bold text-primary-foreground">
                
                JSPM's Jayawantrao Sawant College of Engineering
              </h1>
              {/*jscoe logo*/}
              <img
                src="https://jspmjscoe.edu.in/storage/Logo/JSCOE_logo.png"   
                alt="College Logo"
                className="h-16 w-16 object-contain rounded-md"
              />
            </div>

             {/*hello*/}

            {/* <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80 text-sm">
                Welcome, {userRole === 'student' ? 'Student' : 'Admin'}
              </span>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div> */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-card rounded-lg shadow-card p-4 h-screen">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                    >
                      <item.icon className="mr-3 h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;