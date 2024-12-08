"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { generatePagination } from "@/utils/common"
import { AdminRepository } from "@modules/user/infrastructure/repository/admin.repository"
import { useQuery } from "@tanstack/react-query"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table"

import { useDebounce } from "@/hooks/useDebounce.hooks"
import { useMounted } from "@/hooks/useMounted.hooks"
import { Input } from "@/components/ui/input"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import styles from "@/components/tables/user-tables/user-data-table/style.module.scss"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchKey: string
  totalUsers: number
  page: number
  rows: number
}

export function UserDataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  totalUsers,
  page,
  rows,
}: DataTableProps<TData, TValue>) {
  // const { data: userData } = useQuery({
  //   queryKey: ["users-dashboard"],
  //   queryFn: async ({ pageParam = 1 }) => {
  //     const { data } = await AdminRepository.getAllUsers()
  //
  //     return
  //   },
  //   initialData: () => {
  //     return {
  //       pages: [data],
  //       pageParams: [page],
  //     }
  //   },
  //   initialPageParam: 1,
  //   refetchOnMount: true,
  //   refetchOnWindowFocus: true,
  // })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = React.useTransition()

  const isMounted = useMounted()

  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const canNextPage = totalUsers > rows * page
  const canPrevPage = page > 1
  const totalPages = Math.ceil(totalUsers / rows)

  const q = searchParams?.get("q") ?? ""

  const paginationArr = generatePagination(page, totalPages)

  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString())

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, String(value))
        }
      }

      return newSearchParams.toString()
    },
    [searchParams]
  )

  const [query, setQuery] = React.useState<string>(q)
  const debouncedQuery = useDebounce(query, 300)

  React.useEffect(() => {
    if (!isMounted) return

    startTransition(() => {
      const newQueryString = createQueryString({
        q: debouncedQuery !== "" ? debouncedQuery : null,
        page: 1,
        rows,
      })

      router.push(`${pathname}?${newQueryString}`, {
        scroll: false,
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery])

  const queryURL = React.useCallback(
    (_rows?: number) => {
      return createQueryString({
        q: debouncedQuery !== "" ? debouncedQuery : null,
        page: null,
        rows: _rows ?? rows,
      })
    },
    [createQueryString, debouncedQuery, rows]
  )

  return (
    <>
      <div className={styles["action-group"]}>
        <Input
          placeholder={`Search ${searchKey}...`}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
          }}
          className={styles["search"]}
        />

        <div className={styles["select-container"]}>
          <p className={styles["select-container-text"]}>Rows per page</p>

          <Select>
            <SelectTrigger className={styles["select-trigger"]}>
              <SelectValue
                placeholder={rows ?? "Select rows"}
                defaultValue={rows ?? 50}
              />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <div className={styles["select-group"]}>
                  {[10, 20, 30, 50].map((value, index) => (
                    <Link
                      key={index}
                      href={`${pathname}?page=1&${queryURL(value)}`}
                      className={styles["select-item"]}
                      data-select={value === rows}
                    >
                      {value}
                    </Link>
                  ))}
                </div>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ScrollArea className={styles["scroll-area"]}>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              isPending ? (
                [...(Array(5) as number[])].map((_, index) => (
                  <TableRow key={index}>
                    {[...(Array(7) as number[])].map((_, index) => (
                      <TableCell key={index}>
                        <Skeleton
                          style={{
                            height: "55px",
                            width: "100%",
                          }}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className={styles["not-result-row"]}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className={styles["description-row"]}>
        <div className={styles["description"]}>
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        <div className={styles["pagination-wrapper"]}>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  aria-disabled={!canPrevPage}
                  tabIndex={!canPrevPage ? -1 : undefined}
                  className={!canPrevPage ? styles["disabled"] : undefined}
                  href={`${pathname}?page=${page - 1}&${queryURL()}`}
                />
              </PaginationItem>

              {paginationArr[0] !== 1 && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              {paginationArr.map((value, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`${pathname}?page=${value}&${queryURL()}`}
                    $isActive={value === page}
                  >
                    {value}
                  </PaginationLink>
                </PaginationItem>
              ))}

              {paginationArr[paginationArr.length - 1] !== totalPages && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  aria-disabled={!canNextPage}
                  tabIndex={!canNextPage ? -1 : undefined}
                  className={!canNextPage ? styles["disabled"] : undefined}
                  href={`${pathname}?page=${page + 1}&${queryURL()}`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  )
}
