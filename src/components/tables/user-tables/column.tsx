"use client"

import type { User } from "@modules/user/domain/entity/user.entity"
import { type ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { IsLiveColumn } from "src/components/tables/user-tables/is-live-status"

import { Checkbox } from "@/components/ui/checkbox"
import { AccountStatusColumn } from "@/components/tables/user-tables/account-status"
import { UserCellAction } from "@/components/tables/user-tables/cell-action"

export const columns: ColumnDef<User>[] = [
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
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "displayName",
    header: "Display name",
    cell: (value) => {
      if (!value.row.original.displayName) {
        return value.row.original.username
      }

      return value.row.original.displayName
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone number",
    cell: (value) => {
      if (!value.row.original.phoneNumber) {
        return "-"
      }

      return value.row.original.phoneNumber
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (value) => {
      return value.row.original.roles[0]!.toLocaleLowerCase()
        .split("_")
        .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
        .join(" ")
    },
  },
  {
    accessorKey: "isLive",
    header: "Live status",
    cell: ({ row }) => <IsLiveColumn isLiveStatus={row.original.isLive} />,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <AccountStatusColumn accountStatus={row.original.status} />
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Joined At",
    cell: (value) => {
      return format(value.row.original.createdAt, "PPP")
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <UserCellAction data={row.original} />,
  },
]
