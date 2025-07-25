import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";

import { AppSidebar } from "@/components/layouts/app-sidebar";
import LogoutDialog from "@/components/layouts/logout-dialog";
import LoadingPage from "@/components/pages/loading";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { useAuthStore } from "@/store/useAuthStore";

import DeleteDialog from "./delete-dialog";

export default function DashboardLayout() {
  const { isAuthenticated, isLoading, checkAuth, user } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      checkAuth();
    }
  }, [checkAuth, isAuthenticated]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <SidebarProvider>
      <LogoutDialog />
      <DeleteDialog />
      <AppSidebar user={user!} />
      <SidebarInset>
        <header className="fixed top-0 z-50 flex h-(--header-height) w-full shrink-0 items-center gap-2 border-b bg-background px-4 py-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) lg:px-6">
          <SidebarTrigger className="-ml-1" />
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
