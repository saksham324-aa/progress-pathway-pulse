
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Plus, Eye, Edit } from "lucide-react";
import { AddStudentDialog } from "./AddStudentDialog";

const students = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    enrolledCourses: 3,
    avgProgress: 85,
    status: "Active",
    joinDate: "2024-01-15"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@email.com",
    enrolledCourses: 2,
    avgProgress: 72,
    status: "Active",
    joinDate: "2024-02-01"
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol.davis@email.com",
    enrolledCourses: 4,
    avgProgress: 95,
    status: "Active",
    joinDate: "2024-01-10"
  },
  {
    id: 4,
    name: "David Wilson",
    email: "david.wilson@email.com",
    enrolledCourses: 1,
    avgProgress: 45,
    status: "Inactive",
    joinDate: "2024-03-05"
  }
];

export const StudentsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Student Management</h1>
          <p className="text-muted-foreground">Manage and monitor student records and progress</p>
        </div>
        <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Student
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Badge variant="secondary">{filteredStudents.length} students</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{student.name}</h3>
                    <Badge
                      variant={student.status === "Active" ? "default" : "secondary"}
                    >
                      {student.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{student.email}</p>
                  <p className="text-xs text-muted-foreground">
                    Joined {new Date(student.joinDate).toLocaleDateString()} • {student.enrolledCourses} courses
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">Avg. Progress</p>
                    <div className="flex items-center gap-2">
                      <Progress value={student.avgProgress} className="w-20" />
                      <span className="text-sm text-muted-foreground">{student.avgProgress}%</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Edit className="h-3 w-3" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddStudentDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
    </div>
  );
};
