import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <div className='shadow-sm border-b bg-white sticky z-100'>
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* left */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* middle */}
        <div className='max-w-xs'>
        <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
            type="text"
            placeholder="Search"
          />
        </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
            <HomeIcon className='navBtn' />
            <MenuIcon className='md:hidden h-10 w-10' />
            <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
<HeartIcon className='absolute -top-1 left-2 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center animate-pulse text-red-500' />
            </div>
            <PlusCircleIcon className='navBtn' />
            <UserGroupIcon className='navBtn' />
            <HeartIcon className='navBtn' />
            <img src='https://avatars.githubusercontent.com/u/74497003?v=4'  className='h-8 rounded-full' />
        </div>
      </div>
    </div>
  );
}

export default Header;
