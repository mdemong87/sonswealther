import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import Container from "./Container";
export default function () {
    return (
        <div className="bg-black text-white px-5">
            <Container>
                <div className="pl-5">
                    <div className="grid grid-cols-4 pt-10 pb-5 border-b-2 border-gray-800">
                        <div className=''>
                            <Image className="footerlogo" src={logo} height="200" width="200" alt="logo" />
                        </div>
                        <div>
                            <h2 className="text-xl text-gray-400 font-medium">QUICK LINKS</h2>
                            <ul className="flex flex-col gap-5 my-7">
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOME</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">HOW IT STARTED</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">COLLECTIONS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">RETURNS</Link>
                                <Link className="text-gray-200 cursor-pointer text-xs font-medium" href="#">CONTACT</Link>
                            </ul>
                        </div>
                        <div className="col-span-2 text-center">
                            <h1 className="text-xl text-gray-400">Join A Nation of ' Pissed Off ',
                                Awakened, and Irate Patriots and get Special Deals and Discounts!
                            </h1>
                            <div className="mt-5 flex gap-5 justify-center flex-col m-10">
                                <input className="w-full p-3 rounded-sm text-gray-950 placeholder:text-center" type="email" placeholder="Enter your email here" />
                                <button className="w-full border p-3 rounded-sm cursor-pointer bg-gray-400 text-gray-950 font-bold">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-center text-gray-300 py-7">
                            © 2023 SONS A BITCHES Apparel.
                        </p>
                    </div>

                </div>
            </Container>
        </div>
    )
}
