import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SignupForm } from "./SignupForm";

export default function SignupPage() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Card>
        <CardHeader>
          <div className="text-lg font-semibold">Create your account</div>
          <div className="text-sm text-zinc-600">
            Students can enquire and report. Landlords must be verified before listing.
          </div>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}

