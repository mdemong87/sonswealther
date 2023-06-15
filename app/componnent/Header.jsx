import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../public/logo.png";
import Container from "./Container";

export default function Header() {




    return (
        <header className="w-screen bg-black border-b-2 border-gray-900">
            <Container>
                <div className="grid  grid-cols-3 text-white items-center">
                    <div className="">
                        <nav>
                            <ul className="flex gap-5 overflow-x-hidden flex-wrap leading-none">
                                <Link className="text-lg" href={"/"}>HOME</Link>
                                <Link className="text-lg" href={"/"}>HOW IT STARTED</Link>
                                <Link className="text-lg" href={"/"}>COLLECTIONS</Link>
                                <Link className="text-lg" href={"/"}>RETURNS</Link>
                                <Link className="text-lg" href={"/"}>CONTACT</Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="py-5 flex flex-col items-center justify-center">
                        <Image src={logo} height="100" width="100" alt="logo" />
                        <h3 className="text-sm pt-2 text-slate-400">In Support of our ‘Pissed Off’, Awakened, and Irate Patriots!</h3>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="flex gap-3 py-2 px-2 border rounded-md cursor-pointer">
                            <AiOutlineShoppingCart className="text-4xl" />
                            <span className="text-3xl">0</span>
                        </div>
                    </div>
                </div>
            </Container >
        </header >
    )
}
