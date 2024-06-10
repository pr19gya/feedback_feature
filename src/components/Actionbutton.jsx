import React, {useState} from 'react'
import { RxCross1 } from "react-icons/rx";
import { AiFillWechat } from "react-icons/ai";
import { PiNotePencilFill } from "react-icons/pi";
import { MdThumbsUpDown } from "react-icons/md";
import { FaFlag } from "react-icons/fa6";
import { TfiWrite } from "react-icons/tfi";
import Form from './Form';


const Actionbutton = () => {
    const [isVisible, setVisible]= useState(false);
    const [feedbackForm, setFeedbackForm]= useState(false);

    const toggleVisibility=()=>{
        setVisible(!isVisible);
    };
    const showFeedback=()=>{
        setFeedbackForm(!feedbackForm);
    }
  return (
    <>
    <div className='flex'>
    { feedbackForm && <Form/>}
    <div>

        {isVisible && (
            <div >
                <div className='flex right-[32px]'>
                <div className='bg-white my-7 mx-2 p-1 rounded-lg'>Report an Issue</div>
                <div onClick={showFeedback} className='bg-white my-2 rounded-full h-[4rem] w-[4rem]  hover:shadow-2xl'><div className=' p-[1rem] '><FaFlag  className='size-8  '/></div></div>
                </div>
                <div className='flex right-[32px]'>
                <div className='bg-white my-7 mx-2 p-1 rounded-lg'>Share Feedback</div>
                <div onClick={showFeedback}  className='bg-white my-2 rounded-full h-[4rem] w-[4rem]  hover:shadow-2xl'><div className=' p-[0.9rem] '><MdThumbsUpDown  className='size-9  '/></div></div>
                </div>
                <div className='flex  right-[32px]'>
                <div className='bg-white my-7 mx-2 p-1 rounded-lg'>Give Suggestion</div>
                <div onClick={showFeedback} className='bg-white my-2 rounded-full h-[4rem] w-[4rem]  hover:shadow-2xl'><div className=' p-[0.9rem] '><PiNotePencilFill  className='size-9  '/></div></div>
                </div>
                <div className='flex mb-[5rem] right-[32px] '>
                <div className='bg-white my-7 ml-[2.5rem] mr-2 p-1 rounded-lg'>Contact Us</div>
                <div onClick={showFeedback} className='bg-white my-2 rounded-full h-[4rem] w-[4rem] right-5 hover:shadow-2xl'><div className=' p-[0.9rem] '><AiFillWechat  className='size-9  '/></div></div>
                </div>
            </div>
        )}
    </div>
    </div>
    <div onClick={toggleVisibility} className='bg-white rounded-full h-[4rem] w-[4rem] fixed bottom-[32px] right-[25px]  hover:shadow-2xl'><div className=' p-[0.9rem] '>{isVisible && <RxCross1  className='size-9  '/>} {!isVisible && <TfiWrite className='size-8'/>}</div></div>
    
    </>
  )
}

export default Actionbutton