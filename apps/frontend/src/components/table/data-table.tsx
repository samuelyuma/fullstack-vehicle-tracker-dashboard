import { EllipsisVertical, Loader2, Power, PowerOff } from "lucide-react";
import { useNavigate } from "react-router";

import type { Vehicle } from "@/models/vehicle";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ScrollArea } from "../ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface DataTableProps {
  isLoading?: boolean;
  headers: string[];
  data: Vehicle[];
}

export function DataTable({
  isLoading = false,
  headers,
  data,
}: DataTableProps) {
  const navigate = useNavigate();

  return (
    <ScrollArea className="h-[90svh] w-full rounded-md border">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-muted">
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={0} className="flex h-24 text-center">
                <Loader2 className="animate-spin text-blue-500" />{" "}
              </TableCell>
            </TableRow>
          ) : (
            data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className="px-1.5 text-muted-foreground"
                  >
                    {item.status === "ACTIVE" ? (
                      <Power className="text-green-500 " />
                    ) : (
                      <PowerOff className="text-red-500 " />
                    )}
                    {item.status === "ACTIVE" ? "Active" : "Inactive"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <EllipsisVertical />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onClick={() => navigate(`/dashboard/${item.id}`)}
                        >
                          View Detail
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </ScrollArea>
  );
}
