import Image from "next/image"

type Props = {
  img: string,
  text: string
}

const Avatar = ({ img, text }: Props) => {
  return (
    <div className="flex gap-2 p-2">
      <div className="rounded-full border flex items-center justify-center p-1 cursor-pointer">
        <Image className="rounded-full" src={img} alt='profile-image' width={48} height={48}></Image>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-gray-300 text-sm leading-3">¡Bienvenido!</p>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  )
}

export default Avatar