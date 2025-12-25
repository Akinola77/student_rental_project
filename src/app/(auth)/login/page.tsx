import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Card>
        <CardHeader>
          <div className="text-lg font-semibold">Log in</div>
          <div className="text-sm text-zinc-600">
            StudentStay is for students and verified landlords.
          </div>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

