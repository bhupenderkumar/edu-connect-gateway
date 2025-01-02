import DashboardLayout from "@/components/layouts/DashboardLayout";

const StudentsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Students</h2>
        </div>
        <p>Students management page coming soon...</p>
      </div>
    </DashboardLayout>
  );
};

export default StudentsPage;