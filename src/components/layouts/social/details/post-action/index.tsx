import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { Edit, Trash } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { DeletePostModal } from "@/components/layouts/social/components/delete-post-modal"
import styles from "@/components/layouts/social/details/post-action/style.module.scss"

interface PostActionProps {
  postId: string
}

export default function PostAction({ postId }: PostActionProps) {
  const [open, setOpen] = React.useState(false)

  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const onConfirm = () => {
    startTransition(async () => {
      try {
        await SocialRepository.deletePost({ postId })

        setOpen(false)
        router.refresh()
        toast.success("Delete post successfully")
      } catch (err) {
        // catchError(err)
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  return (
    <div className={styles["post-action-layout-wrapper"]}>
      <DeletePostModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={isPending}
      />

      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button $variant={"ghost"} className={styles["post-action-wrapper"]}>
            <Icons.ellipsis />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className={styles["dropdown-content-wrapper"]}
        >
          <DropdownMenuLabel
            className={styles["dropdown-content-label-wrapper"]}
          >
            More
          </DropdownMenuLabel>

          <DropdownMenuItem asChild>
            <Link
              className={styles["dropdown-item"]}
              href={`/social/edit-post/${postId}`}
            >
              <Edit className={styles["svg"]} />
              <span>Edit</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem
            className={styles["dropdown-item"]}
            onClick={() => setOpen(true)}
          >
            <Trash className={styles["svg"]} />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
