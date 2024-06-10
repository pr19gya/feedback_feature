import React from 'react'

const Form = () => {
  
  return (
    <div className='bg-gray-200 h-[25rem] w-[18rem] divide-y'>
        <div className='text-center pt-3 p-2'>Let us know about the <b>Issue</b> you are facing right now!</div>
        <div>
        <div className='mt-5  mx-5 '>
            Choose a section <select className=' bg-gray-300 mt-2  w-[15rem] rounded-lg p-2' >
            <option>Interview Question</option>
            <option>Other Questions</option></select></div>
        <div className='mt-5 mx-5' >

        Describe the Issue in detail
        <input type="text" className='h-[8rem] bg-gray-300 mt-2 w-[15rem] rounded-lg'/></div>
        </div> 
        <div className='divide-y mt-2  '>
            <input className='mt-1 ml-[13rem] bg-gray-600 p-1 px-2 rounded-lg text-white' type="submit"/>
        </div>
    </div>
  )
}

export default Form