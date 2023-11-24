import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'

function PopularProducts() {
    return (
        <section id='products' className='max-container max-sm:mt-5 '>
            <div className='flex flex-col justify-start gap-5 '>
                <h2 className='font-palanquin font-bold text-4xl'>Our <span className='text-coral-red'>Popular</span> Products</h2>
                <p className='lg:max-w-lg mt font-montserrat text-slate-gray'>
                    Experience top-notch quality
                    and style with our sought-after
                    selections. Discover a world of
                    comfort, design, and value
                </p>
            </div>



            <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2  grid-cols-1 sm:gap-4 gap-10'>
                {products.map((product) => (
                    <div key={product.id} className='flex justify-center items-center'>
                       <PopularProductCard key={product.name} {...product} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PopularProducts
