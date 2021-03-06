import { useEffect } from "react"

function Story({ username,random}) {
    return (
        <div>
            <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-cover cursor-pointer hover:scale-110 transition transform duration-200 ease-out' src={`https://picsum.photos/200/300?random=${random}`} alt="" />
            <p className='text-xs w-14 truncate text-center'>{username}</p>
        </div>
    )
}

export default Story
