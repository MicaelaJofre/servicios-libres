import Image from "next/image"

type Props = {
  img: string
}

const AdBanner = ({ img }: Props) => {
  return (
    <div>
      <Image src={img} alt='publicity-banner' width={400} height={250} />
    </div>
  )
}

export default AdBanner