import type { User } from "@prisma/client";

export interface AvatarProps {
  user: Partial<User> | null | undefined;
  onClick?: () => void;
  onHover?: () => void;
}

export default function Avatar({ user, onClick, onHover }: AvatarProps) {
  let avatarContent = "AN";

  if (user?.fullname) {
    const name = user.fullname.split(" ");
    avatarContent = name[0].charAt(0) + name[1].charAt(0);
  }

  return (
    <div
      className="relative grid h-8 w-8 cursor-pointer place-items-center overflow-hidden 
      rounded-full bg-blue-500 shadow-md hover:bg-blue-300"
      onClick={onClick}
      onMouseEnter={onHover}
      data-element="avatar"
    >
      <span className="text-sm text-gray-100 dark:text-gray-300">
        {avatarContent}
      </span>
    </div>
  );
}
