import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useAuth } from "@/context/Auth/AuthContext"
import { motion } from "framer-motion";

export function UserAvatar() {
  const { user, logout } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          type="button"
          aria-label="Open user menu"
          className="p-0! border-transparent! outline-none! rounded-full!"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 24px rgba(255,255,255,0.6)",
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Avatar className="h-12 w-12">
            <AvatarImage src={user?.avatarUrl} alt="User avatar" />
            <AvatarFallback>{user?.name?.[0] ?? "U"}</AvatarFallback>
          </Avatar>
        </motion.button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuLabel>{user?.name ?? "My Account"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout} className="text-red-600 focus:text-red-600">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
