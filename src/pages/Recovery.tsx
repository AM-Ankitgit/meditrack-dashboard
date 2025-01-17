import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Recovery = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Recovery Status</h1>
        <p className="text-muted-foreground">Track patient recovery progress</p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recovery Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Patient recovery status tracking interface will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Recovery;