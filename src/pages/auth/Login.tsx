import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          navigate("/");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            First Step Public School
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to your account
          </p>
        </div>

        {/* Sample Credentials Card */}
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-600">Sample Credentials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-gray-700">Admin User:</h4>
              <p className="text-sm text-gray-600">Email: admin@firststep.com</p>
              <p className="text-sm text-gray-600">Password: admin123</p>
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-700">Parent User:</h4>
              <p className="text-sm text-gray-600">Email: parent@firststep.com</p>
              <p className="text-sm text-gray-600">Password: parent123</p>
            </div>
          </CardContent>
        </Card>

        <Alert className="bg-blue-50 border-blue-100">
          <AlertDescription className="text-sm text-blue-700">
            For testing purposes, you can use any of the sample credentials above to log in.
          </AlertDescription>
        </Alert>

        <div className="mt-8">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#2563eb',
                    brandAccent: '#1d4ed8',
                  },
                },
              },
            }}
            providers={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;