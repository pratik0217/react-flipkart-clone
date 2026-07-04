import servicesImg1 from '../assets/asset 19.svg'
import servicesImg2 from '../assets/asset 20.svg'
import servicesImg3 from '../assets/asset 21.svg'
import servicesImg4 from '../assets/asset 22.svg'
import servicesImg5 from '../assets/asset 23.svg'
import servicesImg7 from '../assets/asset 25.svg'
import servicesImg8 from '../assets/asset 26.svg'
import servicesImg9 from '../assets/asset 27.svg'
import servicesImg10 from '../assets/asset 28.svg'
import servicesImg11 from '../assets/asset 29.svg'
import servicesImg12 from '../assets/asset 30.svg'
import servicesImg13 from '../assets/asset 31.svg'
import servicesImg14 from '../assets/asset 32.svg'
import ServicesBoxs from './ServicesBoxs'

export default function Services() {
    return (
        <>
            <div className='flex justify-between py-2.5 overflow-x-auto gap-2 md:gap-0 scrollbar-hide'>
                <ServicesBoxs img={servicesImg1} heading={"For You"} />
                <ServicesBoxs img={servicesImg2} heading={"Fashion"} />
                <ServicesBoxs img={servicesImg3} heading={"Mobiles"} />
                <ServicesBoxs img={servicesImg4} heading={"Beauty"} />
                <ServicesBoxs img={servicesImg5} heading={"Electronics"} />
                <ServicesBoxs img={servicesImg7} heading={"Appliances"} />
                <ServicesBoxs img={servicesImg8} heading={"Toys"} />
                <ServicesBoxs img={servicesImg9} heading={"Food"} />
                <ServicesBoxs img={servicesImg10} heading={"Auto"} />
                <ServicesBoxs img={servicesImg11} heading={"2 Wheelers"} />
                <ServicesBoxs img={servicesImg12} heading={"Sports"} />
                <ServicesBoxs img={servicesImg13} heading={"Books"} />
                <ServicesBoxs img={servicesImg14} heading={"Furniture"} />
            </div>
        </>
    )
}
