import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      });
      navigate("/auth/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while logging out",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">First Step Public School</h1>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h2>
          <p className="text-xl text-gray-600">Start managing your school here!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;