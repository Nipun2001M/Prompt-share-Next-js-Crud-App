'use client'

import React, { useEffect, useState } from 'react'
import PromptCard from './PromptCard'


const PromptCardList=({data,handleTagClick})=>{
console.log('dataaa',data)
  return(
    <div className='mt-16 prompt_layout items-center justify-center'>
    {data.map((post)=>(

      <PromptCard
      key={post._id}
      post={post}
      handleTagClick={handleTagClick}

      />
    ))}

  </div>

  )
}


const Feed = () => {
  const [searchtext, setsearchtext] = useState('')
  const [posts, setposts] = useState([])
  const handleSearchChange=(e)=>{


  }
  const fetchposts=async ()=>{
    console.log('ca;;ted fetchpost')
    const response=await fetch('/api/prompt')
    const data=await response.json()
    setposts(data)

  }
  useEffect(()=>{
   
    fetchposts()

  },[])

  return (
    <section>
      <form className='relative w-full flex-center'>

        <input
        type='text'
        placeholder='search for tag or username'
        value={searchtext}
        onChange={handleSearchChange}
        className='search_input peer mt-10'

        >
        </input>
      </form>
      <PromptCardList
      data={posts}
      handleTagClick={()=>{}}

      />
    </section>
  )
}

export default Feed