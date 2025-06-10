
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Plus, BookOpen, Users, Calendar } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Java Programming Fundamentals",
    description: "Learn core Java concepts including OOP principles",
    instructor: "Dr. Smith",
    enrolledStudents: 120,
    duration: "12 weeks",
    avgProgress: 75,
    status: "Active",
    startDate: "2024-01-15"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Master essential data structures and algorithmic thinking",
    instructor: "Prof. Johnson",
    enrolledStudents: 95,
    duration: "16 weeks",
    avgProgress: 60,
    status: "Active",
    startDate: "2024-02-01"
  },
  {
    id: 3,
    title: "Web Development with React",
    description: "Build modern web applications using React framework",
    instructor: "Ms. Davis",
    enrolledStudents: 110,
    duration: "10 weeks",
    avgProgress: 85,
    status: "Active",
    startDate: "2024-01-20"
  },
  {
    id: 4,
    title: "Database Design & Management",
    description: "Learn SQL and database optimization techniques",
    instructor: "Dr. Wilson",
    enrolledStudents: 80,
    duration: "8 weeks",
    avgProgress: 40,
    status: "Starting Soon",
    startDate: "2024-06-01"
  }
];

export const CoursesSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Course Management</h1>
          <p className="text-muted-foreground">Manage courses and track student enrollment</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Course
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Badge variant="secondary">{filteredCourses.length} courses</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={course.status === "Active" ? "default" : "secondary"}
                    >
                      {course.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{course.enrolledStudents} students</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Progress</span>
                      <span>{course.avgProgress}%</span>
                    </div>
                    <Progress value={course.avgProgress} />
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
