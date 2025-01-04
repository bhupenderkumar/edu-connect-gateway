import { ColumnDef } from "@tanstack/react-table";
import { FeeActions } from "./FeeActions";

export interface Fee {
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

export const columns: ColumnDef<Fee>[] = [
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
    cell: ({ row }) => <FeeActions fee={row.original} />,
  },
];