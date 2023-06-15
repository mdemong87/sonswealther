'use client'


import Image from "next/image";
import { useState } from "react";
import smallsec from "../../public/jkj.jpg";
import productIkmage from "../../public/tee.png";

export default function LeftHero() {


    const [select, setselect] = useState(productIkmage);



    return (
        <div className="w-full grid grid-cols-3 items-center">
            <div>
                <div className="w-full flex justify-center cursor-pointer">
                    <Image onClick={() => setselect(productIkmage)} src={productIkmage} alt="product" height="100" width="100" className={` ${select == productIkmage ? "border-2" : null}`} />
                </div>
                <div className="w-full flex justify-center mt-8 cursor-pointer">
                    <Image onClick={() => setselect(smallsec)} src={smallsec} alt="product" height="100" width="100" className={`${select == smallsec ? "border-2" : null}`} />
                </div>
            </div>
            <div className="col-span-2 flex justify-center h-90">
                <Image className="h-full w-full " src={select} alt="product" height="800" width="800" />
            </div>
        </div>
    )
}
