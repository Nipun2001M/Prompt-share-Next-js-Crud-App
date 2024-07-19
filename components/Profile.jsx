import React from 'react'
import PromptCard from './PromptCard'

const Profile = ({desc,name,
  data,
  handleedit,
  handledelete}) => {
  return (
    <section className='w-full '>
      <h1 className='head_text text-left'>

        <span className='blue_gradient'>{name} Profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      <div className='mt-16 prompt_layout items-center justify-center'>
    {data.map((post)=>(

      <PromptCard
      key={post._id}
      post={post}
      handleEdit={()=>handleedit && handleedit(post)}
      handleDelete={()=>handledelete && handledelete(post)}

      />
    ))}

  </div>
      

    </section>
  )
}

export default Profile