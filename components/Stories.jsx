import faker from 'faker'
import {useEffect, useState} from 'react'
import Story from './Story'
function Stories() {
    const [suggestions, setsuggestions] = useState([])
    useEffect(() => {
const suggestion = [...Array(20)].map((_, i)=>({
    ...faker.helpers.contextualCard(), 
    id:i
}))
setsuggestions(suggestion)
}, [])
    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black  '>
          {suggestions.map(profile=>(
            <Story key={profile.id}  username={profile.username} random={profile.id+3} />
          ))}
        </div> 
    )
}

export default Stories
