import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";

interface Teacher {
  id: string;
  full_name: string;
  role: string;
  phone_number: string | null;
  created_at: string;
}

const TeachersPage = () => {
  const { toast } = useToast();
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("role", "teacher");

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setTeachers(data);
    }
  }, [data]);

  const columns: ColumnDef<Teacher>[] = [
    {
      accessorKey: "full_name",
      header: "Name",
    },
    {
      accessorKey: "phone_number",
      header: "Phone",
    },
    {
      accessorKey: "created_at",
      header: "Join Date",
      cell: ({ row }) => {
        return new Date(row.getValue("created_at")).toLocaleDateString();
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const teacher = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  toast({
                    title: "Edit teacher",
                    description: "This feature is coming soon...",
                  });
                }}
              >
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  toast({
                    title: "Delete teacher",
                    description: "This feature is coming soon...",
                  });
                }}
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  if (error) {
    return (
      <DashboardLayout>
        <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Teachers</h2>
          </div>
          <div className="text-red-500">Error loading teachers: {error.message}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Teachers</h2>
          <Button
            onClick={() => {
              toast({
                title: "Add teacher",
                description: "This feature is coming soon...",
              });
            }}
          >
            Add Teacher
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={teachers}
          searchKey="full_name"
        />
      </div>
    </DashboardLayout>
  );
};

export default TeachersPage;