
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { course: "Java", completed: 85, enrolled: 120 },
  { course: "Python", completed: 72, enrolled: 95 },
  { course: "Web Dev", completed: 91, enrolled: 110 },
  { course: "Database", completed: 68, enrolled: 80 },
  { course: "Testing", completed: 79, enrolled: 90 },
];

export const OverviewChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis dataKey="course" className="text-xs" />
        <YAxis className="text-xs" />
        <Tooltip 
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px"
          }}
        />
        <Bar dataKey="enrolled" fill="hsl(var(--muted))" name="Enrolled" />
        <Bar dataKey="completed" fill="hsl(var(--primary))" name="Completed" />
      </BarChart>
    </ResponsiveContainer>
  );
};
