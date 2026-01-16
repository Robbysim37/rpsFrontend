import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useAuth } from "@/context/Auth/AuthContext"

export function UserAvatar() {

const authContext = useAuth()

console.log("Here is the Avatar User:", authContext.user)

  return (
    <Avatar className="h-12 w-12">
      <AvatarImage
        src={authContext.user?.avatarUrl}
        alt="User avatar"
      />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>
  )
}
