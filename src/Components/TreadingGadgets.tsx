import fashionTopImg70 from "../assets/asset 70.jpeg";
import fashionTopImg71 from "../assets/asset 71.png";
import fashionTopImg72 from "../assets/asset 72.png";
import fashionTopImg73 from "../assets/asset 73.png";

export default function TreadingGadgets() {
  return (
    <div id="fashiionTopDetails">
        <h3>Treading Gadgets & Appliances</h3>

        <div id="listProducts" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-lg bg-gray-50">
          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg70} alt="offerCard" width={"160px"} />
            </div>

            <div className="mt-2">
              <p>True Wireless</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg71} alt="offerCard" width={"130px"} />
            </div>

            <div className="mt-2">
              <p>Trimmers</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg72} alt="offerCard" width={"130px"} />
            </div>

            <div className="mt-2">
              <p>Power Banks</p>
              <p className="font-bold">Min. 50% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg73} alt="offerCard" width={"140px"} />
            </div>

            <div className="mt-2">
              <p>Earphones</p>
              <p className="font-bold">Grab Now</p>
            </div>
          </div>
        </div>
      </div>
  )
}
