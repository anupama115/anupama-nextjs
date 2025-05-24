'use client'
import React from 'react'
import { useState } from 'react';

const About = () => {
    const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1 className='text-3xl font-bold underline'>About Page</h1>

      <div className="card bg-white p-4 shadow-md w-1/4 rounded-lg">
        <h2 className='text-2xl font-bold'>Card {count}</h2>
        <p className='text-gray-500'>This is a card</p>
        <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  )
}

export default About
