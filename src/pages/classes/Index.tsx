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

interface Grade {
  id: number;
  name: string;
  display_name: string;
}

const ClassesPage = () => {
  const { toast } = useToast();
  const [grades, setGrades] = useState<Grade[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["grades"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("grades")
        .select("*");

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setGrades(data);
    }
  }, [data]);

  const columns: ColumnDef<Grade>[] = [
    {
      accessorKey: "display_name",
      header: "Class Name",
    },
    {
      accessorKey: "name",
      header: "Internal Name",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const grade = row.original;

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
                    title: "Edit class",
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
                    title: "Delete class",
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
            <h2 className="text-3xl font-bold tracking-tight">Classes</h2>
          </div>
          <div className="text-red-500">Error loading classes: {error.message}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Classes</h2>
          <Button
            onClick={() => {
              toast({
                title: "Add class",
                description: "This feature is coming soon...",
              });
            }}
          >
            Add Class
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={grades}
          searchKey="display_name"
        />
      </div>
    </DashboardLayout>
  );
};

export default ClassesPage;