import wishListImg1 from "../assets/asset 47.jpeg"
import wishListImg2 from "../assets/asset 48.jpeg"
import wishListImg3 from "../assets/asset 49.jpeg"
import wishListImg4 from "../assets/asset 50.jpeg"
import wishListImg5 from "../assets/asset 51.jpeg"
import wishListImg6 from "../assets/asset 52.jpeg"
import wishListImg7 from "../assets/asset 53.jpeg"
import wishListImg8 from "../assets/asset 54.jpeg"
import ProductCard from "./ProductCard"

export default function WishListProducts() {
  return (
    <>
      <div id="wishList">
        <h3>Widest collection</h3>

        <div id="listProducts" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-lg bg-gray-50">
          <div id="products" className="flex flex-col h-full">
            <ProductCard offerCardImg={wishListImg1} />
            <div className="mt-2">
              <p>Deal of the Day</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">From <i className="fa-solid fa-indian-rupee-sign text-sm"></i>99</p>
              </div>
            </div>
          </div>

          <div id="products" className="flex flex-col h-full">
            <ProductCard offerCardImg={wishListImg2} />
            <div className="mt-2">
              <p>Men's Shoes</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">Min. 40% Off</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={wishListImg3} alt="offerCard" width={"120px"} height={"150px"} />
            </div>

            <div className="mt-2">
              <p>Sale</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">From <i className="fa-solid fa-indian-rupee-sign text-sm"></i>99</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={wishListImg4} alt="offerCard" width={"180px"} height={"150px"} />
            </div>

            <div className="mt-2">
              <p>Cello, Milton & More</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">From <i className="fa-solid fa-indian-rupee-sign text-sm"></i>99</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="wishList">
        <h3>Widest collection</h3>

        <div id="listProducts" className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 rounded-lg bg-gray-50">
          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={wishListImg5} alt="offerCard" width={"160px"} />
            </div>

            <div className="mt-2">
              <p>Most Loved</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">Top Rated</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={wishListImg6} alt="offerCard" width={"160px"} />
            </div>

            <div className="mt-2">
              <p>Most Loved</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">Top Rated</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={wishListImg7} alt="offerCard" width={"160px"} />
            </div>

            <div className="mt-2">
              <p>Best Picks</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">Up to 90% Off</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div id="offerCard" className="rounded-lg h-[150px] md:h-[188px] bg-gray-200 flex items-center justify-center w-full shrink-0">
              <img className="rounded p-1 object-contain" src={wishListImg8} alt="offerCard" width={"160px"} />
            </div>

            <div className="mt-2">
              <p>Most Loved</p>
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold">From <i className="fa-solid fa-indian-rupee-sign text-sm"></i>599</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
