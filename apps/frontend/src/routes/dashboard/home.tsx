import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

import { DataTable } from "@/components/table/data-table";

import { useVehicleStore } from "@/store/useVehicleStore";

export default function DashboardHome() {
  const { vehicles, loading, findAllVehicles, error, clearError } =
    useVehicleStore();

  useEffect(() => {
    findAllVehicles();
    if (error !== null) {
      toast.error(error);
      clearError();
    }
  }, [findAllVehicles, error, clearError]);

  return (
    <section className="flex w-full flex-col gap-y-4 p-4 pt-15">
      {loading ? (
        <div className="flex h-[80svh] w-full items-center justify-center rounded-lg border bg-muted">
          <Loader2 className="size-12 animate-spin text-blue-500" />
        </div>
      ) : (
        <DataTable headers={["Nama", "Status", ""]} data={vehicles} />
      )}
    </section>
  );
}
