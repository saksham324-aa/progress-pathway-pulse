
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, BookOpen, TrendingUp, Award } from "lucide-react";
import { OverviewChart } from "./OverviewChart";

const stats = [
  {
    title: "Total Students",
    value: "1,234",
    change: "+12%",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Active Courses",
    value: "45",
    change: "+3%",
    icon: BookOpen,
    color: "text-green-600"
  },
  {
    title: "Avg. Progress",
    value: "78%",
    change: "+5%",
    icon: TrendingUp,
    color: "text-purple-600"
  },
  {
    title: "Certificates",
    value: "892",
    change: "+18%",
    icon: Award,
    color: "text-orange-600"
  }
];

const recentActivities = [
  { student: "Alice Johnson", course: "Java Programming", progress: 85, status: "On Track" },
  { student: "Bob Smith", course: "Data Structures", progress: 72, status: "Behind" },
  { student: "Carol Davis", course: "Web Development", progress: 95, status: "Ahead" },
  { student: "David Wilson", course: "Database Design", progress: 68, status: "Behind" },
  { student: "Emma Brown", course: "Software Testing", progress: 91, status: "On Track" },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back, Admin. Here's what's happening with your students.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-green-600 font-medium">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Course Progress Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <OverviewChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Student Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{activity.student}</p>
                    <p className="text-sm text-muted-foreground">{activity.course}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm font-medium">{activity.progress}%</p>
                      <p className={`text-xs ${
                        activity.status === 'Ahead' ? 'text-green-600' :
                        activity.status === 'Behind' ? 'text-red-600' : 'text-blue-600'
                      }`}>
                        {activity.status}
                      </p>
                    </div>
                    <Progress value={activity.progress} className="w-20" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
