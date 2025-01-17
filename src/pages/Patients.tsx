import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Patients = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Patient Management</h1>
        <p className="text-muted-foreground">Register and manage patient information</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Patient Registration</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Patient registration form will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Patients;