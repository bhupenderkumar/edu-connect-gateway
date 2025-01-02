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

interface Attendance {
  id: string;
  student_id: string;
  date: string;
  status: string;
  marked_by: string;
  created_at: string;
}

const AttendancePage = () => {
  const { toast } = useToast();
  const [attendance, setAttendance] = useState<Attendance[]>([]);

  const { data, isLoading, error } = useQuery({
    queryKey: ["attendance"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("attendance")
        .select("*");

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setAttendance(data);
    }
  }, [data]);

  const columns: ColumnDef<Attendance>[] = [
    {
      accessorKey: "student_id",
      header: "Student ID",
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }) => {
        return new Date(row.getValue("date")).toLocaleDateString();
      },
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const attendance = row.original;

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
                    title: "Edit attendance",
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
                    title: "Delete attendance",
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
            <h2 className="text-3xl font-bold tracking-tight">Attendance</h2>
          </div>
          <div className="text-red-500">Error loading attendance: {error.message}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Attendance</h2>
          <Button
            onClick={() => {
              toast({
                title: "Mark attendance",
                description: "This feature is coming soon...",
              });
            }}
          >
            Mark Attendance
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={attendance}
          searchKey="student_id"
        />
      </div>
    </DashboardLayout>
  );
};

export default AttendancePage;