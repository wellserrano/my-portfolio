import avatarPicture from '../assets/avatar.png'

export function Avatar() {
  return (
    <div className="w-32 h-32 rounded-full border-4 border-[#FFE071] p-1">
      <img src={ avatarPicture } alt="" />
    </div>
  )
}