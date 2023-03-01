import Image from "next/image"

type Props = {
  img: string
}

const AdBanner = ({ img }: Props) => {
  return (
    <Image className="h-auto" src={img} alt='publicity-banner' width={450} height={250} />
  )
}

export default AdBanner