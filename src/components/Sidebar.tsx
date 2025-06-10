
import { Users, BookOpen, BarChart3, Home, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "students", label: "Students", icon: Users },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "reports", label: "Reports", icon: BarChart3 },
];

export const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-card border-r border-border shadow-sm">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="p-2 bg-primary rounded-lg">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">EduTracker</h1>
            <p className="text-sm text-muted-foreground">Admin Portal</p>
          </div>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-left",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-full p-6 border-t border-border">
        <div className="text-xs text-muted-foreground">
          <p>Smart Student Progress Tracker</p>
          <p>v1.0.0 - Admin Dashboard</p>
        </div>
      </div>
    </div>
  );
};
