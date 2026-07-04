import './App.css'
import Topbar from './Components/Topbar'
import Searchbar from './Components/Searchbar'
import Services from './Components/Services'
import CarouselBar from './Components/CarouselBar'
import OfferCardBar from './Components/offerCardBar'
import WishListBox from './Components/WishListProducts'
import BrandsSpotlightBox from './Components/BrandsSpotlightBox'
import FashionTopDetails from './Components/FashionTopDetails'
import TopTale from './Components/TopTale'
import TreadingGadgets from './Components/TreadingGadgets'
import SkincareSection from './Components/SkincareSection'
import MultipleProducts from './Components/MultipleProducts'
import CompanyFooterMsg from './Components/CompanyFooterMsg'
import FooterServices from './Components/FooterServices'
import CompanyContact from './Components/CompanyContact'
import CopyRight from './Components/CopyRight'

function App() {
  return (
    <>
      <header className='sticky top-0 z-50 bg-white'>
        <div className='container mx-auto px-4 max-w-7xl'>
          <Topbar />
          <Searchbar />
          <Services />
        </div>
      </header>

      <main className='container mx-auto px-4 max-w-7xl'>
        <CarouselBar />

        <section id='offerCards'>
          <OfferCardBar />
        </section>

        <section id='wishListCollection'>
          <WishListBox />
        </section>

        <section id='brands-spotlight'>
          <BrandsSpotlightBox />
        </section>

        <section id='fashion-topdetails'>
          <FashionTopDetails />
          <TopTale />
          <TreadingGadgets />
          <SkincareSection />
        </section>

        <section>
          <MultipleProducts />
        </section>
      </main>

      <footer className='container mx-auto px-4 max-w-7xl'>  
        <CompanyFooterMsg />
        <FooterServices />
        <CompanyContact />
        <CopyRight />
      </footer>
    </>
  )
}

export default App
