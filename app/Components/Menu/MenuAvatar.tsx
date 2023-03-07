import Image from "next/image"
import Link from "next/link"

const MenuAvatar = () => {
  return (
    <section className="p-1 border border-orange-light rounded-xl flex gap-2">
      <div className="rounded-xl h-fit overflow-hidden">
        <Image src='/images/avatar-placeholder.png' alt='avatar image' width={64} height={64}/>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-lg font-bold">Jimmy Sulivan</p>
        <p className="text-gray-300 text-xs">placeholder@gmail.com</p>
        <Link href='/' className="text-sm text-blue-600 font-semibold">Edit</Link>
      </div>
    </section>
  )
}

export default MenuAvatar