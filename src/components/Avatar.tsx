import avatarPicture from '../assets/avatar.png'
import * as AvatarReact from '@radix-ui/react-avatar';

export function Avatar() {
  return (
    <AvatarReact.Root className="flex justify-center items-center w-32 h-32 sm:w-52 sm:h-52 rounded-full border-4 border-emerald-500 dark:border-[#FFE071] p-1">
       <AvatarReact.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={ avatarPicture }
        alt="my profile picture"
      />
      <AvatarReact.Fallback
        className="text-red-700 leading-1 flex h-full w-full rounded-[inherit] items-center justify-center bg-[#FFE071] text-base font-medium"
        delayMs={600}
      >
        WS
      </AvatarReact.Fallback>
    </AvatarReact.Root>
  )
}