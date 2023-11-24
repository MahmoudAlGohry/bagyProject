import { shoe8 } from "../assets/images"
import Button from "../components/Button"



function SuperQuality() {
    return (
        <section id="about-us" className="flex justify-between items-center max-lg:flex-col max-container
        gap-10 w-full">
            <div className="flex flex-1 flex-col ">
                <h2 className="xl:mt-10 sm:mt-0 font-palanquin text-4xl max-sm:text-[35px] max-sm:leading-[1]
                font-bold capitalize lg:max-w-lg whitespace-nowrap ">
                    We Provide you <span className="text-coral-red">Super </span>
                    <br />
                    <span className="inline-block text-coral-red mt-3">Quality</span> Bags
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">Wear in style with <span className="inline-block text-coral-red">Bagy</span> Explore trendy and modern bags, from our collections. Step up your fashion game we&apos;ve got your every step covered.</p>
                <div className="mt-8">

                <Button>View Details</Button>
                </div>
            </div>

            <div className="flex flex-1 justify-center items-center ">
                    <img src={shoe8} alt="main shoe" width={570} height={522}
                    className="object-contain shadow-xl rounded-3xl" />
            </div>
        </section>
    )
}

export default SuperQuality
