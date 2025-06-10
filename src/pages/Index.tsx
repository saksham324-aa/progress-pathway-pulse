
import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { StudentsSection } from "@/components/StudentsSection";
import { CoursesSection } from "@/components/CoursesSection";
import { ReportsSection } from "@/components/ReportsSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "students":
        return <StudentsSection />;
      case "courses":
        return <CoursesSection />;
      case "reports":
        return <ReportsSection />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 p-6 ml-64">
        <div className="max-w-7xl mx-auto">
          {renderActiveSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
