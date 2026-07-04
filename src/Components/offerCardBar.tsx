import OfferCards from "./offerCards"
import offerCardImg1 from '../assets/asset 43.png'
import offerCardImg2 from '../assets/asset 44.png'
import offerCardImg3 from '../assets/asset 45.png'

export default function offerCardBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-4">
        <div className="flex flex-col h-full">
            <OfferCards offerCardImg={offerCardImg1} />
        </div>
        <div className="flex flex-col h-full">
            <OfferCards offerCardImg={offerCardImg2} />
        </div>
        <div className="flex flex-col h-full">
            <OfferCards offerCardImg={offerCardImg3} />
        </div>
    </div>
  )
}
