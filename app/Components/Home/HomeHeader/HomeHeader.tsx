import LocationIcon from '@icons/Location'
import Avatar from './Avatar'
import Notifications from './Notifications'
import SearchBar from './SearchBar'

const HomeHeader = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between items-center">
        <Avatar img="/images/avatar-placeholder.png" text="Logueate..." />
        <div className="flex gap-2">
          <Notifications />
          <LocationIcon width={20} height={20} color={{ firstColor: '#888' }} />
        </div>
      </div>
      <SearchBar />
    </div>
  )
}

export default HomeHeader
