import React from 'react'
import { useState } from 'react';
import { Sparkles, Eraser, FileText } from "lucide-react";

const ReviewResume = () => {

  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
  }

  return (
    <div className='h-full overflow-y-scroll p-6 flex flex-col items-center justify-center text-center text-slate-700'>

      <p className="text-2xl sm:text-3xl md:text-5xl font-medium">
        This feature is temporarily unavailable !
      </p>

      <p className="text-lg sm:text-xl mt-3">
        Please check back later !
      </p>

    </div>
  )
}

export default ReviewResume