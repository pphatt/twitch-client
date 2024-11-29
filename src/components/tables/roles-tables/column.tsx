"use client"

import type { GetAllRolesResponseDto } from "@modules/user/presentation/http/dto/response/admin/role/getl-all-roles.response.dto"
import { type ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"

import { Checkbox } from "@/components/ui/checkbox"
import {RoleCellAction} from "@/components/tables/roles-tables/cell-action";

export const columns: ColumnDef<GetAllRolesResponseDto>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
    cell: (value) => {
      return format(value.row.original.createdAt, "PPP")
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <RoleCellAction data={row.original} />,
  },
]
