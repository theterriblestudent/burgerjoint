import React from 'react'

const SignupSection = () : JSX.Element => {
  return (
    <section className="full-width container-grid bg-[url('/SVG/doodle-bg-sm.svg')] bg-repeat pt-20 pb-20 md:pt-28 md:pb-28">
        <div className="flex flex-col items-center justify-center gap-5 sm:gap-8">
            <h1 className="font-asap font-bold text-4xl sm:text-5xl md:text-6xl text-center text-black uppercase max-w-[680px]">unlock more unbelievably delicious benifits</h1>
            <p className="font-asap text-lg md:text-xl text-[#434343] text-center max-w-[350px]">Create an account to get access to exclusive promos and re-order your favorites</p>
            <a className="btn primary">Sign Up</a>
        </div>
    </section>
  )
}

export default SignupSection