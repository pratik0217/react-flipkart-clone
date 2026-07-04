import MultiProductsCards from "./MultiProductsCards"
import productImg78 from "../assets/asset 78.jpeg"
import productImg79 from "../assets/asset 79.jpeg"
import productImg80 from "../assets/asset 80.jpeg"
import productImg81 from "../assets/asset 81.jpeg"
import productImg82 from "../assets/asset 82.png"
import productImg83 from "../assets/asset 83.png"
import productImg85 from "../assets/asset 85.jpeg"
import productImg86 from "../assets/asset 86.jpeg"
import productImg88 from "../assets/asset 88.jpeg"
import productImg89 from "../assets/asset 89.jpeg"
import productImg90 from "../assets/asset 90.jpeg"
import productImg91 from "../assets/asset 91.png"
import productImg92 from "../assets/asset 92.jpeg"
import productImg93 from "../assets/asset 93.jpeg"
import productImg94 from "../assets/asset 94.png"
import productImg95 from "../assets/asset 95.jpeg"
import productImg97 from "../assets/asset 97.jpeg"
import productImg98 from "../assets/asset 98.jpeg"
import productImg99 from "../assets/asset 99.jpeg"
import productImg101 from "../assets/asset 101.jpeg"
import productImg103 from "../assets/asset 103.jpeg"
import productImg104 from "../assets/asset 104.jpeg"
import productImg105 from "../assets/asset 105.jpeg"
import productImg106 from "../assets/asset 106.jpeg"
import productImg107 from "../assets/asset 107.jpeg"
import productImg108 from "../assets/asset 108.jpeg"
import productImg109 from "../assets/asset 109.jpeg"
import productImg111 from "../assets/asset 111.jpeg"
import productImg113 from "../assets/asset 113.jpeg"
import productImg114 from "../assets/asset 114.jpeg"
import productImg115 from "../assets/asset 115.png"
import productImg116 from "../assets/asset 116.jpeg"

export default function MultipleProducts() {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg78} productTitle="OnePlus Nord CE6 (Fresh Blue, 128GB)" productPrice={33944} />
        <MultiProductsCards image={productImg79} productTitle="Flamingo Blue Women Cootten Kurta" productPrice={408} />
        <MultiProductsCards image={productImg80} productTitle="Back Cover for iPhone 16" productPrice={186} />
        <MultiProductsCards image={productImg81} productTitle="EVRGLOW TSHOT PREMIUM LIMITED EDI" productPrice={369} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg82} productTitle="Nokia 105 Classic Single Sim keypad" productPrice={999} />
        <MultiProductsCards image={productImg83} productTitle="Cherry Blossom Shoe Polish" productPrice={92} />
        <MultiProductsCards image={productImg85} productTitle="CASIO Vintage Rose Gold Dial" productPrice={4494} />
        <MultiProductsCards image={productImg86} productTitle="Kriska Women Viscose Kurta Pant" productPrice={369} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg88} productTitle="SoftTech Black Cover for Realme C2" productPrice={169} />
        <MultiProductsCards image={productImg89} productTitle="Grab Kart Foam Cleaner" productPrice={186} />
        <MultiProductsCards image={productImg90} productTitle="Allen Solly Analog Watch" productPrice={1719} />
        <MultiProductsCards image={productImg91} productTitle="Ai+ Nova 2 5G (Purple 64GB)" productPrice={11999} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg92} productTitle="Back Cover for Iphone 16)" productPrice={247} />
        <MultiProductsCards image={productImg93} productTitle="AK fashion mall Women Kurta" productPrice={410} />
        <MultiProductsCards image={productImg94} productTitle="Cherry Blossom Shoe Polish" productPrice={89} />
        <MultiProductsCards image={productImg95} productTitle="Doubledicestore Back Cover vivo T4x" productPrice={230} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg97} productTitle="SONATA Quartz dial black Watch" productPrice={648} />
        <MultiProductsCards image={productImg98} productTitle="Samsung Galaxy F70e 5G (Blue 128GB)" productPrice={12999} />
        <MultiProductsCards image={productImg99} productTitle="Micvir Back Cover for Realme 10pro" productPrice={167} />
        <MultiProductsCards image={productImg101} productTitle="CASIO Vintage A158WA-1DF Dial" productPrice={1894} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg103} productTitle="AVANSHREE Women Slik Kurta" productPrice={1012} />
        <MultiProductsCards image={productImg104} productTitle="Doubledicestore Back Cover iPhone14" productPrice={156} />
        <MultiProductsCards image={productImg105} productTitle="Zeolite 219-11076 Odour Control" productPrice={290} />
        <MultiProductsCards image={productImg106} productTitle="Allen Solly Analog Watch" productPrice={818} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg107} productTitle="Doubledicestore Back Cover iPhone16" productPrice={185} />
        <MultiProductsCards image={productImg108} productTitle="OnePlus Nord CE6 (Black, 256GB)" productPrice={36498} />
        <MultiProductsCards image={productImg109} productTitle="ELEPANTS Women Khadi Cotten Kurti" productPrice={508} />
        <MultiProductsCards image={productImg111} productTitle="TIMEX Blue Dial Stainless Steel Watch" productPrice={638} />
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:mt-10">
        <MultiProductsCards image={productImg113} productTitle="ELEPANTS Women Khadi Cotten Kurti" productPrice={414} />
        <MultiProductsCards image={productImg114} productTitle="Oumad Printend Kurta & Palazzo Set" productPrice={553} />
        <MultiProductsCards image={productImg115} productTitle="Ai+ Nova 2 5G (Purple 64GB)" productPrice={11999} />
        <MultiProductsCards image={productImg116} productTitle="OnePlus Nord CE6 (Lunar Pearl, 128GB)" productPrice={34620} />
    </div>
    </>
  )
}
