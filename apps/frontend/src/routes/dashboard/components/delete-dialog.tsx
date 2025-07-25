import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import useDialogStore from "@/store/useOverlayStore";
import { useVehicleStore } from "@/store/useVehicleStore";

export default function DeleteDialog() {
  const { isOpen, close } = useDialogStore();
  const { currentVehicle } = useVehicleStore();

  return (
    <AlertDialog
      open={isOpen["confirm-delete"]}
      onOpenChange={(isOpen) => !isOpen && close("confirm-delete")}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure to delete {currentVehicle?.name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
