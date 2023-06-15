import Container from "./Container";
import Description from "./Description";
import Discount from "./Discount";
import LeftHero from "./LeftHero";
import Righthero from "./Righthero";


export default function Hero() {
    return (
        <div className="w-screen bg-black">
            <Container>
                <div>
                    <div className=" mt-10 justify-between grid grid-cols-2 gap-2 text-white items-center">
                        <div className="mr-8">
                            <LeftHero />
                        </div>
                        <div className="text-white">
                            <Righthero />
                        </div>
                    </div>
                    <Description />
                </div>
            </Container>
            <Discount />
        </div>
    )
}
