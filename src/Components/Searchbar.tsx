import { useSelector } from "react-redux"


export default function Searchbar() {
    // const dispatch = useDispatch();
    const count = useSelector((state: any) => state.counterCart.value);
    return (
        <div id="searchbar" className="flex justify-between items-center mt-2 gap-2">
            <div className='flex-1'>
                <input className="border-secondary-subtle w-full h-10 md:h-11 px-4 md:px-10 rounded-lg border-blue-400 border-2 text-sm md:text-base" type="search" placeholder="Search for Products, Brands and More" aria-label="Search"></input>
            </div>

            <div id="services" className="flex gap-2 md:gap-4 items-center">
                <div id="loginicon" className="flex items-center gap-1 md:gap-2">
                    <i className="fa-regular fa-circle-user text-lg md:text-xl"></i>
                    <p className='hidden md:block text-sm'>Login</p>
                    <i className="fa-solid fa-angle-down text-sm"></i>
                </div>

                <div id="more" className="hidden md:flex items-center gap-2">
                    <p>More</p>
                    <i className="fa-solid fa-angle-down"></i>
                </div>

                <div id="cartBox" className="flex items-center gap-1 md:gap-2">
                    <i className="fa-solid fa-cart-arrow-down text-lg md:text-xl"></i>
                    <p className="bg-amber-300 px-2 md:px-3 py-1 md:py-2 rounded-full text-sm">{count}</p>
                </div>
            </div>
        </div>
    )
}
