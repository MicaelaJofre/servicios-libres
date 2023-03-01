import Image from "next/image"
import Link from "next/link"

type Link = {
  text: string,
  url: string
}

type Props = {
  title: string,
  subtitle?: string,
  description?: string,
  img: string,
  link: Link
}

const AppBanner = ({ title, subtitle, description, img, link }: Props) => {
  return (
    <div className="w-full h-auto bg-orange-gradient relative">
      <div className="bg-[#EC6061] absolute -left-5 -top-5 rounded-full w-24 h-24"></div>
      <div className="bg-[#EC6061] absolute -right-14 -bottom-16 rounded-full w-56 h-56"></div>
      <Image className="absolute w-auto h-[98%] right-4 bottom-0" src={img} alt={title + ' image'} width={500} height={500}/>
      <div className="w-full h-full z-10 relative px-5 pt-5 pb-3 text-white tracking-wide">
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col max-w-[60%] gap-0.5 h-full text-gray-100">
            <h2 className="text-xl italic font-semibold capitalize">{title}</h2>
            {description && <p className="text-sm opacity-90">{description}</p>}
            {subtitle && <h3 className="text-xl font-semibold">{subtitle}</h3>}
          </div>
          <Link className="py-2 px-5 mt-4 bg-slate-900 text-gray-300 text-lg rounded-xl font-semibold w-fit" href={link.url}>{link.text}</Link>
        </div>
      </div>
    </div>
  )
}

export default AppBanner