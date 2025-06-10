
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Download, TrendingUp, Users, BookOpen, Award } from "lucide-react";

const performanceData = [
  { month: "Jan", students: 100, courses: 8, completion: 65 },
  { month: "Feb", students: 120, courses: 10, completion: 72 },
  { month: "Mar", students: 145, courses: 12, completion: 78 },
  { month: "Apr", students: 160, courses: 14, completion: 82 },
  { month: "May", students: 180, courses: 15, completion: 85 },
  { month: "Jun", students: 200, courses: 16, completion: 88 }
];

const courseCompletionData = [
  { name: "Java Programming", value: 85, color: "#3b82f6" },
  { name: "Web Development", value: 92, color: "#10b981" },
  { name: "Data Structures", value: 76, color: "#f59e0b" },
  { name: "Database Design", value: 68, color: "#ef4444" },
  { name: "Software Testing", value: 81, color: "#8b5cf6" }
];

const reportTemplates = [
  {
    title: "Student Progress Report",
    description: "Detailed progress analysis for all enrolled students",
    type: "PDF",
    lastGenerated: "2024-06-08"
  },
  {
    title: "Course Performance Summary",
    description: "Overview of course completion rates and student feedback",
    type: "Excel",
    lastGenerated: "2024-06-07"
  },
  {
    title: "Monthly Analytics",
    description: "Comprehensive monthly performance and engagement metrics",
    type: "PDF",
    lastGenerated: "2024-06-05"
  },
  {
    title: "Instructor Dashboard",
    description: "Individual instructor performance and student outcomes",
    type: "PDF",
    lastGenerated: "2024-06-03"
  }
];

export const ReportsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">Generate comprehensive reports and analyze student performance</p>
        </div>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Export All Data
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Performance Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }}
                />
                <Line type="monotone" dataKey="students" stroke="hsl(var(--primary))" strokeWidth={2} name="Students" />
                <Line type="monotone" dataKey="completion" stroke="hsl(var(--secondary))" strokeWidth={2} name="Completion %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Course Completion Rates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseCompletionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {courseCompletionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Report Templates</CardTitle>
          <p className="text-sm text-muted-foreground">Generate and download pre-configured reports</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTemplates.map((template, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{template.title}</h3>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </div>
                  <Badge variant="outline">{template.type}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Last generated: {new Date(template.lastGenerated).toLocaleDateString()}
                  </p>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Download className="h-3 w-3" />
                    Generate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="h-4 w-4" />
              Student Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Active Students</span>
              <span className="font-medium">1,234</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">At Risk</span>
              <span className="font-medium text-red-600">23</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">High Performers</span>
              <span className="font-medium text-green-600">156</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Course Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Total Courses</span>
              <span className="font-medium">45</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Avg. Completion</span>
              <span className="font-medium">78%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Top Rated</span>
              <span className="font-medium">4.8/5</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Award className="h-4 w-4" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Certificates Issued</span>
              <span className="font-medium">892</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">This Month</span>
              <span className="font-medium text-green-600">+47</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Success Rate</span>
              <span className="font-medium">94%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
