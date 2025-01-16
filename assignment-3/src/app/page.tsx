import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <header className='bg-[#D9D9D9] w-full h-[80px]'></header>
    <div className="max-h-max  bg-white p-8 md:p-16 items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold text-black">
            Welcome To Our Website
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard
          </p>
          <button 
            className="bg-black text-white px-8 py-3 text-lg transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Contact US
          </button>
        </div>
        <div className="relative aspect-square w-full max-w-md mx-auto">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-black relative overflow-hidden">
            <Image src = '/img.png' alt ='img'  width={502} height={485}/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default page