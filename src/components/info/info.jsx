import React from "react";

const Info = () => {
    return (
        <div className="relative h-[100vh] w-full bg-[url(../../../assets/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg)] bg-cover
             bg-center" >
            <div className="p-5 h-full w-full flex flex-col md:flex-row gap-10 bg-gradient-to-tl from-purple-900 to-green-700">
                <ul className="flex justify-between md:justify-normal md:flex-col pt-0 md:pt-[18rem] w-[300px] md:w-[30px] ">
                    <li className="text-[25px] md:text-[40px] text-[#cfcfcf] cursor-pointer hover:text-white">a</li>
                    <li className="text-[25px] md:text-[40px] text-[#cfcfcf] cursor-pointer hover:text-white">b</li>
                    <li className="text-[25px] md:text-[40px] text-[#cfcfcf] cursor-pointer hover:text-white">c</li>
                    <li className="text-[25px] md:text-[40px] text-[#cfcfcf] cursor-pointer hover:text-white">d</li>
                    <li className="text-[25px] md:text-[40px] text-[#cfcfcf] cursor-pointer hover:text-white">e</li>
                </ul>
                <div className="mt-[8rem] md:mt-0 pt-0 md:pt-[15rem] order-first md:order-last">
                    <h1 className="text-[#f55800] text-6xl font-semibold leading-[80px]">Hey There!</h1>
                    <h2 className="text-[#f55800] text-6xl font-semibold leading-[80px]">I'm Mark.</h2>
                    <p className="text-white text-[18px] my-5 text-[24px] md:text-[32px]">I'm a Software Developer</p>
                    <p className="text-[#cfcfcf] text-[18px] md:text-[20px] leading-[32px] w-[300px] md:w-[566px]">
                        I can help you build a product, feature or website. Look through
                        some of my work and experience! If you like what you see and have
                        a project you need coded, don't hesitate to reach out.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Info;

// nubelson-fernandes--Xqckh_XVU4-unsplash
// fotis-fotopoulos-6sAl6aQ4OWI-unsplash