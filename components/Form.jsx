import Link from 'next/link'
import React from 'react'

const Form = ({
  type,
  post,
  setpost,
  submitting,
  handleSubmit,
  }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-start'>
        <span className='blue_gradient'>{type} Post</span>
        </h1>
        <p className='desc text-left max-w-md'>
          {type} and share amazing prompts with the world.and let your imagination run wild with any AI-prowred platform
        </p>

        <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorephism'
        >
          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
            <textarea
            value={post.prompt}
            onChange={(e)=>{setpost({...post,prompt:e.target.value})}}
            placeholder='write your prompt here...'
            className='form_textarea'
            >

            </textarea>
          </label>

          <label>
         
            <span
             className='font-satoshi font-semibold text-base
              text-gray-700'> Tag{' '} <span className='font-normal'>(#product,#webdev,#music)</span></span>
            <input
            value={post.tag}
            onChange={(e)=>{setpost({...post,tag:e.target.value})}}
            placeholder='#tag'
            className='form_input'
            >

            </input>
          </label>

          <div className='flex-end mx-3 mb-5 gap-4'>
            <Link href="/" className='text-gray-500 text-sm'>
              cancel
            </Link>
            <button type='submit'
            className='px-5 p-1.5 text-sm bg-primary-orange rounded-full text-white'
            disabled={submitting}>
              {submitting?`${type}...`:`${type}`}

            </button>


          </div>

        </form>

    </section>
  )
}

export default Form