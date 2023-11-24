import Button from "../components/Button"
import { arrowRight } from'../assets/icons'
import { statistics,shoes } from '../constants'
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

function Hero() {
    const [bigShoe, setbigShoe] = useState(bigShoe1);


    return (
        <section id='home' className="w-full flex xl:flex-row flex-col justify-center min-h-screen  gap-10 sm:gap-4 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x
            pt-28 ">
                <p className="text-xl font-montserrat text-coral-red ">Our Unique Collections</p>
                <h1 className="xl:mt-10 sm:mt-0 font-palanquin text-8xl max-sm:text-[45px] max-sm:leading-[1]
                font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 max-sm:text-[32pt] max-sm:whitespace-nowrap whitespace-nowrap">The New Arrivals</span>
                    <br />
                    <span className="inline-block text-coral-red mt-3">Bagy</span> Bags
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 xl:mb-14 mb-5 sm:max-w-sm">Get Our Modren And Unique Bags</p>
                <Button iconURL={arrowRight}>Click Here </Button>
                <div className="flex justify-start items-start flex-wrap w-full xl:mt-20 max-sm:mt-2 xl:gap-16 max-sm:gap-9 
                gap-10 md:justify-between">
                    {statistics.map((s) => (
                        <div key={s.label} className="whitespace-nowrap hover:text-coral-red">
                            <p className="xl:text-4xl text-[24pt] font-palanquin font-bold">{s.value}</p>
                            <p className="font-montserrat leading-7 text-slate-gray">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            

            <div className="flex-1 flex justify-center items-center 2xl:min-h-screen max-xl:py-40 bg-primary
            bg-hero bg-cover bg-center relative max-sm:py-0 ">
                <img src={bigShoe} alt="main photo" width={500} height={500} className="relative z-10 object-contain"/>
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[6%] max-sm:-bottom-[3%] max-sm:hidden ">
                    {shoes.map((s) => (
                        <div key={s.name}>
                            <ShoeCard
                                imgURL={s}
                                changeBigShoeImage={(shoe) => {setbigShoe(shoe)}}
                                bigShoeImg={bigShoe}
                                
                            />
                        </div>
                    ))}
                </div>
            </div>


        </section>
    )
}

export default Hero
