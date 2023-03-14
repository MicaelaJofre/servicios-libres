import Image from 'next/image'
import StarIcon from '../Icons/StarIcon'
import VerifiedIcon from '../Icons/VerifiedIcon'

type Rate = {
  average: number
  quantity: number
}

type Props = {
  name: string
  verified: boolean
  image: string
  rate: Rate
  price: number
}

function roundHalf(num: number) {
  return Math.round(num * 2) / 2
}

const setStarColor = (index: number, average: number) => {
  const residual = index - roundHalf(average)

  if (residual === 0.5) {
    return {
      firstColor: '#FFC37B',
      secondColor: '#DDDDDD'
    }
  } else if (residual >= 1) {
    return {
      firstColor: '#DDDDDD',
      secondColor: '#DDDDDD'
    }
  }

  return {
    firstColor: '#FFC37B',
    secondColor: '#FFC37B'
  }
}

const FeaturedWorker = ({ name, verified, image, rate, price }: Props) => {
  return (
    <div className="w-56 h-44 relative">
      <div className="rounded-2xl flex items-center justify-center h-[70px] w-[70px] p-1 bg-white z-10 absolute">
        <Image
          className="rounded-2xl relative object-cover"
          src={image}
          alt={name + 'image-profile'}
          width={250}
          height={250}
        ></Image>
      </div>
      <div className="w-[185px] bg-[#FDFCFD] rounded-xl absolute right-3 bottom-0 p-4 pr-8 flex flex-col gap-5">
        <div className="self-end">
          {verified ? (
            <div className="flex gap-1 items-center">
              <VerifiedIcon
                color={{ firstColor: '#D06293' }}
                width={18}
                height={18}
              />
              <p className="text-xs text-[#AAAAAA] leading-none">Verificado</p>
            </div>
          ) : (
            <div className="h-[18px]"></div>
          )}
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="capitalize font-semibold text-sm">{name}</p>
          <div className="flex items-end gap-1">
            <div className="flex gap-0.5">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <StarIcon
                    key={name + '-star-' + index}
                    width={14}
                    height={14}
                    color={setStarColor(index + 1, rate.average)}
                  />
                ))}
            </div>
            <span className="text-xs text-[#AAAAAA] leading-3">
              ({rate.quantity})
            </span>
          </div>
          <p className="text-sm font-semibold text-orange-light">${price}/hr</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedWorker
