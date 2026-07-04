import fashionTopImg74 from "../assets/asset 74.png";
import fashionTopImg75 from "../assets/asset 75.jpeg";
import fashionTopImg76 from "../assets/asset 76.jpeg";
import fashionTopImg77 from "../assets/asset 77.jpeg";

export default function SkincareSection() {
  return (
    <div id="fashiionTopDetails">
        <h3>Hair & Skincare Essentials</h3>

        <div id="listProducts" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-lg bg-gray-50">
          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg74} alt="offerCard" width={"140px"} />
            </div>

            <div className="mt-2">
              <p>Face Wash</p>
              <p className="font-bold">Max. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg75} alt="offerCard" width={"120px"} />
            </div>

            <div className="mt-2">
              <p>Hair Removal</p>
              <p className="font-bold">Max. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg76} alt="offerCard" width={"130px"} />
            </div>

            <div className="mt-2">
              <p>Hair Claw</p>
              <p className="font-bold">Special Offer</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg77} alt="offerCard" width={"110px"} />
            </div>

            <div className="mt-2">
              <p>Face Pack</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>
        </div>
      </div>
  )
}
