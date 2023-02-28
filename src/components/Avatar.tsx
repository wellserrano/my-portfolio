import avatarPicture from '../assets/avatar.png'
import * as AvatarReact from '@radix-ui/react-avatar';

export function Avatar() {
  return (
    <AvatarReact.Root className="w-32 h-32 rounded-full border-4 border-[#FFE071] p-1 mb-10">
       <AvatarReact.Image
        className="h-full w-full rounded-[inherit] object-cover"
        src={ avatarPicture }
        alt="my profile picture"
      />
      <AvatarReact.Fallback
        className="text-violet11 leading-1 flex h-full w-full rounded-[inherit] items-center justify-center bg-[#FFE071] text-base font-medium"
        delayMs={600}
      >
        WS
      </AvatarReact.Fallback>
    </AvatarReact.Root>
  )
}