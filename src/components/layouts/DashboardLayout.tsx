import { ReactNode } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Calendar,
  CreditCard,
  FileText,
  Bell,
  BarChart,
  TestTube2,
  Settings,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      title: "Students",
      icon: Users,
      path: "/students",
    },
    {
      title: "Teachers",
      icon: GraduationCap,
      path: "/teachers",
    },
    {
      title: "Classes",
      icon: BookOpen,
      path: "/classes",
    },
    {
      title: "Homework",
      icon: ClipboardList,
      path: "/homework",
    },
    {
      title: "Attendance",
      icon: Calendar,
      path: "/attendance",
    },
    {
      title: "Fees",
      icon: CreditCard,
      path: "/fees",
    },
    {
      title: "Documents",
      icon: FileText,
      path: "/documents",
    },
    {
      title: "Notifications",
      icon: Bell,
      path: "/notifications",
    },
    {
      title: "Analytics",
      icon: BarChart,
      path: "/analytics",
    },
    {
      title: "Tests",
      icon: TestTube2,
      path: "/tests",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar>
          <SidebarHeader className="border-b border-border px-2">
            <div className="flex h-16 items-center px-2">
              <h2 className="text-lg font-semibold">First Step School</h2>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton
                      onClick={() => navigate(item.path)}
                      isActive={location.pathname === item.path}
                      tooltip={item.title}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-y-auto bg-background">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;