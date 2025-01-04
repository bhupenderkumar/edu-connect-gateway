import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, MoreHorizontal, Pencil, Trash } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { supabase } from "@/integrations/supabase/client";
import { CreateFeeForm } from "./CreateFeeForm";

interface Fee {
  id: string;
  student_id: string | null;
  amount: number;
  due_date: string;
  status: string;
  payment_date: string | null;
  created_at: string | null;
  template_id: string | null;
  month: number;
  year: number;
  balance_remaining: number;
  notes: string | null;
  document_url: string | null;
  submitted_by: string | null;
}

const FeesPage = () => {
  const { toast } = useToast();
  const [fees, setFees] = useState<Fee[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ["fees"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("fees")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  useEffect(() => {
    if (data) {
      setFees(data);
    }
  }, [data]);

  const columns: ColumnDef<Fee>[] = [
    {
      accessorKey: "student_id",
      header: "Student ID",
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        return `$${row.getValue("amount")}`;
      },
    },
    {
      accessorKey: "balance_remaining",
      header: "Balance",
      cell: ({ row }) => {
        return `$${row.getValue("balance_remaining")}`;
      },
    },
    {
      accessorKey: "month",
      header: "Month/Year",
      cell: ({ row }) => {
        const month = row.getValue("month");
        const year = row.original.year;
        return `${month}/${year}`;
      },
    },
    {
      accessorKey: "due_date",
      header: "Due Date",
      cell: ({ row }) => {
        return new Date(row.getValue("due_date")).toLocaleDateString();
      },
    },
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "payment_date",
      header: "Payment Date",
      cell: ({ row }) => {
        const date = row.getValue("payment_date");
        return date ? new Date(date as string).toLocaleDateString() : "-";
      },
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const fee = row.original;

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
                    title: "Edit fee",
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
                    title: "Delete fee",
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
            <h2 className="text-3xl font-bold tracking-tight">Fees</h2>
          </div>
          <div className="text-red-500">Error loading fees: {error.message}</div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Fees</h2>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Fee
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Create New Fee</DialogTitle>
              </DialogHeader>
              <CreateFeeForm onSuccess={() => setIsCreateOpen(false)} />
            </DialogContent>
          </Dialog>
        </div>
        <DataTable
          columns={columns}
          data={fees}
          searchKey="student_id"
          isLoading={isLoading}
        />
      </div>
    </DashboardLayout>
  );
};

export default FeesPage;