import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Medical Reports</h1>
        <p className="text-muted-foreground">View and manage patient reports</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Reports Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Medical reports interface will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;