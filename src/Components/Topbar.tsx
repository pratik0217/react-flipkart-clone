import flipkartLogo from "../assets/asset 0.png"
import flipkartName from "../assets/asset 1.png"
import airplaneLogo from "../assets/asset 2.png"
import travelName from "../assets/asset 3.png"

export default function Topbar() {
    return (
        <div id='topbar-homepage' className='flex items-center justify-between pt-3 pb-2 gap-2'>
            <div id="logo" className='flex items-center gap-2 md:gap-4'>
                <div id="flipkartBranding" className='flex items-center justify-center gap-1 md:gap-2 bg-yellow-300 w-[100px] md:w-[125px] p-1 md:p-2 rounded-lg'>
                    <div>
                        <img src={flipkartLogo} alt="Flipkart Logo" className='h-[16px] md:h-[20px]' />
                    </div>

                    <div>
                        <img src={flipkartName} alt="Flipkart name" className='h-[20px] md:h-[25px]' />
                    </div>
                </div>

                <div id="flipkartBranding" className='hidden md:flex items-center justify-center gap-2 bg-gray-100 w-[125px] p-2 rounded-lg'>
                    <div>
                        <img src={airplaneLogo} alt="Flipkart Logo" className='h-[20px]' />
                    </div>

                    <div>
                        <img src={travelName} alt="Flipkart name" className='h-[25px]' />
                    </div>
                </div>
            </div>

            <div id="location-section" className='text-xs md:text-sm'>
                <p className='hidden md:block'><i className="fa-solid fa-location-dot"></i> Location not set <a href="#" >Select delivery location</a> <i className="fa-solid fa-angle-right"></i></p>
                <p className='md:hidden'><i className="fa-solid fa-location-dot"></i> <a href="#" >Set Location</a></p>
            </div>
        </div>
    )
}
