import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Appointments = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Appointments</h1>
        <p className="text-muted-foreground">Manage patient appointments</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Appointment Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Appointment calendar and scheduling interface will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Appointments;