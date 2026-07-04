import OfferCards from "./offerCards"
import offerCardImg55 from '../assets/asset 55.png'
import offerCardImg56 from '../assets/asset 56.png'
import offerCardImg57 from '../assets/asset 57.png'
import offerCardImg58 from '../assets/asset 58.png'
import offerCardImg59 from '../assets/asset 59.png'
import offerCardImg60 from '../assets/asset 60.png'

export default function BrandsSpotlightBox() {
    return (
        <section>
            <div className="mt-4">
                <h2>Brands in Spotlight</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-3">
                <div className="flex flex-col h-full">
                    <OfferCards offerCardImg={offerCardImg55} />
                </div>
                <div className="flex flex-col h-full">
                    <OfferCards offerCardImg={offerCardImg56} />
                </div>
                <div className="flex flex-col h-full">
                    <OfferCards offerCardImg={offerCardImg57} />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-3">
                <div className="flex flex-col h-full">
                    <OfferCards offerCardImg={offerCardImg58} />
                </div>
                <div className="flex flex-col h-full">
                    <OfferCards offerCardImg={offerCardImg59} />
                </div>
                <div className="flex flex-col h-full">
                    <OfferCards offerCardImg={offerCardImg60} />
                </div>
            </div>
        </section>
    )
}
