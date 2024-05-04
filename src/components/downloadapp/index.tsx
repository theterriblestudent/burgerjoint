import React from 'react';
import Image from "next/image";

const AppSection = () : JSX.Element => {
  return (
    <section className="full-width container-grid bg-[#2C2E2D] pt-20 pb-10 sm:pt-24 sm:pb-14 lg:pb-24">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-7 lg:gap-24 h-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-5 justify-items-center lg:justify-items-start ">
                <h1 className="col-span-2 mb-4 font-asap text-4xl sm:text-5xl md:text-6xl text-white uppercase font-bold text-center lg:text-left">Download the <br/>
                  <span className="font-asap text-4xl sm:text-5xl md:text-6xl lowercase font-bold text-pink mr-2 inline"> burgerjoint </span>App
                </h1>
                <Image className="h-[42px] md:h-[52px] w-auto" src="/logos/iOS_appstore.png" width={205} height={65} alt="Get it from appstore." />
                <Image className="h-[40px] md:h-[50px] w-auto" src="/logos/google_playstore.png" width={205} height={65} alt="Get it from playstore." />
            </div>
            <div className="relative max-w-[400px] md:w-[480px] lg:self-end -bottom-10 sm:-bottom-14 lg:-bottom-24">
              <Image src="/images/phone.png" alt="Phone" className='phone-image' width={604} height={640}/>
              <div className="image-overlay"></div>
            </div>
        </div>
    </section>
  )
}

export default AppSection;