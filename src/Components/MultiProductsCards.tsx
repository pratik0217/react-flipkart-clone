import {add, remove } from "../redux/features/cartItem"
import { useDispatch } from "react-redux"

export default function MultiProductsCards({ image, productTitle, productPrice }: { image: string, productTitle: string, productPrice: number }) {
  const dispatch = useDispatch();

  return (
    <div id="product-card" className="flex flex-col h-full">
      <div id="product-img" className="w-full h-[200px] md:h-[250px] lg:h-[300px] bg-gray-100 rounded-2xl mb-2 shrink-0">
        <img src={image} alt="Product Image" className="w-full h-full object-contain p-2" />
      </div>

      <div id="product-details" className="flex flex-col flex-1">
        <p className="text-sm md:text-base line-clamp-2 min-h-10 md:min-h-12">{productTitle}</p>
        <div id="product-info" className="flex justify-between items-center mt-auto pt-2">
          <p className="font-bold text-sm md:text-base" ><i className="fa-solid fa-indian-rupee-sign text-sm"></i> {productPrice}</p>
          
          <div className="flex gap-1 md:gap-2">
            <button onClick={()=> {
              dispatch(add());
            }} className="bg-yellow-300 font-bold rounded px-2 md:px-3 py-1 md:py-2 text-sm">Add</button>

            <button onClick={()=> {
              dispatch(remove());
            }} className="bg-yellow-300 font-bold rounded px-2 md:px-3 py-1 md:py-2 text-sm">Remove</button>
          </div>
        </div>
      </div>
    </div>
  )
}
