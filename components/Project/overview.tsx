import React from 'react'

const ProjectOverview = (props:{content:string}) => {
  return (
    <div className='bg-zinc-500 rounded-lg px-4 bg-opacity-10 border border-zinc-900'>
      <div className='Overview'>
        <h1 className='text-4xl text-white py-3 font-bold'>Overview</h1>
      </div>
      <div className='overView-content text-xl pb-4 font-medium text-zinc-300'>
        <span> {props.content}</span>

      </div>
    </div>
  )
}

export default ProjectOverview