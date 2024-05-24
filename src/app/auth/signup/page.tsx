'use client'
import React from 'react';
import { useFormState } from 'react-dom';
import { onCreateAccountAction } from '@actions';
import { redirect } from 'next/navigation';


const SignUp = (): JSX.Element => {
    const [state, action] = useFormState(onCreateAccountAction, {message: ""});
  return (
    <section className="bg-[url('/SVG/doodle-bg-sm-pink.svg')] md:bg-[url('/SVG/doodle-bg-lg.svg')] bg-repeat w-screen h-screen flex items-center justify-center">
        <form action={async (formData) => {
            action(formData);

            redirect("/")
        }} className="flex flex-col justify-center items-stretch gap-5 bg-[#f6f6f6d7] border-[1px] border-[#80808036] p-6 rounded-md">
            <h1 className="text-3xl sm:text-4xl font-asap font-bold text-pink md:text-black text-center mb-2 sm:mb-4">Sign Up!</h1>
            <div className="flex flex-col justify-center items-start">
                <label className="font-asap text-base sm:text-lg text-black" htmlFor="names">Full Name*</label>
                <input className="text-base sm:text-lg font-asap border-2 rounded-sm border-[#80808036] h-10 pl-3 w-[80vw] md:w-[40vw] md:min-w-[460px] lg:w-[25vw]" name="names" type="text" id="names" placeholder='Your full name'/>
            </div>
            <div className="flex flex-col justify-center items-start">
                <label className="font-asap text-base sm:text-lg text-black" htmlFor="email">Email*</label>
                <input className="text-base sm:text-lg font-asap border-2 rounded-sm border-[#80808036] h-10 pl-3 w-[80vw] md:w-[40vw] md:min-w-[460px] lg:w-[25vw]" name="email" type="email" id="email" placeholder='Enter your email'/>
            </div>
            <div className="flex flex-col justify-center items-start">
                <label className="font-asap text-base sm:text-lg text-black" htmlFor="names">Phone number*</label>
                <input className="text-base sm:text-lg font-asap border-2 rounded-sm border-[#80808036] h-10 pl-3 w-[80vw] md:w-[40vw] md:min-w-[460px] lg:w-[25vw]" name="phone" type="tel" id="phone" placeholder='Your phone number'/>
            </div>
            <div className="flex flex-col justify-center items-start">
                <label className="font-asap text-base sm:text-lg text-black" htmlFor="password">Password*</label>
                <input className="text-base sm:text-lg font-asap border-2 rounded-sm border-[#80808036] h-10 pl-3 w-[80vw] md:w-[40vw] md:min-w-[460px] lg:w-[25vw]" name="password" type="password" id='password' placeholder='Create password'/>
            </div>
            <div className="flex flex-col justify-center items-start">
                <label className="font-asap text-base sm:text-lg text-black" htmlFor="confirm-password">Confirm Password*</label>
                <input className="text-base sm:text-lg font-asap border-2 rounded-sm border-[#80808036] h-10 pl-3 w-[80vw] md:w-[40vw] md:min-w-[460px] lg:w-[25vw]" name="confirm-password" type="password" id='confirm-password' placeholder='Re-enter password'/>
            </div>
            <div className="flex flex-row justify-start items-center gap-2 mt-[-10px]">
                <input type="checkbox" id="show-password" />
                <label className="font-asap text-base sm:text-lg text-black" htmlFor="show-password">Show password</label>
            </div>
            <button className="p-2 rounded-md text-white font-semibold bg-pink">Sign Up</button>

            <h2 className="font-asap text-base sm:text-lg text-[grey] self-center">Already have an account? <a href="/auth/login" className="text-pink"> Login</a></h2>
        </form>
    </section>
  )
}

export default SignUp