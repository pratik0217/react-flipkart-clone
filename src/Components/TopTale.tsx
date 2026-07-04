import fashionTopImg66 from "../assets/asset 66.jpeg";
import fashionTopImg67 from "../assets/asset 67.jpeg";
import fashionTopImg68 from "../assets/asset 68.jpeg";
import fashionTopImg69 from "../assets/asset 69.jpeg";

export default function TopTale() {
  return (
    <div id="fashiionTopDetails">
        <h3>Top picks of the sale</h3>

        <div id="listProducts" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-lg bg-gray-50">
          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg66} alt="offerCard" width={"130px"} />
            </div>

            <div className="mt-2">
              <p>Bike Body Covers</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg67} alt="offerCard" width={"100px"} />
            </div>

            <div className="mt-2">
              <p>Microphones</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg68} alt="offerCard" width={"110px"} />
            </div>

            <div className="mt-2">
              <p>Bike Mobile Holders</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg69} alt="offerCard" width={"150px"} />
            </div>

            <div className="mt-2">
              <p>Vehicle Light Bulbs</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>
        </div>
      </div>
  )
}
