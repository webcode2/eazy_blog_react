import React from 'react'
import Header from '../../components/shared/header'

function Login() {
  return (
   
// <!-- Section 1 -->
<div className='max-h-12' >
    <Header/>
<section className="w-full   xl:px-8 lg:px-24 lg:py-36 md:py-20 md:px-44 px-4 py-80 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
    <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center md:flex-row">

            <div className="w-full space-y-5 md:w-3/5 md:pr-16">
                <p className="font-medium text-blue-500 uppercase">Building Businesses</p>
                <h2 className="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl">
                    Changing The Way People Do Business.
                </h2>
                <p className="text-xl text-gray-600 md:pr-16">Learn how to engage with your visitors and teach them about your mission. We're revolutionizing the way customers and businesses interact.</p>
            </div>

            <div className="w-full mt-16 md:mt-0 md:w-2/5">
                <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-slate-300 rounded-lg border-b-2 border-gray-300 shadow-lg px-7">
                    <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
                    <input type="text" name="email" className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none" placeholder="Email address"/>
                    <input type="password" name="password" className="block w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 focus:ring focus:ring-blue-500 focus:outline-none rounded-none" placeholder="Password"/>
                    <div className="block">
                        <button className="w-full px-3 py-4 font-medium text-white rounded-md bg-green-600 ">Log Me In</button>
                    </div>
                    <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account? <a href=" _" className="text-blue-500 underline">Sign up here</a></p>
                </div>
            </div>

        </div>
    </div>
</section>
</div>
  )
}

export default Login