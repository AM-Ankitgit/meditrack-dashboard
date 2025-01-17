import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, FileText, Activity } from "lucide-react";

const stats = [
  {
    title: "Total Patients",
    value: "1,234",
    icon: Users,
    trend: "+12%",
    color: "text-blue-600",
  },
  {
    title: "Appointments Today",
    value: "42",
    icon: Calendar,
    trend: "+5%",
    color: "text-green-600",
  },
  {
    title: "Pending Reports",
    value: "15",
    icon: FileText,
    trend: "-2%",
    color: "text-orange-600",
  },
  {
    title: "Recovery Rate",
    value: "92%",
    icon: Activity,
    trend: "+3%",
    color: "text-purple-600",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome to your medical dashboard</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {stat.trend} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;