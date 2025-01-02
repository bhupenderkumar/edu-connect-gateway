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

interface Homework {
  id: string;
  subject: string;
  description: string;
  due_date: string;
  assigned_date: string;
  grade_id: number;
  created_at: string;
}

const HomeworkPage = () => {
  const { toast } = useToast();
  const [homework, setHomework] = useState<Homework[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["homework"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("homework")
        .select("*");

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setHomework(data);
    }
  }, [data]);

  const columns: ColumnDef<Homework>[] = [
    {
      accessorKey: "subject",
      header: "Subject",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "due_date",
      header: "Due Date",
      cell: ({ row }) => {
        return new Date(row.getValue("due_date")).toLocaleDateString();
      },
    },
    {
      accessorKey: "assigned_date",
      header: "Assigned Date",
      cell: ({ row }) => {
        return new Date(row.getValue("assigned_date")).toLocaleDateString();
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const homework = row.original;

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
                    title: "Edit homework",
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
                    title: "Delete homework",
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
            <h2 className="text-3xl font-bold tracking-tight">Homework</h2>
          </div>
          <div className="text-red-500">Error loading homework: {error.message}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Homework</h2>
          <Button
            onClick={() => {
              toast({
                title: "Add homework",
                description: "This feature is coming soon...",
              });
            }}
          >
            Add Homework
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={homework}
          searchKey="subject"
        />
      </div>
    </DashboardLayout>
  );
};

export default HomeworkPage;