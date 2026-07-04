import fashionTopImg62 from "../assets/asset 62.jpeg";
import fashionTopImg63 from "../assets/asset 63.jpeg";
import fashionTopImg64 from "../assets/asset 64.jpeg";
import fashionTopImg65 from "../assets/asset 65.jpeg";


export default function FashionTopDetails() {
  return (
    <>
      <div id="fashiionTopDetails">
        <h3>Fashion Top Details</h3>

        <div id="listProducts" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-lg bg-gray-50">
          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg62} alt="offerCard" width={"120px"} />
            </div>

            <div className="mt-2">
              <p>Men's Slippers & Flip Flops</p>
              <p className="font-bold">Min. 70% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg63} alt="offerCard" width={"120px"} />
            </div>

            <div className="mt-2">
              <p>Men's Sports & Shoes</p>
              <p className="font-bold">Min. 70% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg64} alt="offerCard" width={"120px"} />
            </div>

            <div className="mt-2">
              <p>Men's Sandals & Floaters</p>
              <p className="font-bold">Min. 70% Off</p>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={fashionTopImg65} alt="offerCard" width={"130px"} />
            </div>

            <div className="mt-2">
              <p>Men's Casual Shoes</p>
              <p className="font-bold">Min. 70% Off</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
